export default {
  namespaced: true,
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({
        id: payload.id,
        title: payload.title,
        description: payload.description,
        isCompleted: payload.isCompleted
      });
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id == id);
      state.todos.splice(index, 1);
    },
    toggleTodo(state, id) {
      const target = state.todos.find(todo => todo.id == id);
      if (!target) throw new Error("invalid todo id");
      target.isCompleted = !target.isCompleted;
    },
    editTodo(state, payload) {
      const todo = state.todos.find(todo => todo.id == payload.id);
      todo.title = payload.title;
      todo.description = payload.description;
    }
  },
  actions: {
    AddTodo({ commit }, payload) {
      commit("addTodo", payload);
    },
    DeleteTodo({ commit }, id) {
      commit("deleteTodo", id);
    },
    ToggleTodo({ commit }, id) {
      commit("toggleTodo", id);
    },
    EditTodo({ commit }, payload) {
      commit("editTodo", payload);
    }
  },
  getters: {
    computedTodo(state) {
      return state.todos;
    }
  }
};
