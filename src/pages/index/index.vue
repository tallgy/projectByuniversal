<template>
	<!-- 首页 -->
	<view class="content">
		<view>
			<vear-carousel :img-list="imgList" url-key="url" @selected="selectedBanner" class="margin-t50" />
		</view>
		<view>
			<view class="qiun-columns">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">考核结果成绩总览表</view>
				</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY -->
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
					<!--#endif-->
				</view>
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
					<view class="qiun-title-dot-light">项目总览图</view>
				</view>
				<view class="qiun-charts">
					<!--#ifdef MP-ALIPAY -->
					<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasPie" id="canvasPie" class="charts"></canvas>
					<!--#endif-->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../wxcomponents/ucharts/u-charts.js'
	var _self;
	var canvaColumn = null;
	var canvaPie = null;

	export default {
		data() {
			return {
				// 轮播图
				imgList: [{
					url: '../../static/slideshow/slideshow_1.jpg',
					id: 1
				}, {
					url: '../../static/slideshow/slideshow_2.jpg',
					id: 2
				}, {
					url: '../../static/slideshow/slideshow_3.jpg',
					id: 3
				}, {
					url: '../../static/slideshow/slideshow_4.jpg',
					id: 4
				}],
				
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				
				// 树状图
				serverDataMix: '',
				mixName: ['项目考核结果', '论文考核结果', '专利考核结果', '科研考核结果', '著作考核结果'],
				minScore: [12, 23, 43, 123, 12],
				maxScore: [32, 43, 242, 52, 51],
				avgScore: [12, 43, 31, 34, 12],
				titleName: ['最低考核成绩', '最高考核成绩', '平均考核成绩'],
				
				//饼图
				serverDataPie: '',
				number: {
					project: 1,
					paper: 2,
					patent: 3,
					scientific: 5,
					work: 1,
				},
				name: {
					project: "项目",
					paper: "论文成果",
					patent: "专利产品",
					scientific: "科研成果",
					work: "著作成果",
				}
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerDataMix();
			this.getserverDataPie();
		},
		methods: {
			selectedBanner(item, index) {
				//轮播图的事件
				console.log('轮播图', item, index)
			},
			goToTeam() {
				console.log('去团队');
				uni.navigateTo({
					url: '/pages/team/team'
				})
			},
			getServerDataMix() {
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: (res) => {
						console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverDataMix = res.data.data;
						let Column = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Column.categories = this.mixName;
						//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
						Column.series = [{
								name: '最低考核成绩',
								data: this.minScore,
								type: 'column'
							},
							{
								name: '最高考核成绩',
								data: this.maxScore,
								type: 'column',
							},
							{
								name: '平均考核成绩',
								type: 'line',
								data: this.avgScore,
							}
						];
						_self.showColumn("canvasColumn", Column);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
					},
				});
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'mix',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: false,
					},
					yAxis: {},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
			},
			getserverDataPie() {
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data: {},
					success: (res) => {
						console.log(res.data.data)
						//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
						_self.serverDataPie = res.data.data;
						let Pie = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						//Pie.categories = this.name; //res.data.data.Pie.categories;
						//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
						Pie.series = [{
								data: this.number.project,
								name: this.name.project,
							},
							{
								data: this.number.paper,
								name: this.name.paper,
							},
							{
								data: this.number.work,
								name: this.name.work,
							},
							{
								data: this.number.scientific,
								name: this.name.scientific,
							},
							{
								data: this.number.patent,
								name: this.name.patent,
							}
						];
						_self.showPie("canvasPie", Pie);
					},
					fail: () => {
						console.log("网络错误，小程序端请检查合法域名");
					},
				});
			},
			showPie(canvasId, chartData) {
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					series: chartData.series,
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						pie: {
							lableWidth: 15
						}
					}
				});
			},
			changeDataMix() {
				canvaColumn.updateData({
					series: _self.serverDataMix.ColumnB.series,
					categories: _self.serverDataMix.ColumnB.categories
				});
			},
			changeDataPie() {
				canvaPie.updateData({
					series: _self.serverDataPie.ColumnB.series,
					categories: _self.serverDataPie.ColumnB.categories
				});
			}
		},
		components: {}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.index-img {
		width: 100rpx;
		height: 100rpx;
		justify-content: center;
	}
	
	.index-box {
		width: 120rpx;
		height: auto;
		margin: 20rpx;
	}
</style>
