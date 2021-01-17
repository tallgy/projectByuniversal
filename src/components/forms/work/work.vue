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
					name: null, //著作名称
					id: null, //著作编号
					userId: null, //负责人
					publisher: null, //出版单位
					publishLevel: null, //出版社级别
					workType: null, //著作类别
					publishLocation: null, //出版地
					isbnId: null, //ISBN号
					isTranslate: null, //是否翻译
					translateLanguage: null, //翻译语种
					discipline: null, //学科门类
					beginDate: null, //建设日期
					isDisabled: null, //研究类别
					firstDiscipline: null, //一级学科
					collegeId: null, //成果归属
					workSource: null, //项目来源
					information: null, //详细信息    
				},
				formTemplate: [{
					formTitle: "著作申报表单",
					object: [{
						textName: "name",
						subject: "著作名称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入著作名称"
					}, {
						textName: "id",
						subject: "著作编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入著作编号"
					}, {
						textName: "userId",
						subject: "负责人学工号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人学工号"
					}, {
						textName: "publisher",
						subject: "出版单位",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入出版单位"
					}, {
						textName: "publishLevel",
						subject: "出版社级别",
						controlType: "select",
						values: [{
							valueName: "国家级出版社",
							valueCode: "1"
						}, {
							valueName: "省级出版社",
							valueCode: "2"
						}]
					}, {
						textName: "workType",
						subject: "著作类别",
						controlType: "select",
						values: [{
							valueName: "科研类",
							valueCode: "1"
						}, {
							valueName: "发明类",
							valueCode: "2",
						}]
					}, {
						textName: "publishLocation",
						subject: "出版地",
						controlType: "select",
						values: [{
							valueName: "国内",
							valueCode: "1"
						}, {
							valueName: "国外",
							valueCode: "2"
						}]
					}, {
						textName: "isbnId",
						subject: "ISBN号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入ISBN号"
					}, {
						textName: "isTranslate",
						subject: "是否翻译",
						controlType: "radio",
						values: [{
							valueName: "是",
							valueCode: "1"
						}, {
							valueName: "否",
							valueCode: "2"
						}]
					}, {
						textName: "translateLanguage",
						subject: "翻译语种",
						controlType: "select",
						values: [{
							valueName: "英语",
							valueCode: "1"
						}, {
							valueName: "法语",
							valueCode: "2"
						}]
					}, {
						textName: "discipline",
						subject: "学科门类",
						controlType: "radio",
						values: [{
							valueName: "理工类",
							valueCode: "1"
						}, {
							valueName: "社科类",
							valueCode: "2"
						}]
					}, {
						textName: "beginDate",
						subject: "建设时间",
						controlType: "date",
						isMustfill: true
					}, {
						textName: "isDisabled",
						subject: "研究类别",
						controlType: "radio",
						values: [{
							valueName: "基础研究",
							valueCode: "1"
						}, {
							valueName: "应用研究",
							valueCode: "2"
						}]
					}, {
						textName: "firstDiscipline",
						subject: "一级学科",
						controlType: "select",
						values: [{
							valueName: "工科",
							valueCode: "1"
						}, {
							valueName: "理科",
							valueCode: "2"
						}]
					}, {
						textName: "collegeId",
						subject: "成果归属",
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
						}, ]
					}, {
						textName: "workSource",
						subject: "项目来源",
						controlType: "select",
						values: [{
							valueName: "国家派发",
							valueCode: "1"
						}, {
							valueName: "自研",
							valueCode: "2"
						}]
					}, {
						textName: "information",
						subject: "详细信息",
						controlType: "textarea",
						maxlength: 100,
						placeholder: "请输入详细信息"
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
						url: this.$api + '/mangerModel/achievements/work',
						method: 'POST',
						data: {
							name: result.value.name, //著作名称
							id: result.value.id, //著作编号
							userId: result.value.userId, //负责人
							publisher: result.value.publisher, //出版单位
							publishLevel: result.value.publishLevel, //出版社级别
							workType: result.value.workType, //著作类别
							publishLocation: result.value.publishLocation, //出版地
							isbnId: result.value.isbnId, //ISBN号
							isTranslate: 0, //是否翻译
							translateLanguage: result.value.translateLanguage, //翻译语种
							discipline: result.value.discipline, //学科门类
							beginDate: result.value.beginDate, //建设日期
							isDisabled: result.value.isDisabled, //研究类别
							firstDiscipline: result.value.firstDiscipline, //一级学科
							collegeId: result.value.collegeId, //成果归属
							workSource: result.value.workSource, //项目来源
							information: result.value.information, //详细信息    
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
								// uni.navigateTo({
								// 	url: '../../../pages/index/index'
								// })
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
							// helper.errorPop(this, '网络错误，请检查网络', 1500);
							// this.$refs.mpopup.open({
							// 	type: 'err',
							// 	content: '网络错误，请检查网络',
							// 	timeout: 1500,
							// });
							this.isloading = false;
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
