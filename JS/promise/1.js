function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaaa');
            // reject()
            resolve(123)
            // reject('NO')
        }, 1000)
    })
}

function b() {


    console.log('bbb');

}

a().then(b())
// a().then((res) => {
//     console.log(res);
// }, (eer) => {
//     console.log(eer);
// }
// )