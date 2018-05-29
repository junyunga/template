/**
 * @동기_방식
 */
import axios from 'axios'

// axios.defaults.baseURL = 'http://devjun.soonsoft.co.kr/src/vue_test_api.php';
const api = 'http://devjun.soonsoft.co.kr/src/vue_test_api.php/';

let mutations = {
    routeChange(state, payLoad) {
        if (payLoad.loader === 'start') {
            state.preLoader = true;
        } else if (payLoad.loader === 'end') {
            state.preLoader = false;
        }
    },
    getApi(state, payLoad) {
        if (payLoad.request === 'user') {
            axios.get(`${api}`, {
                params: {
                    mode: payLoad.request
                }
            })
                .then(response => {
                    state.user = response.data.user
                })
        }
    },
    postApi(state, payLoad) {
        if (payLoad.request === 'insert') {
            axios.post(`${api}`, {
                params: {
                    mode: payLoad.request,
                    data: payLoad.data
                }
            })
                .then(response => {

                })
        }
    },
    putApi(state, payLoad) {

    },
    deleteApi(state, payLoad) {

    }
}
export default mutations