# 魔搭平台  
> 国内最大AI模型开发平台

## 大模型 LLM Large(参数规模) Language(语言) Model
- 输入 -> code(编程) -> 输出
- 输入(prompt) -> LLM(大模型) -> 输出 最酷的开发方式
- 参数规模单位是？ LLM训练出来的参数规模上百亿 全球的知识    72B  

- 首选大模型
 为了业务，选择合适的大模型
    openai 花费，闭源大模型
    coze 豆包, qwen ,kimi  开源的

- 魔搭社区
  国内最大的开源大模型社区


- 云端AI环境
- 机器学习 nlp
- Python 的语法
   -  modoule 复用、职责分离
     from modelscope.pinelines  import pipeline
     momdelscope 魔搭社区  功能很多  pipelines 管道 （nlp 派出管道，水管）

- damo/nlp srtuctbert sentiment-classification chinese-base
  模型有很多种， 达摩院/ 情感分析/分类  支持中文 
  医疗模型 / 金融模型 / 法律模型

  pipeline(Tasks.text-classification,model="damo/nlp_structbert_sentiment-classification_chinese-base")
  pipeline 打开管道
  选择一项任务 Tasks.text-classification
  选择模型 damo/nlp_structbert_sentiment-classification_chinese-base


  - 模型训练完之后就不成长了，新的知识没有，不太准确
    微调大模型 ， 并对数据进行标注 ， 微调大模型


- 前后端为什么要学LLM？
    - 端模型的时代到来了
      小尺寸模型越来越强  AI手机 AI汽车 （Robotaxi）  AI具身智能
    - Marscode 提高学习和开发效率
    - 很多工作可以交给大模型
       输入 -> LLM -> 输出

- LLM 需要算力 ，来自GPU

