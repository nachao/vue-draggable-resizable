<template>
	<VueDraggableResizable
		:x="character.x"
		:y="character.y"
		:w="character.w"
		:h="character.h"
		:parent="true"
		:resizable="true"
		:active="active"
		:custom="style"
		scoped="el-container main-container"
		@activated="onActivated"
		@resizestop="onResizstop"
		@dragstop="onDragstop"
		@deactivated="deactivated">
		{{ character.text }}
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
		data () {
			return {
				active: true
			}
		},
		computed: {
			style () {
				let value = {
					color: this.character.fontColor,
					fontSize: this.character.fontSize + 'px',
					backgroundColor: this.character.bgColor,
				}
				if (this.character.borderColor) {
					Object.assign(value, {
						borderWidth: '1px',
						borderColor: this.character.borderColor,
						borderStyle: 'solid',
					})
				}
				return value
			}
		},
		methods: {
			onResizstop(left, top, width, height) {
				console.log(1111, left, top, width, height)
			},
			onDragstop(left, top) {
				console.log(222, left, top)
			},
			onActivated() {
				this.$emit('activated', this.character)
			},
			deactivated () {
				this.$emit('deactivated', this.character)	
			}
		}
	}
</script>