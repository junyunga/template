import Vue from 'vue'
import Router from 'vue-router'
import MainVue from '../main.vue'
import Index from '../components/pages/index'
import EmployeeManagement from '../components/pages/employee_management';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainVue',
            component: MainVue,
            meta: {
                title: '메인'
            },

            children: [
                {
                    path: '',
                    name: 'index',
                    component: Index,
                    meta: {
                        title: '메인2'
                    }
                },
                {
                    path: '/M0001',
                    name: 'M0001',
                    component: EmployeeManagement,
                    meta: {
                        title: '사원관리'
                    }
                }
            ]
        }
    ]
})
