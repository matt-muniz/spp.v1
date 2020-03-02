<template>
  <v-app>
    <MobileNavbar v-if="mobile" />
    <HomeDesktopNav v-else />
    <v-content>
      <nuxt />
      <h1>{{ mobile }}</h1>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable */
// import { isMobile } from 'mobile-device-detect'
import { mapGetters, mapActions } from 'vuex'

import MobileNavbar from '../components/MobileNavbar'
import HomeDesktopNav from '../components/HomeDesktopNav'
import Footer from '../components/Footer'

export default {
  components: {
    MobileNavbar,
    HomeDesktopNav,
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
    this.mobile = this.isMobile

    window.addEventListener('resize', () => {
      if (window.innerWidth < 750) {
        this.mobile = this.isMobile

        this.update_mobile(false)
      } else {
        this.mobile = this.isMobile

        this.update_mobile(true)
      }
    })
  }
}
</script>

<style></style>
