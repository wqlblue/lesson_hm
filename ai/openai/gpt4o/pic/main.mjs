import OpenAI from "openai";
import dotenv from 'dotenv'
dotenv.config()
// 从环境变量中读取 API Key
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error("OPENAI_API_KEY environment variable is not set");
}

// 实例化 OpenAI 客户端
const client = new OpenAI({
    apiKey,
    baseURL: 'https://api.302.ai/v1' // 如果需要转发，请确保这个地址是安全的
});

// 良好的编程风格
// 主函数 执行的入口， 单点
// 函数申明
// function main() {
//   console.log('ai 全栈开始了 ')
// }
// es6 箭头函数 传统函数更简洁 
// 赋值语句
// 函数也是对象
// 函数表达式
// async 是函数修饰符，+  await  一对
const main = async () => {
    // openai 的调用是异步的 
    // await 等会儿
    // chat 聊天的方式调用
    // completions 完成问答
    // create 创建
    try {
        const response = await client.chat.completions.create({
            model: 'gpt-4o',
            // 对话列表
            messages: [
                {
                    role: 'user', //角色
                    content: [
                        {
                            type: 'text',
                            'text': '请描述以下图片的内容'
                        },
                        {
                            type: 'image_url',
                            "image_url": {
                                "url": "https://th.bing.com/th/id/R.29fc0b240c23037199b7280344f1f037?rik=YJl61dqXNjRQ%2bA&riu=http%3a%2f%2fp8.qhimg.com%2ft01692b3b5b49d68037.jpg%3fsize%3d720x450&ehk=Q99yLYVoJ6E2ZT%2fFXqcQfNOhXUv2FTBomyuaiHx6XKs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                            }
                        }
                    ]
                }
            ],
            max_tokens: 300
        })
        console.log(response.choices[0].message.content)

    }
    catch (err) {
        console.log(err)
    }
}

main()