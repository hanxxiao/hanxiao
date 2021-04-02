<template>
     <div>
		 <p-page-header title="卡类型管理"></p-page-header>
		 <el-form :model="queryForm" inline size="small">
			 <el-form-item label="卡名称" prop="name">
				 <el-input clearable placeholder="请输入" v-model="queryForm.name"></el-input>
			 </el-form-item>
			 <el-form-item label="卡备注" prop="remark">
				 <el-input clearable placeholder="请输入"  v-model="queryForm.remark"></el-input>
			 </el-form-item>
			 <el-form-item>
				 <el-button type="primary" size="small" icon ="el-icon-search" @click="handleSearch">查询</el-button>
				 <el-button type="success" size="small" icon ="el-icon-plus" @click="handleAdd">新增</el-button>
			 </el-form-item>
		 </el-form>
		 <el-table :data="list" border>
			 <el-table-column label="卡名称" prop="name"></el-table-column>
			 <el-table-column label="卡备注" prop="remark"></el-table-column>
			 <el-table-column label="创建时间" prop="insertTime">
				 <template v-slot="{row}">
					 <el-tag>{{formatDate(row.insertTime)}}</el-tag>
				 </template>
			 </el-table-column>
			 <el-table-column label="操作">
				 <template v-slot="{row}">
					  <el-button type="warning" size="small" icon="el-icon-edit" @click='handleEdit(row)'>修改</el-button>
					  <el-button type="danger" size="small" icon="el-icon-delete" @click="handleRemove(row)">删除</el-button>
				 </template>
			 </el-table-column>
		 </el-table>
		 <el-pagination
		 		@size-change="handleSizeChange"   
		 	   @current-change="handleCurrentChange" 
		 	  :current-page="queryForm.pno"
		 	:page-size="queryForm.psize"
		 		layout="total, sizes, prev, pager, next, jumper"
		 	:total="page.totalElements">
		 </el-pagination>
		 {{list}}
	 </div>
</template>

<script>
	import {mapState,mapActions} from "vuex"
	export default{
		name:'card-type',
		data(){
			return {
				queryForm:{
					pno:1,
					psize:10,
					name:'',
					remark:''
				}
			}
		},
		computed:{
			...mapState('cardTypeModel',['list','page']),
			//处理时间格式
			formatDate(){
				return function(time){
					let d = new Date(time)
					return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
				}
			}
		},
		async created(){
			await this.getListForPage(this.queryForm)
		},
		async activated(){
			await this.getListForPage(this.queryForm)
		},
		methods:{
			...mapActions('cardTypeModel',['getListForPage','deleteById']),
			//查询
			async handleSearch(){
				this.queryForm.pno = 1
				await this.getListForPage(this.queryForm)
			},
			//实现分页器功能
			async handleSizeChange(psize){
				this.queryForm.pno = 1
				this.queryForm.psize = psize
				await this.getListForPage(this.queryForm)
			},
			async handleCurrentChange(pno){
				this.queryForm.pno = pno
				await this.getListForPage(this.queryForm)
			},
			//新增
			handleAdd(){
				this.$router.push('/card-type-add')
			},
			//修改
			handleEdit(row){
				this.$router.push({
					path:'/card-type-edit',
					query:{id:row.id}
				})
			},
			//删除
			async handleRemove(row){
				let res = await this.$confirm('正在删除该条数据是否继续？','提示',{
					type:'warning'
				}).catch(err=>err)
				if( res == 'confirm'){
					await this.deleteById(row.id)
					this.$message({
						type:'success',
						message:'删除成功',
						showClose:true
					})
					await this.getListForPage(this.queryForm)
				}else{
					this.$message({
						type:'info',
						message:'取消成功',
						showClose:true
					})
				}
				//优化判断
				if(this.queryForm.pno >this.page.pCount){
					this.queryForm.pno = this.page.pCount
					await this.getListForPage(this.queryForm)
				}
			}
		}
	}
</script>

<style>
</style>
