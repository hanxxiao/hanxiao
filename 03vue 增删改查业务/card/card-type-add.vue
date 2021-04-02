<template>
	<div>
		<el-page-header content="新增卡类型" @back="goback"></el-page-header>
		<el-form :model="addForm" size="small" ref = "addForm" :rules="rules" label-width="auto">
			<el-form-item label="卡名称" prop="name">
				<el-input clearable placehodler="请输入" v-model="addForm.name"></el-input>
			</el-form-item>
			<el-form-item label="卡备注" prop="remark">
				<el-input placeholder="请输入" type="textarea" 
				show-word-limit maxlength="300" v-model="addForm.remark"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="small" @click="handleSubmit">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {mapState,mapActions} from "vuex"
	export default{
		name:'card-type-add',
		data(){
			return {
				addForm:{
					name:'',
					remark:''
				},
				rules:{
					name:[{required:true,message:'卡名称不能为空'}],
					remark:[{required:true,message:'卡备注不能为空'}]
				}
			}
		},
		methods:{
			...mapActions('cardTypeModel',['insert']),
			goback(){
				this.$router.history.go(-1)
			},
			async handleSubmit(){
				let res = await this.$refs.addForm.validate().catch(err=>err)
				if(res){
					await this.insert(this.addForm)
					this.goback()
				}
			}
		}
	}
</script>

<style>
</style>
