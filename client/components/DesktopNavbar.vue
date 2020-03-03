<template>
  <div>
    <v-app-bar fixed flat app :height="height" :color="color">
      <div class="logo_container">
        <img :src="src" alt="" />
      </div>
      <v-spacer />
      <v-row justify="end">
        <nuxt-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-col>
            <span>{{ item.title }}</span>
          </v-col>
        </nuxt-link>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: '100',
      color: '#c8ecff',
      items: [
        {
          title: 'Home Desktop',
          to: '/'
        },
        {
          title: 'About Us Desktop',
          to: '/about-us'
        },
        {
          title: 'Zumbini Desktop',
          to: '/zumbini'
        },
        {
          title: 'Birthday Parties Desktop',
          to: '/parties'
        },
        {
          title: 'Daily Admissions',
          to: '/admissions'
        },
        {
          title: 'In The News',
          to: '/in-the-news'
        }
      ],
      src: '/spp_logo.svg'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.logo_container {
  height: 100%;
}
img {
  height: 100%;
}
.v-list-item__title {
  color: rgba(152, 58, 204, 0.5);
}
.v-menu__content {
  box-shadow: none;
}
.highlighted {
  background: #c8ecff;
}
.highlighted .v-list-item__title {
  color: rgba(152, 58, 204, 1);
}
</style>
