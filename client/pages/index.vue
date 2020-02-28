<template>
  <v-container>
    {{ msg }}
  </v-container>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import { setLayout } from '../main'
export default {
  layout() {
    // eslint-disable-next-line
    console.log(isMobile)
    return setLayout(isMobile)
  },
  data() {
    return {
      msg: isMobile ? 'mobile' : 'non_mobile'
    }
  },
  created() {
    // setLayout()
  }
}
</script>

<style scoped></style>
