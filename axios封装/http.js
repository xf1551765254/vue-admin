
import axios from 'axios'
import service form './json.js'
let instance =axios.create({
	baseURl:'',
	timeout:2000
})
const http={} //请求方法的容器
for(let key in service){
	let api=service[key] //url method
	// async await 避免回调地狱
	http[key]=async function(
			params,
			isFormData=false,//form-data
			config={}//参数配置
		){
		let newParams={}
		if(params&&isFormData){
			newParams=new FormData()
				for(let key in params){
					newParams.append(key,params[key])
				}
		}else{
			newParams=params
		}

		// 不同请求的旁段
		let response={} //请求的返回值
		if(api.method=='put'||api.method=='post'||api.method=='patch'){
			try{
				response=await instance[api.method](api.url,newParams,config)
			}.catch(err){
				response=err
			}
			
		}else if(api.method=='delete'||api.method=='get'){
			config.params=newParams
			try{
				response=await instance[api.method](api.url,config)
			}.catch(err){
				response=err
			}
		}
		return respose ;
}

// 请求拦截器
instance.interceptors.request.use(config=>{
	// 发起请求前
	//移动端加载图标
	
	return config
},err=>{
	//请求错误
	//操纵
	console.log('错误')
})
// 请求拦截器
instance.interceptors.respose.use(config=>{
	// 请求成功前
	//移动端加载图标去除
	
	return config.data
},err=>{
	//请求错误
	//操纵
	console.log('错误')
})

export default http