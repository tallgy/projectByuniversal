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
					teamid: null, //团队编号
					teamname: null, //团队名称
					researchDiection: null, //研究方向
					discipline: null, //学科门类
					foundingTime: null, //创建时间
					firstDiscipline: null, //一级学科
					phone: null, //办公电话
					characters: null, //团队性质
					userId: null, //负责人
					userName: null, //负责人姓名
					collegeId: null, //所属学院
					user_sex: null, //负责人性别
					user_birthDate: null, //出生年月
					user_post: null, //负责人职称
					user_phone: null, //联系电话
					user_email: null, //电子邮箱
					information: null, //团队信息
				},
				formTemplate: [{
					formTitle: "团队申报表单",
					object: [{
						textName: "teamname",
						subject: "团队名称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入团队名称"
					}, {
						textName: "teamid",
						subject: "团队编号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入团队编号"
					}, {
						textName: "researchDiection",
						subject: "研究方向",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入研究方向"
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
						textName: "discipline",
						subject: "学科门类",
						controlType: "radio",
						values: [{
							valueName: "理工类",
							valueCode: "1"
						}, {
							valueName: "社科类",
							valueCode: "2",
						}]
					}, {
						textName: "foundingTime",
						subject: "建设时间",
						controlType: "date",
					}, {
						textName: "firstDiscipline",
						subject: "一级学科",
						controlType: "select",
						values: [{
							valueName: "工科",
							valueCode: "1"
						}, {
							valueName: "理科",
							valueCode: "2",
						}]
					}, {
						textName: "phone",
						subject: "办公电话",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入办公电话"
					}, {
						textName: "userId",
						subject: "负责人学工号",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人学工号"
					}, {
						textName: "userName",
						subject: "负责人姓名",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人姓名"
					}, {
						textName: "user_sex",
						subject: "负责人性别",
						controlType: "radio",
						values: [{
							valueName: "男",
							valueCode: "1"
						}, {
							valueName: "女",
							valueCode: "2"
						}]
					}, {
						textName: "user_birthDate",
						subject: "出生年月",
						controlType: "date",
						isMustfill: true
					}, {
						textName: "user_post",
						subject: "负责人职称",
						controlType: "text",
						maxlength: 14,
						isMustfill: true,
						placeholder: "请输入负责人职称"
					}, {
						textName: "user_phone",
						subject: "联系电话",
						controlType: "text",
						maxlength: 11,
						isMustfill: true,
						placeholder: "请输入联系电话"
					}, {
						textName: "user_email",
						subject: "电子邮箱",
						controlType: "text",
						maxlength: 14,
						placeholder: "请输入电子邮箱"
					}, {
						textName: "information",
						subject: "团队信息",
						controlType: "textarea",
						maxlength: 100,
						placeholder: "请输入团队信息"
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
						url: this.$api + '/mangerModel/teams',
						method: 'POST',
						data: {
							teamid: result.value.teamid, //团队编号
							teamname: result.value.teamname, //团队名称
							researchDiection: result.value.researchDiection, //研究方向
							discipline: '0', //学科门类
							foundingTime: result.value.foundingTime, //创建时间
							firstDiscipline: result.value.firstDiscipline, //一级学科
							phone: result.value.phone, //办公电话
							characters: result.value.characters, //团队性质
							userId: result.value.userId, //负责人
							userName: result.value.userName, //负责人姓名
							collegeId: result.value.collegeId, //所属学院
							user_sex: '1', //负责人性别
							user_birthDate: result.value.user_birthDate, //出生年月
							user_post: result.value.user_post, //负责人职称
							user_phone: result.value.user_phone, //联系电话
							user_email: result.value.user_email, //电子邮箱
							information: result.value.information, //团队信息
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
