<template>
  <v-app>
    <MobileNavbar v-if="mobile" />
    <HomeDesktopNav v-else />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable */
import { isMobile } from 'mobile-device-detect'
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
    this.update_mobile(isMobile)
    window.addEventListener('resize', () => {
      this.mobile = this.isMobile
    })
  }
}
</script>

<style></style>
