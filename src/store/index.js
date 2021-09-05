import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
Vue.use(axios)

export default new Vuex.Store({
  state: {
    contactList: {},
  },
  mutations: {
    contactList(state, data) {
      state.contactList = data;
    },
  },
  actions: {
    getContactList() {
      return axios.get("https://reqres.in/api/users").then((response) => {
        this.commit("contactList", response.data);
      });
    },
  },
  getters: {
    contactList(state) {
      return state.contactList
    }
  },
});
