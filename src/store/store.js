import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)
/* eslint-disable */
const store = new Vuex.Store({
    state: {
        preLoader: true
    },
    mutations,
    actions
});
export default store