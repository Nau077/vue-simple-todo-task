import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			isPopup: false,
			isEdit: false
		}
	},
	computed: {
		...mapGetters('todo', ['computedTodo']),
		todos() {
			return this.computedTodo
		}
	},
	methods: {
		...mapActions('todo', ['EditTodo', 'viewTodo']),
		closeDescPopup() {
			this.isPopup = false
		},
		closeEdit() {
			this.isEdit = false
		},
		saveEdit(value) {
			this.isEdit = value
		},
		viewTodo(id) {
			const todo = this.todos.find(item => id == item.id)
			this.currentDescription = todo.description
			this.isPopup = true
		},
		editTodo(id) {
			const todo = this.todos.find(item => id == item.id)
			this.edit.editTitle = todo.title
			this.id = todo.id
			this.edit.editDescription = todo.description
			this.isEdit = true
		}
	}
}
