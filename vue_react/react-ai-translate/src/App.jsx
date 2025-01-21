import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector"; // 确保路径正确，并使用大写的组件名
import './App.css'
import Progress from "./components/Progress";

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn');
  const [targetLanguage, setTargetLanguage] = useState('zho_Hans');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [disabled, setDisabled] = useState(false);
  // 进度条数据数组 {fileName: '', percent:''}
  const [progressItems, setProgressItems] = useState([]);
  // 
  const worker = useRef(null);  // 响应式 web worker 对象

  useEffect(() => {
    // 局部
    // console.log('mounted');

    if (!worker.current) {
      worker.current = new Worker(new URL(
        './worker.js',
        import.meta.url
      ),
        { type: 'module' }
      );
      console.log(worker);

      worker.current.addEventListener('message', (e) => {
        console.log(e, '++++++++++++++++++++++++++');
        switch (e.data.status) {
          case 'initiate':
            setReady(false)
            // 接受一个参数  函数 
            // 上一次的状态
            setProgressItems((prev) => [...prev, e.data])
            break;
          case 'progress':
            setProgressItems((prev) => prev.map((item) => {
              if (item.file === e.data.file) {
                return {
                  ...item,
                  progress: e.data.progress,
                }
              }

            }))
            break;
        }
      });

    }





    return () => {  //  清理函数，在组件卸载时或effect重新运行前执行
      // onUnmounted
      console.log('unmounted');
      worker.current.terminate();
    }
  })

  const translate = async () => {
    setDisabled(true);
    //ai 任务复杂， event loop 在这里就不灵了
    // 前端游戏，加密,  压缩，AI，多线程 Web worker
    // html5  浏览器提供的多线程机制(纯计算类的工作交给他，不能DOM，没有this)
    worker.current.postMessage({
      type: '请你帮我完成翻译',
    })

  }

  return (
    <>
      <h1>Transformers.js</h1>
      <p>来自HuggingFace 抱抱脸社区的NLP js库</p>
      <p>未来端模型将大放异彩</p>
      <div className="container">
        <LanguageSelector
          type="source"
          defaultLanguage={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        />
        <LanguageSelector
          type="target"
          defaultLanguage={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        />
      </div>
      <div className="textbox-container">
        <textarea
          value={input}
          row={3}
          onChange={(e) => setInput(e.target.value)}

        >        </textarea>
        <textarea value={output}
          row={3}
          readOnly
        ></textarea>
      </div>
      <button disabled={disabled} onClick={translate}>Translate</button>

      {/* <Progress text="LLM" percentage={20} /> */}
      <div className="progress-bars-container">
        {
          ready === false && (
            <label > Loading models....</label>
          )
        }
        {progressItems.map((data) => (
          <Progress key={data.file} percentage={data.progress} />
        ))}
      </div>
    </>
  );
}

export default App;