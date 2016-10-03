<template lang="pug">
#app
	main-menu
	router-view
</template>

<script>
import Menu from 'Components/Menu';

export default {
	components: {
		'mainMenu': Menu
	},

	data() {return {

	}}
};
</script>

<style>
@import '~normalize.css';
</style>
