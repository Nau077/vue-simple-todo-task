<template lang="pug">
	.popup-card-edit(v-if='isEdit')
		.popup-card-wrapper
			p Изменить заголовок
			input(v-model="edit.editTitle")
			p Изменить описание
			textarea(v-model="edit.editDescription")
			button.main-btn(@click='saveEdit()') Сохранить изменения
		button.main-btn(@click='closeEditPopup()') Закрыть
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PopupEdit",
  props: {
    edit: Object,
    id: Number,
    isEdit: Boolean
  },
  data() {
    return {
      title: "",
      description: ""
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
        title: this.edit.editTitle,
        description: this.edit.editDescription
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
