// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import VueDraggableResizable from './components/vue-draggable-resizable'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('VueDraggableResizable', VueDraggableResizable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
