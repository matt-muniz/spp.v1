<template>
  <div>
    <v-app-bar fixed flat app :height="height" :color="color">
      <div class="logo_container">
        <img :src="src" alt="" />
      </div>
      <v-spacer />
      <v-menu
        attach=".v-toolbar__content"
        absolute
        transition="slide-y-transition"
        min-width="100%"
        :nudge-bottom="height"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click.stop="rightDrawer = !rightDrawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list :color="color">
          <!-- eslint-disable-next-line -->
          <v-list-item class="text-right" v-for="(item, i) in items" :key="i">
            <v-list-item-title>
              <nuxt-link :to="item.to">
                {{ item.title }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: '75',
      color: 'rgba(0,191,255, 0.3)',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Us',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Zumbini',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Birthday Parties',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Daily Admissions',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'In The News',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      src: '/spp_logo.svg'
    }
  }
}
</script>

<style scoped>
.logo_container {
  height: 100%;
}
img {
  height: 100%;
}
a {
  text-decoration: none;
  color: rgba(152, 58, 204, 0.3);
}
.active {
  color: green;
}
</style>
