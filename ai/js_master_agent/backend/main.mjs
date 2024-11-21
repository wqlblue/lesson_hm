// import OpenAI from 'openai'
// // es5 js没有模块化能力 简单 不需要模块化 ，交给函数就可以了
// // 入口文件
// // mjs es6 模块化

// const client = new OpenAI({
//     apiKey: 'sk-EotDnSmaUpIchUFfXMOpmx0QBHUPe43c2Rr8UOUiEzBwCYUJ',
//     baseURL: 'https://api.302.ai/v1'
// })

// const main = async () => {
//     const response = await client.images.generate(
//         {
//             model: 'dall-e-3',
//             prompt: '特朗普',
//             size: '1024x1024',
//             n: 1,
//         }
//     )
//     console.log(response.data[0].url);

// }
// main()


// server.js
import express from 'express';
import cors from 'cors'; // 导入 cors 模块
import { OpenAI } from 'openai';
import 'dotenv/config';
const app = express();
const port = 3000;

app.use(cors()); // 启用 CORS
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: 'https://api.302.ai/v1'
});

app.post('/generate-image', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const { prompt } = req.body;
        const response = await client.images.generate({
            model: 'dall-e-3',
            prompt: prompt,
            size: '1024x1024',
            n: 1,
        });
        console.log('Generated image URL:', response.data[0].url);
        res.json({ url: response.data[0].url });
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});