// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import App from './App'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueFire);
Vue.use(VueBlu);
// axios.defaults.baseURL = 'http://devjun.soonsoft.co.kr/src/vue_test_api.php';
// Vue.prototype.$http = axios;

// Vue.use(axios);
router.beforeEach((to, from, next) => {
    store.commit("routeChange", {"loader": "start"});
    next();
});
router.afterEach((to,from) => {
   document.title = to.meta.title;
   store.commit("routeChange", {"loader": "end"})
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
