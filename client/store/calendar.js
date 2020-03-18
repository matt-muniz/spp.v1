export default {
  state: () => ({
    events: [
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '13',
        color: '',
        isExtended: false
      },
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '16',
        color: '',
        isExtended: false
      },
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '10',
        color: '',
        isExtended: false
      },
      {
        name: 'event',
        start: '2020-03-20',
        details: 'Birthday party',
        time: '16',
        color: '',
        isExtended: true
      },
      {
        name: 'party',
        start: '2020-03-20',
        details: 'Birthday party',
        time: '10',
        color: '',
        isExtended: true
      },
      {
        name: 'party',
        start: '2020-04-20',
        details: 'Birthday party',
        time: '10',
        color: '',
        isExtended: true
      },
      {
        name: 'event',
        start: '2020-03-15',
        details: 'Birthday party',
        time: '10',
        color: '',
        isExtended: true
      }
    ],
    time: []
  }),
  getters: {},
  actions: {
    setColor({ commit, getters }) {
      commit('SET_PARTY_COLOR')
    }
  },
  mutations: {
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
