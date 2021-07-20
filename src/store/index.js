import Vue from 'vue'
import Vuex from 'vuex'
import { customRoutes } from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: {
        cachedViews: []
    },
    permission_routers: customRoutes
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
