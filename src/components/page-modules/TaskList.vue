<template lang="pug">
		.tasks-container
			p Количество задач: {{todos.length}}
			.task-list(v-for="list in todos" :key="list.id")
				.task
					p(:class="{'completed': list.isCompleted}") задача: {{list.title}}
					.tasks-btns(v-if='canChange')
						button.main-btn(@click="viewTodo(list.id)") Показать задачу
						button.main-btn(@click="editTodo(list.id)") Изменить задачу
						button.main-btn(@click="toggleTodo(list.id)" :disabled='list.isCompleted') Выполнить задачу
						button.main-btn(@click="deleteTodo(list.id)" :disabled='!list.isCompleted') Удалить задачу
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PopupEdit",
  props: {
    canChange: Boolean
  },
  computed: {
    ...mapGetters("todo", ["computedTodo"]),
    todos() {
      return this.computedTodo;
    }
  },
  methods: {
    ...mapActions("todo", ["ToggleTodo", "DeleteTodo", "EditTodo"]),
    deleteTodo(id) {
      this.DeleteTodo(id);
    },
    toggleTodo(id) {
      this.ToggleTodo(id);
    },
    editTodo(id) {
      this.$emit("editTodo", id);
    },
    viewTodo(id) {
      this.$emit("viewTodo", id);
    }
  }
};
</script>

<style scoped lang="scss">
.completed {
  text-decoration: line-through;
  color: rgb(182, 174, 174);
}
</style>
