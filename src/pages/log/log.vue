<template>
	<view>
		<xuan-popup ref="mpopup" :isdistance="true"></xuan-popup>
		<mask v-if="isloading"></mask>
		
	    <view
	      class="item"
	      @click="openLog('info')"
	      >操作日志 <img class="inner_img" src="/static/list/right.png"
	    /></view>
		<view
		  class="item"
		  @click="openLog('error')"
		  >系统日志 <img class="inner_img" src="/static/list/right.png"
		/></view>
		<view
		  class="item"
		  @click="openLog('login')"
		  >登录日志 <img class="inner_img" src="/static/list/right.png"
		/></view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	
	export default {
		data() {
			return {
				isloading: false,
			}
		},
		methods: {
			openLog(name) {
				this.isloading = true;
				uni.showLoading({
					title: '加载中...',
				})
				console.log(name)
				
				if (name == 'info') {
					var token = uni.getStorageSync('token');
					uni.request({
						url: this.$api + '/mangerSys/operlog',
						method: 'GET',
						header: {
							'authorization': token,
						},
						success: (res) => {
							console.log(res);
							
							uni.hideLoading();
							this.isloading = false;
							helper.successPop(this, '获取成功', 1500)
							uni.navigateTo({
								url: '/pages/log/logInfo?name=' + name,
							})
							
						},
						fail: (res) => {
							uni.hideLoading();
							this.isloading = false;
							helper.errorPop(this, '网络错误，请检查', 1500);
						}
					});
				} else {
					//系统日志
					var token = uni.getStorageSync('token');
					uni.request({
						url: this.$api + '/mangerSys/syslog',
						method: 'GET',
						header: {
							'authorization': token,
						},
						success: (res) => {
							console.log(res);
							
							uni.hideLoading();
							this.isloading = false;
							helper.successPop(this, '获取成功', 1500)
							uni.navigateTo({
								url: '/pages/log/logInfo?name=' + name,
							})
							
						},
						fail: (res) => {
							uni.hideLoading();
							this.isloading = false;
							helper.errorPop(this, '网络错误，请检查', 1500);
						}
					});
				}
				

			}
		}
	}
	
</script>

<style>
	.item {
	  padding: 50upx;
	  margin: 10upx;
	  border-bottom: 1px solid #e5e5e5;
	  text-align: left;
	  font-size: 30upx;
	}
	.inner_img {
	  width: 40upx;
	  height: 40upx;
	  float: right;
	}
</style>
