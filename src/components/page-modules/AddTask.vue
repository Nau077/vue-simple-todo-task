<template lang="pug">
		.wrapper-task(v-if='isShown')
			slot(name="title")
			form(
				@submit.prevent='addTodo()'
				:class="{ 'form-group--error': $v.title.$error && $v.description.$error}"
				)
				p Добавить заголовок:
				input(
					type="text" 
					v-model="title"
					)
				p Добавить описание:
				textarea(
					v-model="description"
					)
				button.main-btn(
					@click="addTodo()"
					:disabled="$v.title.$invalid || $v.description.$invalid"
					) Добавить задачу
			.error(v-if="!$v.description.required && !$v.title.required")
				|Поля должны быть заполнены
			.error(v-if="!$v.description.minLength")
				| Количество символов у описания минимум: {{$v.description.$params.minLength.min}}.
			.error(v-if="!$v.title.minLength")
				| Количество символов у заголовка минимум: {{$v.title.$params.minLength.min}}.
			.error(v-if="!$v.description.maxLength")
				| Количество символов у описания максимум: {{$v.description.$params.maxLength.max}}.
			.error(v-if="!$v.title.maxLength")
				| Количество символов у заголовка максимум: {{$v.description.$params.maxLength.max}}									
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "PopupEdit",
  props: {
    isShown: Boolean
  },
  data() {
    return {
      description: "",
      title: ""
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10)
    },
    description: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(80)
    }
  },
  methods: {
    ...mapActions("todo", ["AddTodo"]),
    addTodo() {
      const newId = Date.now() + Math.random();
      const payload = {
        id: newId,
        title: this.title,
        description: this.description,
        isCompleted: false
      };
      if (this.description.length && this.title.length) {
        this.AddTodo(payload);
        this.title = "";
        this.description = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper-task {
  margin: 20px auto 20px auto;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 1px black;
  form {
    display: flex;
    flex-direction: column;
    button {
      margin: 5px auto 5px auto;
      max-width: 100px;
      width: 100%;
    }
  }
  p {
    margin: 5px auto 5px auto;
    max-width: 400px;
    width: 100%;
  }
  .error {
    color: rgb(196, 29, 29);
  }
}
</style>
