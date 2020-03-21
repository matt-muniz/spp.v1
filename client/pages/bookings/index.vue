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
            <!-- Get Char Time -->
            <v-checkbox
              :label="`Visit from 1 character: ${charTime}`"
              :disabled="disableOneCharCheckbox"
              multiple
              @change="showCharOne"
            ></v-checkbox>
            <div v-if="showTimeCharOne">
              <v-checkbox
                v-model="charTime"
                :value="v1"
                :disabled="disable15MinCheckbox"
                :label="`15 minute rental: ${charTime}`"
                @change="disableCheckbox"
              ></v-checkbox>
              <v-checkbox
                v-model="charTime"
                :disabled="disable30MinCheckbox"
                :value="v2"
                :label="`30 minute rental: ${charTime}`"
                @change="disableCheckbox"
              ></v-checkbox>
            </div>

            <v-checkbox
              :disabled="disableTwoCharCheckbox"
              :label="`Visit from 2 characters: ${charTime}`"
              @change="showBothCharSelect"
            ></v-checkbox>
            <div v-if="showTimeCharTwo">
              <v-checkbox
                v-model="charTime"
                :value="v1"
                :disabled="disable15MinCheckbox"
                :label="`15 minute rental: ${charTime}`"
                @change="disableCheckbox"
              ></v-checkbox>
              <v-checkbox
                v-model="charTime"
                :value="v2"
                :disabled="disable30MinCheckbox"
                :label="`30 minute rental: ${charTime}`"
                @change="disableCheckbox"
              ></v-checkbox>
            </div>
            <!-- Get Char Time -->
            <v-checkbox
              v-model="addOns.addHour"
              true-value="100"
              false-value=""
              :label="`Add 1 hour: ${addOns.addHour}`"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="addOns.fullSheetCake"
              true-value="30"
              false-value=""
              :label="`Full sheet of cake: ${addOns.fullSheetCake}`"
            ></v-checkbox
            ><v-checkbox
              v-model="addOns.vanilla"
              :true-value="true"
              false-value=""
              :label="`Vanilla cake: ${addOns.vanilla}`"
            ></v-checkbox
            ><v-checkbox
              v-model="addOns.chocolate"
              :true-value="true"
              false-value=""
              :label="`Chocolate cake: ${addOns.chocolate}`"
            ></v-checkbox>
          </v-col>
        </v-row>

        <div v-if="showOneCharSelect">
          <v-select
            :items="items"
            label="Select your character - 1"
            flat
            solo
            background-color="#C8ECFF"
          ></v-select>
        </div>
        <div v-if="showTwoCharSelect">
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
    charTime: [],
    addOns: {
      addHour: '',
      fullSheetCake: '',
      vanilla: '',
      chocolate: '',
      cottonCandy: '',
      popcorn: '',
      snacks: '',
      jape: '',
      zumbini: '',
      pinata: ''
    },
    addHour: '',
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    showOneCharSelect: false,
    showTwoCharSelect: false,
    showTimeCharOne: false,
    showTimeCharTwo: false,
    v1: '',
    v2: '',
    disableTwoCharCheckbox: false,
    disableOneCharCheckbox: false,
    disable15MinCheckbox: false,
    disable30MinCheckbox: false
  }),
  computed: {},
  methods: {
    showCharOne(val) {
      this.showOneCharSelect = !this.showOneCharSelect
      this.showTimeCharOne = !this.showTimeCharOne

      this.filterValues('50', '100')
      this.disableTwoCharCheckbox = !this.disableTwoCharCheckbox
    },
    showBothCharSelect() {
      this.showTwoCharSelect = !this.showTwoCharSelect
      this.showOneCharSelect = !this.showOneCharSelect
      this.showTimeCharTwo = !this.showTimeCharTwo

      this.filterValues('80', '160')
      this.disableOneCharCheckbox = !this.disableOneCharCheckbox
    },
    filterValues(a, b) {
      this.showOneCharSelect ? (this.v1 = a) : (this.v1 = '')
      this.showOneCharSelect ? (this.v2 = b) : (this.v1 = '')
      const removeV1V2 = this.charTime.filter(
        (item) => item !== a && item !== b
      )
      this.disable15MinCheckbox = false
      this.disable30MinCheckbox = false
      this.charTime = removeV1V2
    },
    disableCheckbox() {
      const disable30Min = this.charTime.filter((item) => {
        item === '50' || item === '80'
          ? (this.disable30MinCheckbox = true)
          : (this.disable30MinCheckbox = false)
      })
      const disable15Min = this.charTime.filter((item) =>
        item === '100' || item === '160'
          ? (this.disable15MinCheckbox = true)
          : (this.disable15MinCheckbox = false)
      )
      return {
        disable30Min,
        disable15Min
      }
    }
  }
}
</script>
