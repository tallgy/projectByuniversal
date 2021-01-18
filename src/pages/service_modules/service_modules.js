import app from "../../App.vue"

// 定义全局参数,控制数据加载
var _self, page = 1, timer = null;

export default {
	data() {
		return {
			loadingText: '',

			page: 0,//当前分页页码
			apiUrl: 'https://www.ymznkf.com/wx_server',//后端接口地址
			id: '',//传值使用,方便存在本地的locakStorage  
			del_id: '',//方便存在本地的locakStorage  

			fun_id:'',
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
	onPullDownRefresh: function () {
		//下拉刷新的时候请求一次数据
		// this.Refresh();
	},
	methods: {

		/**
		* toProjectList处理函数
		*/
		toProjectList: function (event) {
			this.fun_id='11';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toFundList处理函数
		*/
		toFundList: function (event) {
			this.fun_id='12';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toPaperList处理函数
		*/
		toPaperList: function (event) {
			this.fun_id='21';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toWorkList处理函数
		*/
		toWorkList: function (event) {
			this.fun_id='22';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toSicenList处理函数
		*/
		toSicenList: function (event) {
			this.fun_id='23';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toPatentList处理函数
		*/
		toPatentList: function (event) {
			this.fun_id='24';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toProjectResult处理函数
		*/
		toProjectResult: function (event) {
			this.fun_id='31';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toPaperResult处理函数
		*/
		toPaperResult: function (event) {
			this.fun_id='32';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toWorkResult处理函数
		*/
		toWorkResult: function (event) {
			this.fun_id='32';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toScientificResult处理函数
		*/
		toScientificResult: function (event) {
			this.fun_id='32';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toPatentResult处理函数
		*/
		toPatentResult: function (event) {
			this.fun_id='32';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		/**
		* toTeam处理函数
		*/
		toTeam: function (event) {
			this.fun_id='32';
			uni.navigateTo({
				url: "/pages/list/list?fun_id="+this.fun_id,
				success: (res) => {},
				fail: () => {},
				complete: () => {},
			  });
		},

		//刷新数据
		Refresh: function (_action) {

			uni.showLoading();

			//提交到服务器
			var that = this
			var url = that.apiUrl + '{server_code_file_path}';
			console.log(url);
			uni.request({
				url: url,//后端接口地址，需要改成自己的接口地址
				data: {
					action: _action,//上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
					uid: that.getUid(),//上传用户id,在登录中获得
					//上传页面中的变量
					//定义变量---start

					//定义变量---end
					id: that.id,//上传id值，后端可以根据此值来操作当前id
					del_id: that.del_id,//在列表中删除按钮选中时，上传到有后端，进行删除操作
					page: that.page
				},
				method: 'GET',
				success: function (res) {//后端返回数据

					// 隐藏导航栏加载框  
					uni.hideNavigationBarLoading();
					// 停止下拉动作  
					uni.stopPullDownRefresh();

					// 隐藏加载框  
					uni.hideLoading();

					var tmp = res.data;

					//初始化，对页面上的控件进行赋值操作
					if (_action == "init") {

					}

					{ deal_listpages }



					//如果后端有返回消息，则弹出消息提示
					if (tmp.message != null && tmp.message != "") {
						uni.showToast({
							title: tmp.message,
							icon: 'none',
							duration: 2000
						})
					}



					//如果后端有返回页码，则更改当前页码
					if (tmp.page != null && tmp.page != "") {
						page = tmp.page;
					}

				},
				fail: function (res) {
					uni.showToast({
						title: "服务器访问失败",
						icon: 'none',
						duration: 2000
					})
					console.log(res.data);
					console.log('is failed')
				}
			})
		},
	}
}
