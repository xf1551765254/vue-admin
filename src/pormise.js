/*
* @Author: sll玲
* @Date:   2020-06-06 16:28:10
* @Last Modified by:   sll玲
* @Last Modified time: 2020-06-06 17:23:13
*/
// resolve 和reject处理成功和失败的情况，p.then获取处理结果

/*1*/
var p=new Promise(function(resolve,reject){
	// 处理异步任务
	setTimeout(function(){
		console.log(1)
		var flag=true
		if(flag){
			resolve('1')
		}else{
			reject(2)
		}
	}, 100)
	
})
p.then(function(succse){},function(error){})

/*
2
 */
 function query(url){
 	var p=new Promise(function(resolve,reject){
 		var xhr =new XMLHttpRequest();
 		// 状态发生变化触发
 		xhr.onreadystatechange=function(){
 			if(xhr.readyState!=4)return
			if(xhr.readyState==4&&xhr.status==200){
				resolve(xhr.resposeTex)
			}else{
				reject('错误')
			}
 		};
 		xhr.open('get',url); //发送请求
 		xhr.send(null);//传递参数
 	})
 	return p
 }
 query('http://localhost:808').then(function(res)=>{},function(err)=>{})

/*3
 发送多个请求 保证顺序
*/
 query('http://localhost:8081')
 .then(function(res)=>{
 	return query('http://localhost:8082')
 }).then(function(res){
 	return query('http://localhost:8083')
 }).then(function(res){
 	return query('http://localhost:8084')
 })

/*4
 发送多个请求 有参数
 （1） 返回promise实列对象
     会调用下一个then
 （2） 返回普通值
   返回值传递给下一个then。通过then参数中函数的参数接受该值

*/
//(1)
query('http://localhost:8081')
 .then(function(res)=>{
 	return new Promise((res,jec)=>{
 		setTimeout(function(){
 			res(1)
 		},122)
 	})
 }).then(res=>{

 })

 //(2)
 query('http://localhost:8081')
 .then(function(res)=>{
 	return 'hello'  //产生新的默认的promise操作
 }).then(res=>{
 	console.log(res)//hello
 })

 /*5
 p.catch()获取异常结果  p.finally()不管成功还是失败都会调用

 */
function foo(){
return	new Promise(function(resolve,reject){
	// 处理异步任务
	setTimeout(function(){
		console.log(1)
		var flag=true
		if(flag){
			resolve('1')
		}else{
			reject(2)
		}
	}, 100)
	
})
}
foo()
 .then(function(res)=>{
 	// 成功的结果 reslove
 })
 .catch(function(err)=>{
 	// 成功的结果   reject
 })
 .finally(function(){})

 /*6
 对象方法 Prominse.all(数组[]) 并发处理 ，所用任务执行完得到参数
         Promise.race（数组[]）并发处理 ，只要有一个任务完成就能得到结果

 */
console.dir(Promise)
var p1=query('http://localhost:8081')
var p2=query('http://localhost:8082')
 Prominse.all([p1,p2]).then(function(res1,res2){

 })
 Prominse.race([p1,p2]).then(function(res){
 	 //获取最快的结果 都调用了接口，但只会接受最快的结果
 })

