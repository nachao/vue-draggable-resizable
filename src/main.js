// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import lodash from 'lodash/lodash'
import App from './App'
import VueDraggableResizable from './components/vue-draggable-resizable'
import { pluginActionScope } from './utils/plugin'

Vue.use(ElementUI)
Vue.config.productionTip = false

for (let k in VueDraggableResizable) {
	if (pluginActionScope[k]) {
		Object.assign(VueDraggableResizable[k], pluginActionScope[k])
	}
}
console.log(444, VueDraggableResizable)

Vue.component('VueDraggableResizable', VueDraggableResizable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
