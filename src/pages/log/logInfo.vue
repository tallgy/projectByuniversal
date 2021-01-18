<template>
	<view>
		<view class=".qiun-title-dot-light">
			{{ name=='info' ? '操作日志' : '系统日志' }}
		</view>
		<view class="item" :class="[name=='info' ? 'info-list' : 'ererror-list']" v-for="(item, index) in list" :key='index'
		 @click="">
			{{item.name}} <img class="inner_img" src="/static/list/right.png"></img>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'info',
				list: [{
						name: '插入',
						ip: '127.0.0.1',
					},
					{
						name: '插入1',
						ip: '127.0.0.2',
					},
				]
			}
		},
		onLoad(res) {
			console.log('info  load');
			console.log(res.name);
			this.name = res.name;
		},
		methods: {

		}
	}
</script>

<style>
	.item {
		padding: 30upx;
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

	.info-list {
		background-color: #FFFFFF;
		color: #000000;
	}

	.error-list {
		background-color: #f93bd0;
		color: #FFFFFF;
	}
	
	.qiun-title-dot-light {
		margin: 10rpx;
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;;
		font-size: 50upx;
		color: #000000
	}
</style>
