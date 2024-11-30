

const http = require('http');
const url = require('url');
const OpenAI = require('openai');

// 初始化OpenAI客户端
const client = new OpenAI({
    apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
    baseURL: 'https://api.302.ai/v1'
});

// 获取OpenAI的完成结果
const getCompletion = async (prompt, model = "gpt-3.5-turbo") => {
    const messages = [{
        role: 'user',
        content: prompt,
    }];
    try {
        const response = await client.chat.completions.create({
            model: model,
            messages: messages,
            temperature: 0.1,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        throw error;
    }
};

// 创建HTTP服务器
const server = http.createServer(async (req, res) => {
    // 设置CORS头以允许跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 解析URL
    const parsedUrl = url.parse(req.url, true);
    const queryObj = parsedUrl.query;

    // 检查是否是/api路径
    if (parsedUrl.pathname === '/api') {
        if (queryObj.question && queryObj.data) {
            try {
                const prompt = `
                    ${queryObj.data}
                    请根据上面的JSON数据，回答${queryObj.question} 这个问题
                `;
                const result = await getCompletion(prompt);

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ result }));
            } catch (error) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: "An error occurred while processing your request." }));
            }
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: "Missing question or data parameters." }));
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

// 监听端口
const PORT = 1314;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});