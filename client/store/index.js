export default {
  state: () => ({
    mobile: ''
  }),
  getters: {
    isMobile: (state) => state.mobile
  },
  actions: {
    update_mobile({ commit }, payload) {
      commit('UPDATE_MOBILE', payload)
      console.log(payload)
    }
  },
  mutations: {
    UPDATE_MOBILE(state, isMobile) {
      state.mobile = isMobile
    }
  }
}
