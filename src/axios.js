/*
* @Author: sll玲
* @Date:   2020-06-06 15:53:02
* @Last Modified by:   sll玲
* @Last Modified time: 2020-06-06 19:08:06
*/
import axios from 'axios'
/* 1
 patch 更新数据 只会把修改的数据给后端
 put：更新数据 所有的数据给后端（更新数据）
 detele 删除数据

 */

		// get get?id=2
			axios.get('/get',{
					params:{id:2}
				}).then(res=>{

				})  //304 重定向
			axios({
				method:'get',
				url:'get',
			    param:{id:2}
			}).then(res=>{})

		// post 
			let data={id:2}
			axios.post('/post',data).then(res=>{})  
			axios({
				method:'post',
				url:'post',
			    data:data
			}).then(res=>{})
		// form-data
			 let formData=new FormData()
			 for(let key in data){
			 	formData.append(key,data[key])
			 }
			 axios({
				method:'post',
				url:'post',
			    data:formData
			}).then(res=>{})

 		// put  与post相似 与patch也相似（三者一样）
			 let data={id:2}
			axios.put('/put',data).then(res=>{

			})  
			axios({
				method:'put',
				url:'post',
			    data:data
			}).then(res=>{})

		// delete  
		// 与get相似 delete?id=2 参数在url里
			axios.delete('/delete',{
			 param:{id:2}
			}).then(res=>{})  
			 //参数在请求体里
			axios.delete('/delete',{
			 data:{id:2}
			}).then(res=>{

			})  
			axios({
				method:'delete',
				url:'delete',
			    param:{id:2},
			    data:{id:30}
			}).then(res=>{})


/*2 
并发请求 axios.all(数组)  axios.spread(函数，参数为相应的返回值)
*/
		axios.all(
		[
		  axios.get('/get1'),
		  axios.get('/get2'),
		]
		).then(
		 axios.spread((res1,res2)=>{
		   
		 })


		)

/*3
axios的实例
*/
		axios.create({
			baseURL:'https://123.344.345.34',
		    timeout:2000,
		    headers:{},
		    methods:'',
		    url:'/get',
		    params:{},
		    data:{}
		})

/*
		4.axios 配置  请求配置=》实列配置=》全局配置
		 全局配置 axios.defaults.baseURL
		 		 axios.timeout.baseURL
		 		 axios.headers.baseURL

		 实列配置
		 let indances=axios.create({
			baseURL:'https://123.344.345.34',
		    timeout:2000,
		    headers:{},
		    methods:'',
		    url:'/get',
		    params:{},
		    data:{}
		})
		indances.defaults
		indances.defaults

		请求配置
		indances.get('get'{
			timeout:5000
		})

 */

/*5 拦截器

*/
		axios.interceptors.requset.use(config=>{
			// 发送请求前的操作
			return config
		},err=>{
			// 请求错误时
			return Promise.reject(err)  //没有调成功接口
		})

		axios.interceptors.repose.use(config=>{
			// 请求成功的操作
			return config   //axios.get().then(config=>{})
		},err=>{
			// 请求错误的操作
			return Promise.reject(err)  //调接口成功,后端返回的错误
		})

		// 取消拦截器
		//声明
		let interceptorsD=

		axios.interceptors.requset.use(config=>{
			config.headers={
				auth:true
			}
			return config
		},err=>{
			// 请求错误时
			return Promise.reject(err)  //没有调成功接口
		})
		// 取消
		axios.interceptors.requset.eject(interceptorsD)

		// 列子
		// 
		// 登录的接口
		let instance=axios.create({})
		instance.interceptors.request(config=>{
			config.headers.token=''
			return config
		})
		//不需要登录的接口
		let newinstance=axios.create({})
		// 移动端开发
		let h5instance=axios.create({})
		h5instance.interceptors.request(config=>{
			$('#modal').show()
			return config
		})

		h5instance.interceptors.response(config=>{
			$('#modal').hide()
			return config
		})


/*6
 取消请求p
*/
 let source=axios.CancelToken.source()
 axios.get('/get',{
 	CancelToken:source.token
 }).then().catch()
 //取消
 source.ancel()