export const state = () => ({
  isActive: true
})

export const mutations = {
  IS_ACTIVE(state, payload) {
    state.isActive = payload
  }
}

export const actions = {
  activeClass({ commit }) {
    commit('IS_ACTIVE')
  }
}
