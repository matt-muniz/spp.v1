export default {
  state: () => ({
    events: [
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '13',
        color: 'red',
        isExtended: false
      },
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '16',
        color: 'red',
        isExtended: false
      },
      {
        name: 'party',
        start: '2020-03-22',
        details: 'Birthday party',
        time: '10',
        color: 'red',
        isExtended: false
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
        start: '2020-03-15',
        details: 'Birthday party',
        time: '10',
        color: '',
        isExtended: true
      }
    ],
    time: []
  }),
  getters: {
    getTime: (state) => {
      return state.events.forEach((item) => console.log(item.time))
    }
  },
  actions: {},
  mutations: {}
}
