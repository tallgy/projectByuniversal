<template>
	<view class="margin-b40">
		<view class="margin-b40">
			<gpp-configurationForm ref="form" type="fill" :formTemplate="formTemplate" :formValue="paper_achievement" :isCard="true"></gpp-configurationForm>
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
				paper_achievement: { //申报的内容
					id: null, //论文编号
					name: null, //论文题目
					magazine: null, //期刊
					beginDate: null, //发表日期
					paperType: null, //论文类型
					recordId: null, //收录号
					descipline: null, //学科门类
					firstDiscipline: null, //一级学科
					collegeId: null, //成果归属
					paperSource: null, //论文来源
					userId: null, //作者
					information: null //详细信息
				},
				formTemplate: [{
					formTitle: "论文申报表单",
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
							textName: "userId",
							subject: "负责人学工号",
							controlType: "text",
							maxlength: 14,
							isMustfill: true,
							placeholder: "请输入负责人学工号"
						}, {
							textName: "magazine",
							subject: "发表期刊",
							controlType: "text",
							maxlength: 14,
							isMustfill: true,
							placeholder: "请输入发表期刊"
						},
						{
							textName: "beginDate",
							subject: "发表时间",
							controlType: "date",
							isMustfill: "true"
						}, {
							textName: "paperType",
							subject: "论文类型",
							controlType: "text",
							maxlength: 14,
							isMustfill: true,
							placeholder: "请输入论文类型"
						}, {
							textName: "recordId",
							subject: "收录号",
							controlType: "text",
							maxlength: 14,
							isMustfill: true,
							placeholder: "请输入收录号"
						}, {
							textName: "descipline",
							subject: "学科门类",
							controlType: "radio",
							values: [{
								valueName: "理科类",
								valueCode: "1"
							}, {
								valueName: "社科类",
								valueCode: "2"
							}]
						}, {
							textName: "firstDiscipline",
							subject: "一级学科",
							controlType: "select",
							values: [{
								valueName: "工学",
								valueCode: "1"
							}, {
								valueName: "文学",
								valueCode: "2"
							}, {
								valueName: "医学",
								valueCode: "3"
							}]
						}, {
							textName: "paperSource",
							subject: "项目来源",
							controlType: "radio",
							values: [{
								valueName: "横向",
								valueCode: "1"
							}, {
								valueName: "纵向",
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
							textName: "information",
							subject: "详细信息",
							controlType: "textarea",
							maxlength: 100,
							placeholder: "请输入详细信息"
						}
					]
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
						url: this.$api + '/mangerModel/achievements/paper',
						method: 'POST',
						data: {
							id: result.value.id, //论文编号
							name: result.value.name, //论文题目
							magazine: result.value.magazine, //期刊
							beginDate: result.value.beginDate, //发表日期
							paperType: result.value.paperType, //论文类型
							recordId: result.value.recordId, //收录号
							descipline: '1', //学科门类
							firstDiscipline: result.value.firstDiscipline, //一级学科
							collegeId: result.value.collegeId, //成果归属
							paperSource: '1', //论文来源
							userId: result.value.userId, //作者
							information: result.value.information //详细信息
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
								// });
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
