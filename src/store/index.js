/* eslint no-unused-vars: ["error", { "args": "none" }] */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  state: {
    contactList: [],
  },
  mutations: {
    contactList(state, data) {
      state.contactList = data;
    },
    deleteContact(state,id){
      let index = state.contactList.findIndex(contact => contact.id === id);
      state.contactList.splice(index,1)
    }
  },
  actions: {
    getContactList() {
      return axios.get("https://reqres.in/api/users").then((response) => {
        this.commit("contactList", response.data.data);
      });
    },
    deleteContact({commit},id) {
      return axios.delete(`https://reqres.in/api/users/${id}`).then(response => {
        if(response.status === 204){
          commit("deleteContact", id)
        }
        return response
      })
    }
  },
  getters: {
    contactList(state) {
      return state.contactList;
    },
  }
});
