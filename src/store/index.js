import Vue from 'vue'
import Vuex from 'vuex'
import { menuList } from '../router/modules/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsView: {
        cachedViews: []
    },
    permission_routers: menuList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
