const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const OpenAI = require('openai');
const { PassThrough } = require('stream');

const app = new Koa();
const router = new Router();

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: '你的新 API Key', // 替换为你的新 API Key
});

router.post('/api/chat', async (ctx) => {
    const { message } = ctx.request.body;

    if (!message) {
        ctx.status = 400;
        ctx.body = { error: 'Message is required' };
        return;
    }

    try {
        const stream = new PassThrough();
        ctx.body = stream;

        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: message }],
            model: 'deepseek-chat',
            stream: true,
        });

        for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            stream.write(`data: ${JSON.stringify({ content })}\n\n`);
        }

        stream.end();
    } catch (error) {
        console.error('Error calling DeepSeek API:', error);
        ctx.status = 500;
        ctx.body = { error: 'Failed to get response from AI' };
    }
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});