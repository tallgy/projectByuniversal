<template>
	<view>
	  <list>
	    <view
	      class="item"
	      @click="openLog('info')"
	      >操作日志 <img class="inner_img" src="/static/list/right.png"
	    /></view>
		<view
		  class="item"
		  @click="openLog('error')"
		  >错误日志 <img class="inner_img" src="/static/list/right.png"
		/></view>
	  </list>
	</view>
</template>

<script>
	
	export default {
		methods: {
			openLog(name) {
				console.log(name)
			}
		}
	}
	
</script>

<style>
	
</style>
