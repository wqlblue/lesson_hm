
//import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，
//必须与被导入模块（profile.js）对外接口的名称相同。
// import命令是编译阶段执行的，
// es6 模块话 导包
// 解构运算符
import {
    createCrawl,  // 返回爬虫实例
    createCrawlOpenAI // openai 配置项
} from 'x-crawl';

// 实例化爬虫应用
const cralwApp = createCrawl({
    maxRetry: 3,
    intervalTime: { max: 2000, min: 1000 }
})

const crawlOpenAIApp = createCrawlOpenAI({
    clientOptions: {
        apiKey: 'sk-DQyFVvlYDkVEcwRy1uY6WOkEz0AUhGeQRdSQ0mXKA4JgCp8M',
        baseURL: 'https://api.302.ai/v1/'
    },
    defaultModel: {
        chatModel: 'gpt-4-turbo-preview'
    }
})

cralwApp.crawlPage('https://movie.douban.com/chart')
    .then(async (res) => {
        const { page, browser } = res.data;
        const targetSelector = '.indent';
        await page.waitForSelector(targetSelector);
        const highlyHTML = await page.$eval(
            targetSelector,
            (el) => el.innerHTML
        )
        // console.log(highlyHTML)
        const result = await crawlOpenAIApp.parseElements(
            highlyHTML,
            `
        获取图片链接、电影名称、电影评分、电影简介
        输出格式为json 数组。
        如：
        [{
          "src": "...",
          "title": "...",
          "score": "...",
          "desc": "..."
        }]
        `
        )
        browser.close();

        console.log(result)

        // cralwApp.crawlFile({
        //   targets: result.elements[0].src,
        //   storeDirs: './upload'
        // })
    })