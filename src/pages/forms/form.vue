<template>
	<view class="">
		<paper v-if="form==='paper'"></paper>
		<patent v-else-if="form=='patent'"></patent>
		<project v-else-if="form=='project'"></project>
		<scientific v-else-if="form=='scientific'"></scientific>
		<team v-else-if="form=='team'"></team>
		<work v-else-if="form=='work'"></work>
	</view>
</template>

<script>
	import paper from '../../components/forms/paper/paper.vue'
	import patent from '../../components/forms/patent/patent.vue'
	import project from '../../components/forms/project/project.vue'
	import scientific from '../../components/forms/scientific/scientific.vue'
	import team from '../../components/forms/team/team.vue'
	import work from '../../components/forms/work/work.vue'

	export default {
		data() {
			return {
				form: 'project',
			}
		},
		methods: {
			
		},
		components: {
			paper,
			patent,
			project,
			scientific,
			team,
			work,
		}
	}
</script>

<style>
</style>
