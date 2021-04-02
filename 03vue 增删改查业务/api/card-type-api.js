import api from "../http"
//获取所有的卡类型
export const CardTypeList =()=>{
	return api.http({
		url:'/card-type/list/all',
		method:'get'
	})
}
//分页获取所有的卡类型
export const CardTypePage =(params)=>{
	return api.http({
		url:'/card-type/list/page',
		method:'get',
		params:params
	})
}
//删除
export const DeleteCardType =(id)=>{
	return api.http({
		url:`/card-type/delete/id/${id}`,
		method:'delete'
	})
}
//根据id查询
export const FindCardType =(id)=>{
	return api.http({
		url:`/card-type/find/id/${id}`,
		method:'get'
	})
}
//新增
export const insertCardType =(data)=>{
	return api.http({
		url:'/card-type/insert',
		method:'put',
		data:data
	})
}
//修改
export const updateCardType =(data)=>{
	return api.http({
		url:'/card-type/update',
		method:'put',
		data:data
	})
}