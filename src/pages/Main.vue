<template lang="pug">
section.main
	.container
		.wrapper-main-btn
			button.main-btn(@click="viewTasks()") Добавить задание
		.wrapper-task(v-if='isShownTodoFunc')
			form(@submit.prevent='addTodo()')
				input(type="text" v-model="title")
				textarea(v-model="description")
				button(@click="addTodo()") Добавить задачу
		.tasks-container
			p Количество задач: {{todos.length}}
			.task-list(v-for="list in todos" :key="list.id")
				.task
					p(:class="{'completed': list.isCompleted}") {{list.title}}
					button.main-btn(@click="viewEditTodo()" v-if='!canChange') Редактировать
					.tasks-btns(v-if='canChange')
						button.main-btn(@click="viewTodo(list.id)") Показать задачу
						button.main-btn(@click="editTodo(list.id)") Изменить задачу
						button.main-btn(@click="toggleTodo(list.id)") Выполнить задачу
						button.main-btn(@click="deleteTodo(list.id)" :disabled='!list.isCompleted') Удалить задачу
		.popup-card(v-if='isPopup')
			.popup-card-wrapper
				p {{currentDescription}}
			button(@click='closePopup()') Закрыть
		.popup-card-edit(v-if='isEdit')
			.popup-card-wrapper
				input(v-model='editTitle')
				textarea(v-model="editDescription")
				button(@click='saveEdit()') Сохранить изменения
			button(@click='closeEditPopup()') Закрыть
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Main',
    data() {
        return {
			id: 0,
			description: '',
			title: '',
			completed: true,
			canChange: false,
			isShownTodoFunc: false,
			isPopup: false,
			isEdit: false,
			currentDescription:'',
			editTitle: '',
			editDescription: ''
		};
    },
  computed: {
	...mapGetters('todo', ['computedTodo']),
      todos () {  
     	return this.computedTodo      
	  },
    },
  methods: {
	  ...mapActions('todo', [
		  	'DeleteActionTodo',
			'ToggleTodo',
			'AddActionTodo',
			'EditTodo']
			),
	  viewTasks() {
		  this.isShownTodoFunc = true
	  },
      addTodo () {
        const newId = Date.now() + Math.random()
        const payload = {'id':newId, 'title': this.title, 'description': this.description, 'isCompleted': false}
        if (this.description.length && this.title.length) {
			this.AddActionTodo(payload)
			this.title = ''
			this.description = ''
		}
      },
      deleteTodo (id){
        this.DeleteActionTodo(id)
      },
      toggleTodo(id){
        this.ToggleTodo(id)
	  },
	  viewEditTodo() {
		this.canChange = true
	  },
	  editTodo(id){
		const todo = this.todos.find(item=>id==item.id)
		this.editTitle = todo.title
		this.id = todo.id
		this.editDescription = todo.description
		this.isEdit = true
	  },
	  viewTodo(id){
		const todo = this.todos.find(item=>id==item.id)
		this.currentDescription = todo.description
		this.isPopup = true
	  },
	  closePopup() {
		  this.isPopup = false
	  },
	  closeEditPopup() {
		  this.isEdit = false
	  },
	  saveEdit() {
		  const payload = {'id':this.id, 'title': this.editTitle, 'description':this.editDescription}
		  this.EditTodo(payload)
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
}

.popup-card {
	max-width: 400px;
	position: absolute;
	top: 10px;
	right: 50%;
}

.popup-card-edit {
	max-width: 400px;
	position: absolute;
	top: 10px;
	right: 50%;
}

.completed {
  text-decoration: line-through;
  color: rgb(182, 174, 174);
}
.content {
  display: flex;
  justify-content: center;
  margin: 20px 0 20px 0;
}
.content p{
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