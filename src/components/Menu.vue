<template lang="pug">
header
	.container
		li(v-for="(item, i) in navbars")
			router-link(:to="{path:item.router}") {{item.names}}
</template>

<script>

export default {
	name: 'Menu',
	props: {
	msg: String
},
	data() {
		return {
			navbars: [
				{names: 'Main', router: '/'},
				{names: 'Tasks', router: '/Tasks'},
				{names: 'About', router: '/About'},
			]
		}
	}
}
</script>

<style lang="scss">
header {
	width: 100%;
	color: rgb(248, 248, 248);
	.container{
		display: flex;
		max-width: 1110px;
		width: 100%;
		justify-content: center;
		margin: auto;
	}

}
</style>