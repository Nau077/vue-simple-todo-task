<template lang="pug">
section.main
	.container
		.wrapper-main-btn(v-if='!isShownTodoFunc')
			button.main-btn.title-btn(@click="viewTasks()") Добавить задание
		AddTask(
			:isShown='isShownTodoFunc'
		)
			template(v-slot:title)
				div 
					h1 Добавить задачу:
		.wrapper-view-btn
			button.main-btn.title-btn(@click="viewEditTodo()" v-if='!canChange') Редактировать
		TaskList(
			:canChange='canChange'
			@editTodo='editTodo'
			@viewTodo='viewTodo'
		)
		PopupDescription(
			:isPopup='isPopup'
			:description='currentDescription'
			@closeDescPopup='closeDescPopup'
		)
		transition(name="slide-fade")
			div(v-if='isEdit')
				PopupEdit(
				:id='id'
				:edit='edit'
				@saveEdit='saveEdit'
				@closeEdit='closeEdit'
				)
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import popupsView from '@/mixins/popupsView'
import PopupEdit from '@/components/custom/PopupEdit'
import PopupDescription from '@/components/custom/PopupDescription'
import AddTask from '@/components/page-modules/AddTask'
import TaskList from '@/components/page-modules/TaskList'

export default {
	name: 'Main',
	mixins: [popupsView],
	components: {
		PopupEdit,
		PopupDescription,
		AddTask,
		TaskList
	},
	data() {
		return {
			id: NaN,
			canChange: false,
			isShownTodoFunc: false,
			currentDescription: '',
			edit: {
				editTitle: '',
				editDescription: ''
			}
		}
	},
	methods: {
		viewTasks() {
			this.isShownTodoFunc = true
		},
		viewEditTodo() {
			this.canChange = true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
	max-width: 1100px;
	width: 100%;
	position: relative;
	margin: auto;
}
.wrapper-view-btn {
	max-width: 300px;
	width: 100%;
	margin: auto;
}

.wrapper-main-btn {
	max-width: 300px;
	width: 100%;
	margin: 20px auto 20px auto;
}

.title-btn {
	width: 100%;
	padding: 10px;
}
.content {
	display: flex;
	justify-content: center;
	margin: 20px 0 20px 0;
}
.content p {
	margin-right: 10px;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
