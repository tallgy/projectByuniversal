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
					name: null, //专利名称
					id: null, //专利编号
					patentType: null, //专利类型
					patentRange: null, //专利范围
					collegeId: null, //成果归属
					state: null, //专利状态
					userId: null, //负责人学工号
					applicationDate: null, //申请日期
					applicationId: null, //申请编号
					publicDate: null, //公开日期
					publicId: null, //公开编号
					impowerDate: null, //授权日期
					impowerId: null, //授权编号
					information: null, //详细信息
				},
				formTemplate: [{
					formTitle: "专利申报表单",
					object: [{
						textName: "name",
						subject: "专利名称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入专利名称"
					}, {
						textName: "id",
						subject: "专利编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入专利编号"
					}, {
						textName: "patentType",
						subject: "专利类型",
						controlType: "select",
						values: [{
							valueName: "发明",
							valueCode: "1"
						}, {
							valueName: "理论",
							valueCode: "2"
						}]
					}, {
						textName: "patentRange",
						subject: "专利范围",
						controlType: "select",
						values: [{
							valueName: "中国",
							valueCode: "1"
						}, {
							valueName: "世界",
							valueCode: "2"
						}]
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
						textName: "state",
						subject: "专利状态",
						controlType: "select",
						values: [{
							valueName: "在使用",
							valueCode: "1"
						}, {
							valueName: "已停用",
							valueCode: "2",
						}]
					}, {
						textName: "userId",
						subject: "负责人学工号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人学工号"
					}, {
						textName: "applicationDate",
						subject: "申请日期",
						controlType: "date",
						isMustfill: true,
					}, {
						textName: "applicationId",
						subject: "申请编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入申请编号"
					}, {
						textName: "publicDate",
						subject: "公开日期",
						controlType: "date",
						isMustfill: true,
					}, {
						textName: "publicId",
						subject: "公开编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入公开编号"
					}, {
						textName: "impowerDate",
						subject: "授权日期",
						controlType: "date",
						isMustfill: true
					}, {
						textName: "impowerId",
						subject: "授权编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true
					}, {
						textName: "information",
						subject: "详细信息",
						controlType: "textarea",
						maxlength: 100
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
						url: this.$api + '/mangerModel/achievements/patent',
						method: 'POST',
						data: {
							name: result.value.id, //专利名称
							id: result.value.id, //专利编号
							patentType: result.value.patentType, //专利类型
							patentRange: result.value.patentRange, //专利范围
							collegeId: result.value.collegeId, //成果归属
							state: result.value.state, //专利状态
							userId: result.value.userId, //负责人学工号
							applicationDate: result.value.applicationDate, //申请日期
							applicationId: result.value.applicationId, //申请编号
							publicDate: result.value.publicDate, //公开日期
							publicId: result.value.publicId, //公开编号
							impowerDate: result.value.impowerDate, //授权日期
							impowerId: result.value.impowerId, //授权编号
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
