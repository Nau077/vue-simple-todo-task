<template lang="pug">
	.popup-card-edit
		.popup-card-wrapper(
			:class="{ 'form-group--error': $v.title.$error && $v.description.$error}"
			)
			p Изменить заголовок
			input(v-model="title")
			p Изменить описание
			textarea(v-model="description")
			button.main-btn(
				:disabled="$v.title.$invalid || $v.description.$invalid"
				@click='saveEdit()'
			) Сохранить изменения
			.error(v-if="!$v.description.required && !$v.title.required")
				|Поля должны быть заполнены
			.error(v-if="!$v.description.minLength")
				| Количество символов у описания минимум: {{$v.description.$params.minLength.min}}.
			.error(v-if="!$v.title.minLength")
				| Количество символов у заголовка минимум: {{$v.title.$params.minLength.min}}.
			.error(v-if="!$v.description.maxLength")
				| Количество символов у описания максимум: {{$v.description.$params.maxLength.max}}.
			.error(v-if="!$v.title.maxLength")
				| Количество символов у заголовка максимум: {{$v.title.$params.maxLength.max}}
		button.main-btn(@click='closeEditPopup()') Закрыть
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
	name: 'PopupEdit',
	props: {
		edit: Object,
		id: Number
	},
	data() {
		return {
			title: this.edit.editTitle,
			description: this.edit.editDescription
		}
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
		...mapActions('todo', ['EditTodo']),
		closeEditPopup() {
			this.$emit('closeEdit')
		},
		saveEdit() {
			const payload = {
				id: this.id,
				title: this.title,
				description: this.description
			}
			this.EditTodo(payload)
			this.$emit('saveEdit', false)
		}
	}
}
</script>

<style scoped lang="scss">
@import 'src/styles/main.scss';
.popup-card-edit {
	max-width:500px;
	z-index: 10;
	width: 100%;
	position: absolute;
	border: black solid 1px;
	background: rgb(173, 231, 219);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	box-sizing: border-box;
	.popup-card-wrapper {
		display: flex;
		flex-direction: column;
		overflow-x:hidden
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
