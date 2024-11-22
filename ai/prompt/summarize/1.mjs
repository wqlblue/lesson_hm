// app.js
// const { getCompletion } = require('./main.mjs');
// 1.mjs
import { getCompletion } from './main.mjs';



const main = async () => {
    const response = await getCompletion("你好")
    console.log(response);

}

main()
