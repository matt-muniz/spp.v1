import calendar from './calendar'
export default {
  namespaced: true,
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
        name: 'party',
        start: '2020-04-03',
        details: 'Birthday party',
        time: '1',
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
    ]
  }),
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    calendar
  }
}
