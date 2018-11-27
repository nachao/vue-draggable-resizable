<template>
	<VueDraggableResizable
		:x="character.x"
		:y="character.y"
		:w="character.w"
		:h="character.h"
		:parent="true"
		:resizable="true"
		:active="true"
		@activated="onActivated"
		@resizestop="onResizstop"
		@dragstop="onDragstop">123
	</VueDraggableResizable>
</template>
<script>
	export default {
		model: {
			prop: 'data',
			event: 'change'
		},
		props: {
			character: Object,
			activated: Function
		},
		methods: {
			onResizstop(left, top, width, height) {
				console.log(1111, left, top, width, height)
			},
			onDragstop(left, top) {
				console.log(222, left, top)
			},
			onActivated() {
				console.log(333)
				this.$emit('activated', this.character)
			}
		}
	}
</script>