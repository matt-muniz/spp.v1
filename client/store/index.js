export default {
  state: () => ({
    mobile: ''
  }),
  getters: {
    isMobile: (state) => state.mobile
  },
  actions: {
    update_mobile({ commit, state }, isMobile) {
      commit('UPDATE_MOBILE', isMobile)
      window.addEventListener('resize', () => {
        if (window.innerWidth < 750) {
          commit('UPDATE_MOBILE', isMobile)
        } else {
          commit('UPDATE_MOBILE', !isMobile)
        }
      })
    }
  },
  mutations: {
    UPDATE_MOBILE(state, isMobile) {
      state.mobile = isMobile
    }
  }
}
