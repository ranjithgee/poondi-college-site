import { createStore } from 'vuex'
import json from '../JSON/mock.json'

export default createStore({
  state: {
    data:json,
    siteUrl:window.location.origin
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
