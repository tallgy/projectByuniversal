<template>
	<view class="margin-b40">
		<view class="margin-b40">
			<gpp-configurationForm ref="form" type="fill" :formTemplate="formTemplate" :formValue="paper_achievement" :isCard="true"></gpp-configurationForm>
		</view>
		
		<view class="margin-top margin-bottom">
			<cc-button @cctap="save" width="600rpx" color="#fff" bgcolor=" linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%);"
			 :loading="isloading" fontsize="34rpx">提交</cc-button>
			<!-- 遮罩层 -->
			<mask v-if="isloading"></mask>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				isloading: false,
				paper_achievement: { //申报的内容
				  id: null, //论文编号
				  name: null, //论文题目
				  // magazine: null, //期刊
				  beginDate: null, //发表日期
				  paperType: null, //论文类型
				  recordId: null, //收录号
				  descipline: null, //学科门类
				  firstDiscipline: null, //一级学科
				  collegeId: null, //成果归属
				  paperSource: null, //论文来源
				  userId: sessionStorage.getItem('userId'), //作者
				  information: null //详细信息
				},
				formTemplate: [{
					formTitle: "论文表单",
					id: "469823830580379648",
					object: [{
						textName: "name",
						subject: "论文题目",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入论文题目"
					}, {
						textName: "id",
						subject: "论文编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入论文编号"
					}, {
						textName: "approvalNumber",
						subject: "批准文号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入批准文号"
					}, {
						textName: "userId",
						subject: "负责人学工号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人学工号"
					}, {
						textName: "collegeId",
						subject: "所属学院",
						controlType: "select",
						isMustfill: true,
						values: [{
							valueName: "所属学院一",
							valueCode: "1"
						}, {
							valueName: "所属学院二",
							valueCode: "2"
						}]
					}, {
						textName: "firstDiscipline",
						subject: "一级学科",
						controlType: "select",
						isMustfill: true,
						values: [{
							valueName: "一级学科一",
							valueCode: "1"
						}, {
							valueName: "一级学科二",
							valueCode: "2",
						}]
					}, {
						textName: "level",
						subject: "论文级别",
						controlType: "select",
						isMustfill: true,
						values: [{
							valueName: "论文级别一",
							valueCode: "1"
						}, {
							valueName: "论文级别二",
							valueCode: "2"
						}]
					}, {
						textName: "characters",
						subject: "论文性质",
						controlType: "radio",
						isMustfill: true,
						values: [{
							valueName: "论文性质一",
							valueCode: "1"
						}, {
							valueName: "论文性质二",
							valueCode: "2"
						}]
					}, {
						textName: "state",
						subject: "论文状态",
						controlType: "radio",
						isMustfill: true,
						values: [{
							valueName: "论文状态一",
							valueCode: "1"
						}, {
							valueName: "论文状态二",
							valueCode: "2"
						}]
					}, {
						textName: "discipline",
						subject: "学科门类",
						controlType: "radio",
						isMustfill: true,
						values: [{
							valueName: "学科门类一",
							valueCode: "1"
						}, {
							valueName: "学科门类二",
							valueCode: "2"
						}]
					},  {
						textName: "sort",
						subject: "论文分类",
						controlType: "select",
						isMustfill: true,
						values: [{
							valueName: "论文分类一",
							valueCode: "1"
						}, {
							valueName: "论文分类二",
							valueCode: "2"
						}]
					}, {
						textName: "beginDate",
						subject: "立项日期",
						controlType: "date",
						isMustfill: true
					}, {
						textName: "endDate",
						subject: "结项日期",
						controlType: "date",
					}, {
						textName: "requestFund",
						subject: "申请经费",
						controlType: "number",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入申请经费"
					}, {
						textName: "arrivalFund",
						subject: "到账经费",
						controlType: "number",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入到账经费"
					}, {
						textName: "information",
						subject: "论文信息",
						controlType: "textarea",
						maxlength: 100,
						placeholder: "请输入论文信息"
					}]
				}]
			}
		},
		methods: {
			save() {
				this.isloading = true;
				let result = this.$refs.form.submit();
				if (result.checkFlag) {
					console.log(result.value);
					console.log(this.number);
					uni.showToast({
						title: "验证成功"
					})
					this.isloading = false;
				} else {
					uni.showToast({
						title: result.message,
						icon: "none"
					})
					this.isloading = false;
				}
			}
		},
	}
</script>

<style>
	.margin-top {
		margin-top: 50rpx;
	}
	
	.margin-bottom {
		margin-bottom: 60rpx;
	}
</style>
