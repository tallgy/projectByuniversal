<template>
	<view class="margin-b40">
		<view class="margin-b40">
			<gpp-configurationForm ref="form" type="fill" :formTemplate="formTemplate" :formValue="project" :isCard="true"></gpp-configurationForm>
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
				project: {
					id: null, //项目编号
					name: null, //项目名称
					userId: null, //负责人
					collegeId: null, //所属学院
					discipline: null, //学科门类
					characters: null, //项目性质
					firstDiscipline: null, //一级学科
					level: null, //项目级别
					sort: null, //项目分类
					beginDate: null, //立项日期
					endDate: null, //结项日期
					requestFund: null, //项目申请经费
					arrivalFund: null, //到账金额
					state: null, //审核状态
					approvalNumber: null, //批准文号
					information: null, //项目信息
				},
				formTemplate: [{
					formTitle: "项目申报表单",
					object: [{
						textName: "name",
						subject: "项目名称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入项目名称"
					}, {
						textName: "id",
						subject: "项目编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入项目编号"
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
							valueName: "计算机科学学院",
							valueCode: "1013"
						}, {
							valueName: "物电",
							valueCode: "1014"
						}, {
							valueName: "音乐学院",
							valueCode: "1012"
						}, {
							valueName: "语文学院",
							valueCode: "1011"
						},]
					}, {
						textName: "firstDiscipline",
						subject: "一级学科",
						controlType: "select",
						values: [{
							valueName: "数学",
							valueCode: "1"
						}, {
							valueName: "语文",
							valueCode: "2",
						}, {
							valueName: "英语",
							valueCode: "3",
						}, {
							valueName: "化学",
							valueCode: "4",
						}]
					}, {
						textName: "level",
						subject: "项目级别",
						controlType: "select",
						values: [{
							valueName: "国家级",
							valueCode: "1"
						}, {
							valueName: "省级",
							valueCode: "2"
						}, {
							valueName: "校级",
							valueCode: "3"
						}]
					}, {
						textName: "characters",
						subject: "项目性质",
						controlType: "radio",
						values: [{
							valueName: "社科类",
							valueCode: "1"
						}, {
							valueName: "理工类",
							valueCode: "2"
						}]
					}, {
						textName: "state",
						subject: "项目状态",
						controlType: "radio",
						values: [{
							valueName: "进行",
							valueCode: "1"
						}, {
							valueName: "结束",
							valueCode: "2"
						}, {
							valueName: "延期",
							valueCode: "2"
						}]
					}, {
						textName: "discipline",
						subject: "学科门类",
						controlType: "radio",
						values: [{
							valueName: "数学",
							valueCode: "1"
						}, {
							valueName: "计算机",
							valueCode: "2"
						}]
					},  {
						textName: "sort",
						subject: "项目分类",
						controlType: "select",
						values: [{
							valueName: "工科",
							valueCode: "1"
						}, {
							valueName: "理科",
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
						placeholder: "请输入到账经费"
					}, {
						textName: "information",
						subject: "项目信息",
						controlType: "textarea",
						maxlength: 100,
						placeholder: "请输入项目信息"
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
					
					var token = uni.getStorageSync('token');
					var userId = uni.getStorageSync('userId');
					
					uni.request({
						url: this.$api + '/mangerModel/projects',
						method: 'POST',
						data: {
							id: result.value.id, //项目编号
							name: result.value.name, //项目名称
							userId: result.value.userId, //负责人
							collegeId: result.value.collegeId, //所属学院
							discipline: result.value.discipline, //学科门类
							characters: result.value.characters, //项目性质
							firstDiscipline: result.value.firstDiscipline, //一级学科
							level: result.value.level, //项目级别
							sort: result.value.sort, //项目分类
							beginDate: result.value.beginDate, //立项日期
							endDate: result.value.endDate, //结项日期
							requestFund: result.value.requestFund, //项目申请经费
							arrivalFund: result.value.arrivalFund, //到账金额
							state: result.value.state, //审核状态
							approvalNumber: result.value.approvalNumber, //批准文号
							information: result.value.information, //项目信息
						},
						header: {
							'authorization': token
						},
						success: (res) => {
							console.log(res);
							this.isloading = false;
							if (res.data.resultCode == '0') {
								// helper.successPop(this, '申报成功', 1500);
								// this.$refs.mpopup.open({
								// 	type: 'success',
								// 	content: '申报成功',
								// 	timeout: 1500,
								// });
								uni.navigateBack()
							} else {
								// helper.errorPop(this, '申报失败，请检查信息是否正确', 1500);
								// this.$refs.mpopup.open({
								// 	type: 'err',
								// 	content: '申报失败，请检查信息是否正确',
								// 	timeout: 1500,
								// });
							}
						},
						fail: (res) => {
							this.isloading = false;
							// helper.errorPop(this, '网络错误，请检查网络', 1500);
							// this.$refs.mpopup.open({
							// 	type: 'err',
							// 	content: '网络错误，请检查网络',
							// 	timeout: 1500,
							// });
						}
					});
				} else {
					uni.showToast({
						title: result.message,
						icon: "none"
					})
					this.isloading = false;
				}
			}
		}
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
