<template>
	<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
	<view class="YmContent">
		<view class="info_96">
			<view class="info_61">
				<text decode="true" class="info_66">我的头像</text>
				<image v-on:click="photo_63_click()" :src="imgUrl" mode="scaleToFill" border="0" class="photo"></image>
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">姓名</text>
				<text decode="true" class="name">{{userinfo.name}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">备注</text>
				<text decode="true" class="name">{{userinfo.note}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">学工号</text>
				<text decode="true" class="name">{{userinfo.id}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">性别</text>
				<text decode="true" class="name">{{userinfo.sex}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">出生日期</text>
				<text decode="true" class="name">{{userinfo.birth_date}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">身份证号</text>
				<text decode="true" class="name">{{userinfo.id_number}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">电话号码</text>
				<text decode="true" class="name">{{userinfo.phone}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">电子邮箱</text>
				<text decode="true" class="name">{{userinfo.email}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">所属学院</text>
				<text decode="true" class="name">{{userinfo.college_name}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">权限</text>
				<text decode="true" class="name">{{userinfo.identity}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">职位</text>
				<text decode="true" class="name">{{userinfo.post}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">注册日期</text>
				<text decode="true" class="name">{{userinfo.register}}</text>
			</view>
			<view class="info_83">
			</view>
			<view class="row4 margin-b100">
				<cc-button width="300rpx" height="90rpx" color="#fff" bgcolor="#ff0000;"
				 fontsize="34rpx">退出</cc-button>
			</view>
		</view>
	</view>
</template>

<script>
	var _self, page = 1,
		timer = null;

	export default {
		data() {
			return {
				userinfo: {
					name: '王五',
					sex: '男',
					id: '2018113311',
					phone: '18525348852',
					identity: '超级管理员',
					id_number: '520*********2351',
					college_id: '001',
					college_name: '计算机科学学院',
					register: '2020-11-14',
					note: '该用户比较勤快，暂时没有备注',
					birth_date: '1999-02-15',
					post: '教授',
					email: '123412@qq.com',
				},
				imgUrl: '/static/info/images/headPortrait.jpg',

				page: 0, //当前分页页码
				apiUrl: '', //后端接口地址
				id: '', //传值使用,方便存在本地的locakStorage  
				del_id: '' //方便存在本地的locakStorage  
			}
		},
		components: {

		},
		onLoad(options) {
			_self = this;

			//检查是否登录参考代码,需要用的时候，可以把注释取掉
			//if(this.checkLogin()==false){
			//	return;
			//}
			//this.getLaction();//得到gps
			this.page = 0;
			//检测有没有传入id参数
			if (options.id != null && options.id != "") {
				this.id = options.id;
			}
			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");
		},
		onShow() {
			console.log("on show");
			//if(this.checkLogin()==false){
			//	return;
			//}

			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");
		},
		onPullDownRefresh: function() {
			//下拉刷新的时候请求一次数据
			this.Refresh();
		},
		methods: {
			/**
			 * photo_63处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			photo_63_click: function(event) {

			},

			/**
			 * row4_65处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			row4_65_click: function(event) {

				uni.navigateTo({
					url: '/pages/nav/nav'
				})
			},

			/**
			 * info_68_68处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			info_68_68_click: function(event) {

			},

			/**
			 * row3_70处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			row3_70_click: function(event) {

				uni.navigateTo({
					url: '/pages/nav/nav'
				})
			},

			/**
			 * info_73_73处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			info_73_73_click: function(event) {

			},

			/**
			 * row2_75处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			row2_75_click: function(event) {
				uni.navigateTo({
					url: '/pages/nav/nav'
				})
			},

			/**
			 * row1_80处理函数
			 * 数据绑定  data-index="{{index}}" 
			 * 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			 */
			row1_80_click: function(event) {
				uni.navigateTo({
					url: '/pages/nav/nav'
				})
			},

			//刷新数据
			Refresh: function(_action) {
				//提交到服务器
				// var that = this
				// var url = that.apiUrl + '{server_code_file_path}';
				// console.log(url);

				// uni.request({
				// 	url: url, //后端接口地址，需要改成自己的接口地址
				// 	data: {
				// 		action: _action, //上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
				// 		uid: that.getUid(), //上传用户id,在登录中获得
				// 		//上传页面中的变量
				// 		//定义变量---start

				// 		//定义变量---end
				// 		id: that.id, //上传id值，后端可以根据此值来操作当前id
				// 		del_id: that.del_id, //在列表中删除按钮选中时，上传到有后端，进行删除操作
				// 		page: that.page
				// 	},
				// 	method: 'GET',
				// 	success: function(res) { //后端返回数据

				// 		// 隐藏导航栏加载框  
				// 		uni.hideNavigationBarLoading();
				// 		// 停止下拉动作  
				// 		uni.stopPullDownRefresh();

				// 		// 隐藏加载框  
				// 		uni.hideLoading();
				// 		var tmp = res.data;

				// 		//初始化，对页面上的控件进行赋值操作
				// 		if (_action == "init") {
				// 		}
				// 		{
				// 			deal_listpages
				// 		}

				// 		//如果后端有返回消息，则弹出消息提示
				// 		if (tmp.message != null && tmp.message != "") {
				// 			uni.showToast({
				// 				title: tmp.message,
				// 				icon: 'none',
				// 				duration: 2000
				// 			})
				// 		}

				// 		//如果后端有返回页码，则更改当前页码
				// 		if (tmp.page != null && tmp.page != "") {
				// 			page = tmp.page;
				// 		}
				// 	},
				// 	fail: function(res) {
				// 		uni.showToast({
				// 			title: "服务器访问失败",
				// 			icon: 'none',
				// 			duration: 2000
				// 		})
				// 		console.log(res.data);
				// 		console.log('is failed')
				// 	}
				// })
			},
		}
	}
</script>

<style lang="scss">
	//本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm
	html,
	body,
	#app {
		height: 100%;
		width: 100%;
	}

	.YmContent {
		height: 100%;
		width: 100%;
	}

	uni-page-body,
	#app {
		height: 100%;
	}

	button::after {
		border: none;
		width: auto;
	}

	input {
		outline: none;
		border: none;
		list-style: none;
		width: auto;
	}

	.list_item {
		float: left;
	}

	.ym_hide {
		display: none;
	}

	.ym_show {
		display: block;
	}

	.slide-image {
		width: 100%;
		height: 100%;
	}

	.list_horizontal {
		width: auto;
		display: inline-block;
	}

	.info_96 {
		white-space: normal;
		width: 749upx;
		height: 1202upx;
		padding: 0upx;
		clear: both;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 8upx;
	}

	.info_96 .info_61 {
		white-space: normal;
		width: 689upx;
		height: 99upx;
		padding: 0upx;
		clear: both;
		margin-top: 29upx;
		margin-left: 30upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 8upx;
	}

	.info_96 .info_61 .info_62 {
		white-space: normal;
		width: 159upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 34upx;
		margin-left: 0upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		color: #000000;
		font-size: 26upx;
		line-height: 29upx;
	}

	.info_96 .info_61 .photo {
		white-space: normal;
		width: 98upx;
		height: 98upx;
		overflow: hidden;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 429upx;
		float: left;
		text-align: left;
		border-radius: 71upx;
		font-size: 8upx;
		line-height: 98upx;
	}

	.info_96 .info_64 {
		white-space: normal;
		width: 691upx;
		height: 1upx;
		padding: 0upx;
		clear: both;
		margin-top: 31upx;
		margin-left: 29upx;
		float: left;
		background-color: #e1e1e1;
		text-align: left;
		border-radius: 0upx;
		font-size: 2upx;
		line-height: 4upx;
	}

	.info_96 .row4 {
		white-space: normal;
		width: 699upx;
		height: 29upx;
		padding: 0upx;
		clear: both;
		margin-top: 35upx;
		margin-left: 23upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 28upx;
		line-height: 29upx;
	}

	.info_96 .row4 .info_66 {
		white-space: normal;
		width: 159upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 6upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		color: #000000;
		font-size: 30upx;
		line-height: 29upx;
	}

	.info_96 .row4 .name {
		white-space: normal;
		width: 399upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 88upx;
		float: left;
		text-align: right;
		border-radius: 0upx;
		color: #c8c8c8;
		font-size: 28upx;
		line-height: 29upx;
	}

	.info_96 .row4 .info_68 {
		white-space: normal;
		width: 17upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 20upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 26upx;
		line-height: 29upx;
	}

	.info_96 .info_69 {
		white-space: normal;
		width: 691upx;
		height: 1upx;
		padding: 0upx;
		clear: both;
		margin-top: 40upx;
		margin-left: 29upx;
		float: left;
		background-color: #e1e1e1;
		text-align: left;
		border-radius: 0upx;
		font-size: 2upx;
		line-height: 4upx;
	}

	.info_96 .row3 {
		white-space: normal;
		width: 699upx;
		height: 29upx;
		padding: 0upx;
		clear: both;
		margin-top: 35upx;
		margin-left: 23upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 28upx;
		line-height: 29upx;
	}

	.info_96 .row3 .info_71 {
		white-space: normal;
		width: 159upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 6upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		color: #000000;
		font-size: 27upx;
		line-height: 29upx;
	}

	.info_96 .row3 .ids {
		white-space: normal;
		width: 399upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 88upx;
		float: left;
		text-align: right;
		border-radius: 0upx;
		color: #c86464;
		font-size: 26upx;
		line-height: 29upx;
	}

	.info_96 .row3 .info_73 {
		white-space: normal;
		width: 17upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 20upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 26upx;
		line-height: 29upx;
	}

	.info_96 .info_74 {
		white-space: normal;
		width: 691upx;
		height: 1upx;
		padding: 0upx;
		clear: both;
		margin-top: 40upx;
		margin-left: 29upx;
		float: left;
		background-color: #e1e1e1;
		text-align: left;
		border-radius: 0upx;
		font-size: 2upx;
		line-height: 4upx;
	}

	.info_96 .row2 {
		white-space: normal;
		width: 699upx;
		height: 29upx;
		padding: 0upx;
		clear: both;
		margin-top: 36upx;
		margin-left: 22upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 27upx;
		line-height: 29upx;
	}

	.info_96 .row2 .info_76 {
		white-space: normal;
		width: 159upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 7upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		color: #000000;
		font-size: 26upx;
		line-height: 29upx;
	}

	.info_96 .row2 .mobile {
		white-space: normal;
		width: 441upx;
		height: 29upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 88upx;
		float: left;
		text-align: right;
		border-radius: 0upx;
		color: #646464;
		font-size: 24upx;
		line-height: 29upx;
	}

	.info_96 .info_79 {
		white-space: normal;
		width: 691upx;
		height: 1upx;
		padding: 0upx;
		clear: both;
		margin-top: 40upx;
		margin-left: 29upx;
		float: left;
		background-color: #e1e1e1;
		text-align: left;
		border-radius: 0upx;
		font-size: 2upx;
		line-height: 4upx;
	}

	.info_96 .row1 {
		white-space: normal;
		width: 699upx;
		height: 32upx;
		padding: 0upx;
		clear: both;
		margin-top: 33upx;
		margin-left: 23upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		font-size: 31upx;
		line-height: 32upx;
	}

	.info_96 .row1 .info_81 {
		white-space: normal;
		width: 159upx;
		height: 32upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 6upx;
		float: left;
		text-align: left;
		border-radius: 0upx;
		color: #000000;
		font-size: 29upx;
		line-height: 29upx;
	}

	.info_96 .row1 .job {
		white-space: normal;
		width: 440upx;
		height: 32upx;
		padding: 0upx;
		margin-top: 0upx;
		margin-left: 88upx;
		float: left;
		text-align: right;
		border-radius: 0upx;
		color: #646464;
		font-size: 30upx;
		line-height: 32upx;
	}

	.info_96 .info_83 {
		white-space: normal;
		width: 749upx;
		height: 1upx;
		padding: 0upx;
		clear: both;
		margin-top: 36upx;
		margin-left: 0upx;
		float: left;
		background-color: #e1e1e1;
		text-align: left;
		border-radius: 0upx;
		font-size: 2upx;
		line-height: 3upx;
	}
	
	.exit-button {
		background-color: #aa0000;
		color: #FFFFFF;
	}
</style>
