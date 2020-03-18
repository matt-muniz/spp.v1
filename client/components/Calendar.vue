<template>
  <v-row class="fill-height ">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          class="black--white"
          color="#5DB7DE"
          :events="eventsData"
          :event-color="getEventColor"
          @click:event="showEvent"
          @click:date="toBookingForm"
          @change="formatMonthYear"
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
import { mapState, mapActions } from 'vuex'

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
      testArr: [],
      start: null,
      end: null
    }
  },
  computed: {
    ...mapState('calendar', ['events', 'time']),
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)

      const startYear = start.year

      return `${startMonth} ${startYear}`
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      })
    }
  },
  mounted() {
    this.fetchEvents()
    this.$refs.calendar.checkChange()
  },

  methods: {
    ...mapActions('calendar', ['setColor']),
    fetchEvents() {
      const sortedEvents = [...this.events].sort((a, b) => a.time - b.time)

      sortedEvents.forEach((event) => {
        this.setColor()
        const timeString = `${this.formatTime(event)} ${event.name}`

        this.eventsData.push({
          name: event.time ? timeString : `${event.name}`,
          start: event.start,
          details: event.details ? event.details : '',
          color: event.color,
          isExtended: event.isExtended
        })
      })
    },
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
    formatMonthYear({ start, end }) {
      this.start = start
      this.end = end
    },

    getEventColor(event) {
      return event.color
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    }
  }
}
</script>
