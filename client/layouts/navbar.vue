<template>
  <v-app>
    <MobileNavbar v-if="mobile" />
    <DesktopNavbar v-else />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable */

import { isMobile } from 'mobile-device-detect'
import { mapActions, mapGetters } from 'vuex'

import MobileNavbar from '../components/MobileNavbar'
import DesktopNavbar from '../components/DesktopNavbar'
import Footer from '../components/Footer'

export default {
  components: {
    MobileNavbar,
    DesktopNavbar,
    Footer
  },
  data() {
    return {
      mobile: ''
    }
  },
  methods: {
    ...mapActions(['update_mobile'])
  },
  computed: {
    ...mapGetters(['isMobile'])
  },
  mounted() {
    this.update_mobile(isMobile)
    window.addEventListener('resize', () => {
      this.mobile = this.isMobile
    })
  }
}
</script>

<style></style>
