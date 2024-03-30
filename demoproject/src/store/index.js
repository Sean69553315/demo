import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    jia(context,value){
        console.log('jia-action')
        context.commit('JIA', value)
    },
    jian(context,value){
        console.log('jian-action')
        context.commit('JIAN', value)
    },
    // odd(context,value){
    //     console.log('odd-action')
    //     context.commit('ODD', value)
    // },
}
const mutations = {
    JIA(state,value){
        console.log('jia-mutation')
        state.sum  += value 
    },
    JIAN(state,value){
        console.log('jian-mutation')
        state.sum -= value 
    },
    // ODD(state,value){
    //     console.log('odd-mutation')
    //     state.sum -= value 
    // },
}
const state = {
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})