<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar color="#333" flat></v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          @click:event="showEvent"
        >
        </v-calendar>
        <v-menu v-model="selectedOpen" :activator="selectedElement" offset-x>
          <v-card min-width="350px">
            <v-toolbar color="#333"></v-toolbar>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      focus: '',
      selectedOpen: false,
      selectedEvent: {},
      selectedElement: null,
      events: [{ name: 'party', start: '2020-03-22' }]
    }
  },
  computed: {},
  mounted() {},
  methods: {
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
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
    }
  }
}
</script>
