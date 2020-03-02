<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      width="16rem"
      :color="color"
      absolute
      dark
    >
      <div class="logo_container">
        <img :src="src" alt="" />
      </div>
      <v-list dense nav class="py-0 text-center">
        <v-list-item style="width: 6rem; margin: auto;">
          <v-list-item-content style="margin-right: 1rem">
            <v-btn icon>
              <img :src="facebook" alt="" />
            </v-btn>
          </v-list-item-content>
          <v-list-item-content>
            <v-btn icon>
              <img :src="instagram" alt="" />
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: '/spp_logo.svg',
      facebook: '/facebook.svg',
      instagram: '/instagram.svg',
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ],
      color: 'primary'
    }
  }
}
</script>

<style scoped>
.logo_container {
  width: 90%;
  margin: 2rem auto;
}
img {
  width: 100%;
}
</style>
