<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar color="#333" flat></v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar ref="calendar"> </v-calendar>
        <v-menu v-model="selectedOpen" offset-x>
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
    showEvent({ event }) {
      console.log(event)
    }
  }
}
</script>
