const http = require('http');
const path = require('path');
const url = require('url');
const multiparty = require('multiparty');
const fs = require('fs');
const os = require('os');

// 设置上传目录
const UPLOAD_DIR = path.resolve(__dirname, 'uploads');
const CHUNK_DIR = path.resolve(UPLOAD_DIR, 'chunks');

// 确保上传目录和分片目录存在
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}
if (!fs.existsSync(CHUNK_DIR)) {
    fs.mkdirSync(CHUNK_DIR);
}

// 创建服务器
const server = http.createServer((req, res) => {
    // 设置允许跨域的响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 处理 OPTIONS 请求（CORS 预检请求）
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const { pathname } = url.parse(req.url);

    // 处理文件上传请求
    if (pathname === '/upload' && req.method === 'POST') {
        console.log('Received upload request');

        // 创建 multiparty Form 实例
        const form = new multiparty.Form({
            uploadDir: CHUNK_DIR, // 分片文件保存到临时目录
            autoFiles: true       // 自动处理文件
        });

        // 解析表单数据
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Error parsing form data.');
                return;
            }

            // 获取上传的文件信息
            const file = files.file[0];
            const filename = fields.filename[0];
            const chunkName = fields.chunkName[0];

            if (!file || !filename || !chunkName) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Missing required fields.');
                return;
            }

            try {
                // 将分片文件重命名，避免冲突
                const chunkPath = path.join(CHUNK_DIR, chunkName);
                await fs.promises.rename(file.path, chunkPath);

                // 检查是否所有分片都已上传完成
                const allChunksUploaded = await checkIfAllChunksUploaded(filename);

                if (allChunksUploaded) {
                    // 合并所有分片
                    await mergeChunks(filename);

                    // 返回成功响应
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'File uploaded and merged successfully' }));
                } else {
                    // 返回部分上传成功的响应
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Chunk uploaded successfully' }));
                }
            } catch (error) {
                console.error('Error handling file upload:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error handling file upload.');
            }
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

// 辅助函数：检查是否所有分片都已上传完成
async function checkIfAllChunksUploaded(filename) {
    const chunkPattern = `${filename}-*`;
    const chunks = await fs.promises.readdir(CHUNK_DIR);
    const chunkFiles = chunks.filter(chunk => chunk.startsWith(filename));

    // 假设文件名格式为 "filename-index"，我们可以通过最大索引来判断是否所有分片都已上传
    const maxIndex = Math.max(...chunkFiles.map(chunk => parseInt(chunk.split('-')[1], 10)), -1);

    // 如果没有找到任何分片，返回 false
    if (maxIndex === -1) {
        return false;
    }

    // 检查是否存在所有分片
    for (let i = 0; i <= maxIndex; i++) {
        const chunkName = `${filename}-${i}`;
        const chunkPath = path.join(CHUNK_DIR, chunkName);
        if (!fs.existsSync(chunkPath)) {
            return false;
        }
    }

    return true;
}

// 辅助函数：合并所有分片
async function mergeChunks(filename) {
    const outputFilePath = path.join(UPLOAD_DIR, filename);
    const writeStream = fs.createWriteStream(outputFilePath);

    const chunkPattern = `${filename}-*`;
    const chunks = await fs.promises.readdir(CHUNK_DIR);
    const chunkFiles = chunks.filter(chunk => chunk.startsWith(filename)).sort();

    for (const chunk of chunkFiles) {
        const chunkPath = path.join(CHUNK_DIR, chunk);
        const readStream = fs.createReadStream(chunkPath);
        await pipeline(readStream, writeStream);
        await fs.promises.unlink(chunkPath); // 删除分片文件
    }

    await writeStream.close();
    console.log(`File ${filename} merged successfully.`);
}

// 辅助函数：创建可读流和可写流之间的管道
async function pipeline(readStream, writeStream) {
    return new Promise((resolve, reject) => {
        readStream.pipe(writeStream, { end: false });
        readStream.on('end', resolve);
        readStream.on('error', reject);
        writeStream.on('error', reject);
    });
}