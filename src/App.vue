<template lang="pug">
	#app
		Menu
		transition(name="router-fade")
			router-view
</template>
<script>
import Menu from '@/components/Menu'
import store from '@/store/index.js'
export default {
	name: 'app',
	components: {
		Menu
	},
	store
}
</script>
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

</style>
