import App from './App'
import store from '@/store/index.js'
import Vuex from 'vuex'

// #ifndef VUE3
import Vue from 'vue'
Vue.use(Vuex)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
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