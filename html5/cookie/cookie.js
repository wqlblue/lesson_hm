


class CookieManager {
    constructor() {
    }
    // es6 函数参数默认值
    setCookie(name, value, expires = 7) {
        let expiresDate = '';
        if (expires) {
            let date = new Date();
            date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
            // console.log(date, date.getTime());
            console.log(date.toUTCString());

            expiresDate = `;expires=${date.toUTCString()}`;

        }
        document.cookie = name + "=" + value + expiresDate + ";path=/";
    }
    getCookie() { }
    deleteCookie(name) {
        this.setCookie(name, '', -1);


    }
}