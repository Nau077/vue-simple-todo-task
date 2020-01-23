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
.popup-card-desciption {
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 60px;
  border: black solid 1px;
  background: rgb(173, 231, 219);
  right: 250px;
  padding: 15px;
  box-sizing: border-box;
  .popup-card-wrapper {
    display: flex;
    flex-direction: column;
  }
  button {
    max-width: 300px;
    width: 100%;
    margin: 20px auto 20px auto;
  }
  p {
    margin: 10px auto 10px auto;
  }
}
</style>
