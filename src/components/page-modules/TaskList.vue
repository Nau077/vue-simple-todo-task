<template lang="pug">
		.tasks-container
			p Количество задач: {{todos.length}}
			.task-list(v-for="list in todos" :key="list.id")
				.task
					p(:class="{'completed': list.isCompleted}") задача: {{list.title}}
					transition(name="slide-fade")
						.tasks-btns(v-if='canChange && !canShown')
							button.main-btn(@click="viewTodo(list.id)") Показать задачу
							button.main-btn(@click="editTodo(list.id)") Изменить задачу
							button.main-btn(@click="toggleTodo(list.id)" :disabled='list.isCompleted') Выполнить задачу
							button.main-btn(@click="deleteTodo(list.id)" :disabled='!list.isCompleted') Удалить задачу
					.tasks-btns(v-if='!canChange && canShown')
						button.main-btn(@click="viewTodo(list.id)") Показать задачу

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'PopupEdit',
	props: {
		canChange: Boolean,
		canShown: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		...mapGetters('todo', ['computedTodo']),
		todos() {
			return this.computedTodo
		}
	},
	methods: {
		...mapActions('todo', ['ToggleTodo', 'DeleteTodo', 'EditTodo']),
		deleteTodo(id) {
			this.DeleteTodo(id)
		},
		toggleTodo(id) {
			this.ToggleTodo(id)
		},
		editTodo(id) {
			this.$emit('editTodo', id)
		},
		viewTodo(id) {
			this.$emit('viewTodo', id)
		}
	}
}
</script>

<style scoped lang="scss">
.tasks-container {
	margin-top: 20px;
}
.task {
display: flex;
	justify-content: space-between;
	background-color: white;
	max-width: 500px;
	margin: 20px auto 20px auto;
	padding: 10px;
	background: #f1f1f1;
	border: 2px solid #4CAF50;
	.tasks-btns {
		display: flex;
		flex-direction: column;
	}
}
.completed {
	text-decoration: line-through;
	color: rgb(182, 174, 174);
}
</style>
