import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations'
import Actions from './actions'


Vue.use(Vuex)
/* eslint-disable */
export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    Mutations,
    Actions
});