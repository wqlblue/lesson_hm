import OpenAI from "openai";
import dotenv from "dotenv";

// dotenv.config() 函数的作用是从 .env 文件中加载环境变量，并将它们添加到 process.env 对象中。
// 这样，你就可以在 Node.js 应用程序中通过 process.env 来访问这些环境变量，而不需要硬编码它们。
dotenv.config();

// npm（Node Package Manager）用来管理项目的依赖和脚本的主要配置文件。

// 启动一个进程 process 后端
//  env 对象 环境对象
//  进程是分配资源的最小单位  线程 是执行任务的最小单位  进程是线程的容器


const client = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: process.env.BASE_URL,

});

// es6 默认参数   ES6 允许为函数的参数设置默认值
// 通用 的 LLM聊天 完成 接口函数，复用 
export const getCompletion = async (prompt, model = "gpt-4o") => {
    //  用户提的问题
    const messaages = [
        {
            role: "user",
            content: prompt
        }
    ]
    // AIGC chat 接口    用于通过 OpenAI 客户端发送请求，生成基于给定消息的文本完成。
    const response = await client.chat.completions.create({
        model: model,
        messages: messaages,
        // LLM 生成内容的随机性  0 最确定 1 最随机
        temperature: 0.5,
    })
    return response.choices[0].message.content;
}

const main = async () => {
    const prod_review = `
  我女儿生日时买了这个熊猫毛绒玩具，她很喜欢，到处都带着。
  它柔软、超级可爱，脸看起来很友好。
  不过，相对于我付的价格来说，它有点小。
  我想，同样的价格，也许还有其他更大的选择。
  它比预期早到了一天，所以我有机会自己玩了一会儿，然后才把它送给她。
  `;
    // 初级prompt 设计原则
    // 准确表达任务
    // 给他一个角色
    // 减少出错的可能 用 反引号 分隔
    // 商品评论 prompt 模板
    // const prompt = `
    //    您的任务是生成来自电子商务网站产品评论的简单摘要。
    //    总结下面用三个 反引号 分隔的评论。 最多用30个字。
    //    评论:'''${prod_review}''' 
    // `

    const prompt = `
     你的任务是生成来自电子商务网站产品评论有关时间运输的简单摘要，以便向运输部门提供反馈。
     总结下面用三个 反引号 分隔的评论。 最多用30个字。 
     并重点关注任何提及产品运输和交付时间的评论。
      评论:'''${prod_review}''' 
    `

    const response = await getCompletion(prompt)
    console.log(response);

}

main()


// // console.log(process.env);
// console.log(process.env);
