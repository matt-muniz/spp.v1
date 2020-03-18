export default {
  state: () => ({
    events: []
  }),
  getters: {},
  actions: {
    fetchRootState({ dispatch, commit, rootState }) {
      commit('SET_EVENT_STATE', rootState)
    },
    setColor({ commit, getters }) {
      commit('SET_PARTY_COLOR')
    }
  },
  mutations: {
    SET_EVENT_STATE(state, payload) {
      state.events = payload.events
      // console.log(state.events)
    },
    SET_PARTY_COLOR(state) {
      state.events.filter((event) =>
        event.name === 'party' && event.color === ''
          ? (event.color = '#DFC7EF')
          : event.name !== 'party' && event.color === ''
          ? (event.color = '#4DC0FE')
          : event.color
      )
    }
  }
}
