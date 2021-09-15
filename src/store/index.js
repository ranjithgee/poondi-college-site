import { createStore } from 'vuex'
import json from '../JSON/datas.json'
import tables from '../JSON/tables.json'

export default createStore({
  state: {
    data:json,
    table:tables,
    siteUrl:window.location.origin
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
