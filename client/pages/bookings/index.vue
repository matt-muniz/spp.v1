<template>
  <v-row justify="center">
    <v-col cols="11" sm="6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-select
          :items="items"
          label="What would you like to bookd today?"
          flat
          solo
          background-color="#C8ECFF"
        ></v-select>

        <v-select
          :items="items"
          label="Choose a time"
          flat
          solo
          background-color="#C8ECFF"
        ></v-select>

        <v-row>
          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="checkbox"
              value="1"
              :label="`Checkbox 1: ${checkbox.toString()}`"
              @change="showCharOne"
            ></v-checkbox>
            <div v-if="hidden1">
              <v-checkbox
                v-model="checkbox"
                value="50"
                :label="`15 min: ${checkbox.toString()}`"
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox"
                value="100"
                :label="`30 min: ${checkbox.toString()}`"
              ></v-checkbox>
            </div>
            <v-checkbox
              v-model="checkbox"
              value="2"
              :label="`Checkbox 1: ${checkbox.toString()}`"
              @change="showBothCharSelect"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              value="80"
              :label="`15 min: ${checkbox.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              value="160"
              :label="`30 min: ${checkbox.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox"
              value="3"
              :label="`Checkbox 1: ${checkbox.toString()}`"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="checkbox"
              value="4"
              :label="`Checkbox 1: ${checkbox.toString()}`"
            ></v-checkbox
            ><v-checkbox
              v-model="checkbox"
              value="5"
              :label="`Checkbox 1: ${checkbox.toString()}`"
            ></v-checkbox
            ><v-checkbox
              v-model="checkbox"
              value="6"
              :label="`Checkbox 1: ${checkbox.toString()}`"
            ></v-checkbox>
          </v-col>
        </v-row>

        <div v-if="hidden1">
          <v-select
            :items="items"
            label="Select your character - 1"
            flat
            solo
            background-color="#C8ECFF"
          ></v-select>
        </div>
        <div v-if="hidden2">
          <v-select
            :items="items"
            label="Select your character - 2"
            flat
            solo
            background-color="#C8ECFF"
          ></v-select>
        </div>
        <v-select
          :items="items"
          label="Number of children attending"
          flat
          solo
          background-color="#C8ECFF"
        ></v-select>
        <v-select
          :items="items"
          label="Your child's age"
          flat
          solo
          background-color="#C8ECFF"
        ></v-select>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Bookings',
  layout: 'navbar',
  data: () => ({
    valid: true,
    checkbox: [],
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    hidden1: false,
    hidden2: false
  }),
  methods: {
    showCharOne(val) {
      console.log(val.includes())

      if (val.includes() !== -1) {
        console.log('checked')
      } else {
        console.log('unchecked')
      }
    },
    showBothCharSelect() {
      this.hidden1 = !this.hidden1
      this.hidden2 = !this.hidden2
    }
  }
}
</script>
