import axios from "axios";
import { showToast } from 'vant';
import router from '../router/index.js'

axios.defaults.baseURL = 'http://47.121.205.107:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//请求拦截
axios.interceptors.request.use(req => {
    let jwtToken = localStorage.getItem('token');
    if (jwtToken) {
        req.headers.Authorization = jwtToken;
    }
    return req;
})


//响应拦截
axios.interceptors.response.use((res) => {
    if (res.status !== 200) {//程序性错误
        showToast('服务器异常');
        return Promise.reject(res);
    } else {
        if (res.data.code !== '800') {
            showToast(res.data.msg);
            return Promise.reject(res);
        }else{
            showToast(res.data.msg);
        }
        return res.data;
    }
},
    // (error) => {
    //     // console.log(error);
    //     // if (error.response && error.response.status === 401) {
    //         showToast(error.response.data.msg)
    //         // router.push('/login')
    //         window.location.href = '/login'
    //         return Promise.reject(error);
    //     // }
        
    // }
)

export default axios;