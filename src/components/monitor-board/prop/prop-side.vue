<template>
	<div class="prop-side">
		<template v-if="character.type === 1">
			<PropScene :character="character"></PropScene>
		</template>
		<template v-else>
			<PropBase :character="character"></PropBase>
			<PropAnimation :character="character"></PropAnimation>
		</template>
	</div>
</template>
<script>
	import PropBase from './prop-base'
	import PropAnimation from './prop-animation'
	import PropScene from './prop-scene'
	export default {
		components: {
			PropBase,
			PropAnimation,
			PropScene
		},
		props: {
			character: Object
		}
	}
</script>
<style>
	.prop-side {
		padding: 20px;
	}
	.prop-side h2 {
		font-size: 14px;
		padding: 10px;
		background: #aaa;
		margin: 0 0 20px 0;
		color: #000;
	}
</style>