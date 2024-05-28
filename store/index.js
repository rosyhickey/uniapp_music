// store/index.js  
// import { createStore } from 'vuex';  
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({  
  state: {  
	isLogin:false,
	zuijinSongs:[],
	xihuanSongs:[],
	shoucangSongs:[],
	musicstate:false,
	username:'',
	password:'',
	img:'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/33ef290e243791580094105690/KbIX8fifQfsA.png',
  },  
  mutations: {  
  
  },  
  actions: {  
 
  },  
  getters: {  
	isLogin(){
		return state.isLogin
	}
  }  
})