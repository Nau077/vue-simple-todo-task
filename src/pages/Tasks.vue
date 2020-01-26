<template lang="pug">
	section.tasks
		TaskList(
			:canChange='canChange',
			:canShown='canShown'
			@viewTodo='viewTodo'
		)
		PopupDescription(
			:isPopup='isPopup'
			:description='currentDescription'
			@closeDescPopup='closeDescPopup'
		)
</template>

<script>
import TaskList from '@/components/page-modules/TaskList'
import popupsView from '@/mixins/popupsView'
import PopupDescription from '@/components/custom/PopupDescription'

export default {
	name: 'Tasks',
	mixins: [popupsView],
	components: {
		TaskList,
		PopupDescription,
	},
	data() {
		return {
			canChange: false,
			canShown: true,
			currentDescription: ''
		}
	}
}
</script>
<style scoped>
p {
	margin-right: 10px;
}
</style>
