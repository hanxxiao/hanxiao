import {
	CardTypePage,
	DeleteCardType,
	FindCardType,
	insertCardType,
	updateCardType
} from '@/api/card-type-api.js'

export default{
	namespaced:true,
	state:{
		list:[],
		page:[]
	},
	mutations:{
		setList(state,list){
			state.list = list
		},
		setPage(state,page){
		   state.page = page
		}
	},
	actions:{
		async getListForPage({commit},queryForm){
		    let res =  await CardTypePage(queryForm) 
			if(res.data.code == 200){
				commit('setList',res.data.data.list)
				commit('setPage',res.data.data.page)
			}
		 },
		async insert({commit},addForm){
		    await insertCardType(addForm)  
		},
		async findById({commit},id){
		   let res = await FindCardType(id)
		   if(res.data.code == 200){
			   return res.data.data
		   }else{
			   return {}
		   }
		},
		async update({commit},addForm){
		  await  updateCardType(addForm)
		},
		async deleteById({commit},id){
		    await DeleteCardType(id)  
		},
	}
}