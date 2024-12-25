# JS 拉取数据接口

- Ajax 老牌方案，基于 XMLHttpRequest 对象
 - 请求数据接口
   const xhr = new XMLHttpRequest()
   xhr.open('GET',url)
 - 发送请求
   xhr.send()
- 事件监听
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText)
    }
  }
  xhr.responseText 响应数据
- fetch() 新方案基于 promise 对象
  fetch(url,{
    method:'GET'
  })
  - then res=>res.json()
  - then data=>console.log(data)
  