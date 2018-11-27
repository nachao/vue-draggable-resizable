<template>
	<div class="prop-side">
		<PropBase></PropBase>
		<PropAnimation></PropAnimation>
	</div>
</template>
<script>
	import PropBase from './prop-base'
	import PropAnimation from './prop-animation'
	export default {
		components: {
			PropBase,
			PropAnimation
		},
		props: {
			character
		}
	}
</script>
<style>
	.prop-side {
		border-right: 1px solid #aaa;
		padding: 20px;
	}
</style>