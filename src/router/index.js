import Vue from 'vue'
import Router from 'vue-router'
import MainVue from '../main.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainVue',
            component: MainVue
        }
    ]
})
