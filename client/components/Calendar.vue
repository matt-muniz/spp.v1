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
      bookingTitle: ''
    }
  },
  computed: {
    ...mapState('calendar', ['events'])
  },
  mounted() {
    this.fetchEvents()
  },

  methods: {
    toBookingForm({ date }) {
      this.$router.push({ name: 'bookings', params: { input: date } })
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = this.setEventData(event)
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
    fetchEvents() {
      this.events.forEach((event) => {
        this.eventsData.push({
          name: event.time ? `${event.time} ${event.name}` : `${event.name}`,
          start: event.start,
          details: event.details,
          time: '1',
          color: event.color ? event.color : '#DFC7EF',
          isExtended: event.isExtended
        })
      })
    },
    getEventColor(event) {
      return event.color
    },
    setEventData(event) {
      const setEvent = {
        name: event.name,
        start: moment(event.start).format('MM/DD/YYYY'),
        details: event.details,
        time: event.isExtended
          ? `${event.time} - ${event.time + 2}`
          : `${event.time} - ${event.time + 3}`
      }
      return setEvent
    }
  }
}
</script>
