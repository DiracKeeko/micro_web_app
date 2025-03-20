import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {};

const state = {
  menuArr: []
};

const getters = {};

const mutations = {
  CLEAR_STATE(s) {
    const i = state();
    Object.keys(i).forEach((k) => {
      s[k] = i[k];
    });
  },
  setMenuArr(state, list) {
    state.menuArr = list;
  }
};

const actions = {
  clearAllState({ commit }) {
    commit("CLEAR_STATE");
    Object.keys(modules).forEach((i) => commit(`${i}/CLEAR_STATE`));
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
