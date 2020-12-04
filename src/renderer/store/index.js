import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import common from './modules/common'
// import { createPersistedState, createSharedMutations } from 'vuex-electron'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common
  },
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  // strict: process.env.NODE_ENV !== 'production',
  getters
})
export default store
