/**
 * @비동기_방식
 */
let actions = {
    getApi(context,payLoad) {
        context.commit('getApi',payLoad)
    }
}
export default actions