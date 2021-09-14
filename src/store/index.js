import { createStore } from 'vuex'


export default createStore({
  state: {
    data:window.location.origin + '/datas.json',
    table:window.location.origin + '/tables.json',
    siteUrl:window.location.origin
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
