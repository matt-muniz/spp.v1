<template>
  <v-row class="fill-height ">
    <v-col>
      <v-sheet height="64">
        <v-toolbar color="#333" flat></v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="eventsData"
          :now="today"
          :event-color="getEventColor"
          @click:event="showEvent"
          @click:date="toBookingForm"
        >
        </v-calendar>
        <v-menu v-model="selectedOpen" :activator="selectedElement" offset-y>
          <v-card min-width="350px">
            <v-toolbar>
              <v-toolbar-title>{{ selectedEvent.name }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <span> {{ selectedEvent.start }}</span>
            </v-card-text>
            <v-card-text>
              <span> {{ selectedEvent.details }}</span>
            </v-card-text>
          </v-card>
        </v-menu>
        <v-menu v-model="bookingForm" min-width="100%" offset-y>
          <v-card min-width="350px">
            <v-toolbar>
              <v-toolbar-title>home</v-toolbar-title>
            </v-toolbar>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      focus: '',
      selectedOpen: false,
      selectedEvent: {},
      selectedElement: null,
      bookingFromCard: null,
      eventsData: [],
      bookingForm: false,
      bookingTitle: '',
      testArr: []
    }
  },
  computed: {
    ...mapState('calendar', ['events', 'time'])
  },
  mounted() {
    this.fetchEvents()
  },

  methods: {
    toBookingForm({ date }) {
      this.$router.push({ name: 'bookings', params: { input: date } })
    },
    showEvent({ nativeEvent, event }) {
      const setEvent = {
        name: event.name,
        start: moment(event.start).format('MM/DD/YYYY'),
        details: event.details
      }
      const open = () => {
        this.selectedEvent = setEvent
        this.selectedElement = nativeEvent.target

        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    formatTime(events) {
      const am = 'AM'
      const pm = 'PM'
      let formatTime = ''
      const stringToInt = parseInt(events.time)
      const a = events.isExtended ? `${stringToInt + 3}` : `${stringToInt + 2}`
      const b = a === '12' ? `${am}` : `${pm}`
      const c =
        events.time <= 12 ? `${events.time} ${b}` : `${stringToInt - 12} ${b}`
      const d = a <= 12 ? `${a} ${b}` : `${parseInt(a) - 12} ${b}`
      formatTime = `${c} - ${d}`
      return formatTime
    },
    compare(a, b) {
      const timeA = a.time
      const timeB = b.time

      let comparison = 0

      if (timeA > timeB) {
        comparison = 1
      } else if (timeA < timeB) {
        comparison = -1
      }
      return comparison
    },
    fetchEvents() {
      const sortedEvents = [...this.events].sort(this.compare)
      sortedEvents.forEach((event) => {
        this.eventsData.push({
          name: event.time
            ? `${this.formatTime(event)} ${event.name}`
            : `${event.name}`,
          start: event.start,
          details: event.details,
          color: event.color ? event.color : '#DFC7EF',
          isExtended: event.isExtended
        })
      })
    },
    getEventColor(event) {
      return event.color
    }
  }
}
</script>
