<template lang="pug">
	.popup-card-edit
		.popup-card-wrapper
			p Изменить заголовок
			input(v-model="title")
			p Изменить описание
			textarea(v-model="description")
			button.main-btn(@click='saveEdit()') Сохранить изменения
		button.main-btn(@click='closeEditPopup()') Закрыть
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PopupEdit",
  props: {
    edit: Object,
    id: Number
  },
  data() {
    return {
      title: this.edit.editTitle,
      description: this.edit.editDescription
    };
  },
  methods: {
    ...mapActions("todo", ["EditTodo"]),
    closeEditPopup() {
      this.$emit("closeEdit");
    },
    saveEdit() {
      const payload = {
        id: this.id,
        title: this.title,
        description: this.description
      };
      this.EditTodo(payload);
      this.$emit("saveEdit", false);
    }
  }
};
</script>

<style scoped lang="scss">
@import "src/styles/main.scss";
.popup-card-edit {
  max-width: 600px;
  width: 100%;
  position: absolute;
  border: black solid 1px;
  background: rgb(173, 231, 219);
  left: 50%;
  margin-left: -315px;
  top: 24%;
  padding: 15px;
  box-sizing: border-box;
  .popup-card-wrapper {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  button {
    max-width: 300px;
    width: 100%;
    margin: 20px auto 20px auto;
  }
  textarea {
    height: 100px;
  }
  p {
    margin: 10px auto 10px auto;
  }
}
</style>
