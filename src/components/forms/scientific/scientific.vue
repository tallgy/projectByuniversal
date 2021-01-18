<template>
	<view class="margin-b40">
		<view class="margin-b40">
			<gpp-configurationForm ref="form" type="fill" :formTemplate="formTemplate" :formValue="project" :isCard="true"></gpp-configurationForm>
		</view>
		
		<xuan-popup ref="mpopup" :isdistance="true"></xuan-popup>

		<view class="margin-top margin-bottom">
			<cc-button @cctap="save" width="600rpx" color="#fff" bgcolor=" linear-gradient(-45deg, rgba(87, 225, 181, 1) 0%, rgba(0, 63, 255, 1) 100%);"
			 :loading="isloading" fontsize="34rpx">提交</cc-button>
			<!-- 遮罩层 -->
			<mask v-if="isloading"></mask>
		</view>
	</view>
</template>

<script>
	import helper from '../../../common/helper.js';
	
	export default {
		data() {
			return {
				isloading: false,
				project: {
					name: null, //科研名称
					id: null, //科研编号
					collegeId: null, //所属学院
					beginDate: null, //发布时间
					userId: null, //负责人
					isTranslate: null, //是否翻译
					translateLanguage: null, //翻译语种
					firstDiscipline: null, //一级学科
					discipline: null, //学科门类
					characters: null, //科研性质
					workType: null, //研究类别
					workSource: null, //项目来源
					information: null, //详细信息

				},
				formTemplate: [{
					formTitle: "科研申报表单",
					object: [{
						textName: "name",
						subject: "科研名称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入科研名称"
					}, {
						textName: "id",
						subject: "科研编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入科研编号"
					}, {
						textName: "collegeId",
						subject: "成果归属",
						controlType: "select",
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
						textName: "beginDate",
						subject: "发布时间",
						controlType: "date",
						isMustfill: true
					}, {
						textName: "userId",
						subject: "作者",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入作者"
					}, {
						textName: "isTranslate",
						subject: "是否翻译",
						controlType: "radio",
						values: [{
							valueName: "是",
							valueCode: "1"
						}, {
							valueName: "否",
							valueCode: "2",
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
						textName: "workType",
						subject: "研究类别",
						controlType: "select",
						values: [{
							valueName: "前沿新技术",
							valueCode: "1"
						}, {
							valueName: "现有技术",
							valueCode: "2"
						}]
					}, {
						textName: "workSource",
						subject: "项目来源",
						controlType: "select",
						values: [{
							valueName: "自研",
							valueCode: "1"
						}, {
							valueName: "分配",
							valueCode: "2"
						}]
					}, {
						textName: "information",
						subject: "详细信息",
						controlType: "textarea",
						maxlength: 100,
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
						url: this.$api + '/mangerModel/achievements/scientific',
						method: 'POST',
						data: {
							name: result.value.name, //科研名称
							id: result.value.id, //科研编号
							collegeId: result.value.collegeId, //所属学院
							beginDate: result.value.beginDate, //发布时间
							userId: result.value.userId, //负责人
							isTranslate: 0, //是否翻译
							translateLanguage: result.value.translateLanguage, //翻译语种
							firstDiscipline: result.value.firstDiscipline, //一级学科
							discipline: '1', //学科门类
							characters: result.value.characters, //科研性质
							workType: result.value.workType, //研究类别
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
								helper.successPop(this, '申报成功', 1500);
								uni.navigateBack()
								// uni.navigateTo({
								// 	url: '../../../pages/index/index'
								// })
							} else {
								helper.errorPop(this, '申报失败，请检查信息是否正确', 1500);
							}
						},
						fail: (res) => {
							helper.errorPop(this, '网络错误，请检查网络', 1500);
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
