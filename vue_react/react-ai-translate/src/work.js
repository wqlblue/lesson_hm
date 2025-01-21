import {
    pipeline, // pipe 模块，派出一个任务
    env // 环境
} from 'https://cdn.jsdelivr.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false;  // 不要加载本地大模型


// es6 class 封装 翻译pipeline 类
/**
 * @func 翻译nlp任务派发单例类
 * pipeline 非常耗性能 
 */
class MyTranslationPipeline {
    // 静态属性
    static task = 'translation'
    // 使用的翻译模型
    static model = 'Xenova/nllb-200-distilled-600M'
    // 单例
    static instance = null
    static async getInstance(progress_callback = null) {

        if (this.instance === null) {
            console.log('---------');
            this.instance = pipeline(this.task, this.model, {
                progress_callback
            })
        }
        return this.instance
    }
}

// 不能做DOM window  self = this
self.addEventListener('message', async (event) => {
    // 单例
    let translator = await MyTranslationPipeline.getInstance((x) => {
        console.log(x);
        self.postMessage(x)
    })
    console.log(event);
    let output = await translator(event.data.text, {
        tgt_lang: event.data.tgt_lang,
        src_lang: event.data.src_lang
        callback_function: (x) => {
            self.postMessage({
                status: 'update',
                data: x
            })
        }
    })
    self.postMessage({
        text: 'AI任务完成了'
    })

})