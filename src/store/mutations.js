/**
 * @동기_방식
 */
let mutations = {
    routeChange(state,payLoad) {
        if(payLoad.loader === 'start') {
            state.preLoader = true;
        }else if(payLoad.loader === 'end') {
            state.preLoader = false;
        }
    }
}
export default mutations