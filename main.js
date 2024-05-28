import App from './App'
import Vuex from 'vuex'
import store from './store/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.use(Vuex)
// Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
// import { createStore } from 'vuex'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app,
	Vuex
  }
}
// #endif