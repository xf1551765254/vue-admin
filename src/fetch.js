/*
* @Author: sll玲
* @Date:   2020-06-06 17:23:36
* @Last Modified by:   sll玲
* @Last Modified time: 2020-06-06 17:43:14
*/
/*
fetch 简单的获取数据，xhr的升级版
基于promise

 */
fetch('http://localhost:90').then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

/*
请求参数
method(string) 请求方法
body（string） 情求参数
headers（object）请求头，默认为{}
 */
//get url传参
fetch('http://localhost:90/book?id=1',{
  method:'get'
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

//get  url传参
fetch('http://localhost:90/book/1',{
  method:'get'
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

//delete   url传参  通过斜杆传参
fetch('http://localhost:90/book/1',{
  method:'delete'
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

//post   
fetch('http://localhost:90',{
  method:'post',
  body:'uname=1&pa=12',
  headers:{
  	'Content-Type':'application/x-www-form-urlencoded'
  }
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

fetch('http://localhost:90',{
  method:'post',
  body:JSON.stringifu({
  	uname:1,
  	pa:2
  }),
  headers:{
  	'Content-Type':'application/json'
  }
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

//put    与post相似
fetch('http://localhost:90',{
  method:'put',
  body:JSON.stringifu({
  	uname:1,
  	pa:2
  }),
  headers:{
  	'Content-Type':'application/json'
  }
})
.then(function(data){
	return data.text()//为promise的实例对象
}).then(function(res){

})

/* 响应结果
   text（）
   json（）
*/
fetch('http://localhost:90').then(function(data){
	return data.json()  //后端返回对象的格式  text（）获取的是字符串
}).then(function(res){

})