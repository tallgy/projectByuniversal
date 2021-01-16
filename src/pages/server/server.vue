<template>
	<view class="">
		<button type="default" @click="goToProject">项目</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToProject() {
				uni.navigateTo({
					url: "/pages/forms/form"
				})
			}
		}
	}
</script>

<style>
	
</style>
