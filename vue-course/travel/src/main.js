import Vue from 'vue'
import App from './App.vue'
//import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import routers from './routers.js'
import store from './store'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


Vue.config.productionTip = false
//fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

const router=new VueRouter({
	mode:'history',
	routes: routers,
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})

new Vue({
	el:"#app",
	router,
	store,
  render: h => h(App)
})
