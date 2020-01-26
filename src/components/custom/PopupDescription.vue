<template lang="pug">
	transition(name="slide-fade")
		.popup-card-desciption(v-if='isPopup')
			.popup-card-wrapper
				P Описание задачи:
				p {{description}}
			button.main-btn(@click='closePopup()') Закрыть
</template>

<script>
export default {
	name: 'PopupEdit',
	props: {
		isPopup: Boolean,
		description: String
	},
	methods: {
		closePopup() {
			this.$emit('closeDescPopup')
		}
	}
}
</script>

<style scoped lang="scss">
.popup-card-desciption {
	z-index: 10;
	max-width: 500px;
	width: 100%;
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	border: black solid 1px;
	background: rgb(173, 231, 219);
	padding: 15px;
	box-sizing: border-box;
	.popup-card-wrapper {
		display: flex;
		flex-direction: column;
		overflow-x:hidden
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
