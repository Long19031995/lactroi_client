import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './routes'
import App from './App.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({
    routes: Routes
})

router.beforeEach(function (to, from, next) {
	if (to.path === '/') {
		next({
			path: '/filmnew'
		})		
	}
	next()
})

new Vue({
    el: '#root',
    router: router,
    render: h => h(App)
})