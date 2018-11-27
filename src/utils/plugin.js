import lodash from 'lodash/lodash'

export const pluginActionScope = {
	props: {
		scoped: {
			type: String,
			default: ''
		},
		custom: {
			type: Object,
			default: {}
		}
	},
	watch: {
		w (v) {
			this.width = v
		},
		h (v) {
			this.height = v
		},
		x (v) {
			this.left = v
		},
		y (v) {
			this.top = v
		}
	},
	computed: {
		style() {
			return Object.assign({				
				top: this.top + 'px',
				left: this.left + 'px',
				width: this.width + 'px',
				height: this.height + 'px',
				zIndex: this.zIndex,
			}, this.custom)
		}
	}
}