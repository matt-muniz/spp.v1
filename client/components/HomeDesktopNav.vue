<template>
  <div v-scroll="onScroll">
    <v-navigation-drawer
      transition="slide-x-transition"
      app
      permanent
      width="16rem"
      :color="color"
      fixed
      height="100vh"
    >
      <div class="logo_container">
        <img :src="src" alt="" />
      </div>

      <!-- Social icons -->
      <v-list dense nav class="py-0 text-center">
        <v-row>
          <v-col v-for="(icon, i) in social_icons" :key="i" class="pa-0 pb-6">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-btn icon :elevation="hover ? 9 : 0">
                <v-img :src="icon.name"></v-img>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <!-- Daily admissions -->
        <div class=" py-8">
          <v-list-item-title class="mt-4 title">{{
            daily_admissions.title
          }}</v-list-item-title>
          <v-list-item
            v-for="data in daily_admissions.fields"
            :key="data.title"
            link
          >
            <v-list-item-content>
              <span class="mt-2 caption">{{ data.field1 }}</span>
              <span class="mt-2 caption">{{ data.field2 }}</span>
            </v-list-item-content>
          </v-list-item>
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <nuxt-link to="/admissions">
              <v-btn
                depressed
                color="#00bfff"
                class="white--text font-weight-black mt-4 px-8"
                :elevation="hover ? 8 : 0"
              >
                More
              </v-btn>
            </nuxt-link>
          </v-hover>
        </div>
        <!-- Hours -->
        <div class="py-8">
          <v-list-item-title class="mt-4 title">{{
            hours.title
          }}</v-list-item-title>
          <v-list-item v-for="data in hours.fields" :key="data.title" link>
            <v-list-item-content>
              <span class="mt-2 subtitle-2">{{ data.field1 }}</span>
              <span class="mt-2 caption">{{ data.field2 }}</span>
              <span class="mt-2 subtitle-2">{{ data.field3 }}</span>
              <span class="mt-2 caption">{{ data.field4 }}</span>
              <span class="mt-2 subtitle-2">{{ data.field5 }}</span>
              <span class="mt-2 caption">{{ data.field6 }}</span>
              <span class="mt-2 caption">{{ data.field7 }}</span>
              <span class="mt-2 caption">{{ data.field8 }}</span>
              <span class="mt-2 caption">{{ data.field9 }}</span>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0,
      windowHeight: null,
      src: '/spp_logo.svg',
      social_icons: [{ name: '/facebook.svg' }, { name: '/instagram.svg' }],
      drawer: true,
      daily_admissions: {
        title: 'Daily Admissions',
        fields: [
          { field1: '$12 per child', field2: '$6 each additional sibling' }
        ]
      },
      hours: {
        title: 'Hours',
        fields: [
          {
            field1: 'Monday - Friday',
            field2: '9:00AM - 6:00PM',
            field3: 'Saturday',
            field4: '10:00AM - 5:00PM',
            field5: 'Sunday',
            field6: 'Open for birthday parties only',
            field7: '10:00AM - 12:00PM',
            field8: '1:00PM - 3:00PM',
            field9: '4:00PM - 6:00PM'
          }
        ]
      },
      color: '#DFC7EF'
    }
  },
  mounted() {
    this.setOverflowHidden()
  },
  methods: {
    onScroll(e) {
      const navDrawerContent = document.querySelector(
        '.v-navigation-drawer__content'
      )
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      navDrawerContent.scrollTo(0, this.offsetTop)
    },
    setOverflowHidden() {
      const navDrawerContent = document.querySelector(
        '.v-navigation-drawer__content'
      )
      navDrawerContent.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.logo_container {
  width: 90%;
  margin: 2rem auto;
}
img {
  width: 100%;
}
.social_btn {
  height: 100%;
}
.social_btn img {
  height: 30px;
}
.v-list-item__title {
  color: #00bfff;
}
.v-navigation-drawer__content {
  background: red;
  overflow-y: hidden;
}
</style>
