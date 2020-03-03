<template>
  <div>
    <v-app-bar fixed flat app :height="height" :color="color">
      <div class="logo_container">
        <img :src="src" alt="Serendipity's Playhouse" />
      </div>
      <v-spacer />
      <v-list :color="color" flat
        ><v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            class="text-right d-inline-flex"
            active-class="highlighted"
            nuxt
            :to="item.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
          title: 'Home',
          to: '/'
        },
        {
          title: 'About Us',
          to: '/about-us'
        },
        {
          title: 'Zumbini',
          to: '/zumbini'
        },
        {
          title: 'Birthday Parties',
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

.v-list-item__content .v-list-item__title {
  color: rgba(152, 58, 204, 0.5);
  overflow: visible;
  position: relative;
}
.v-list-item__title:hover {
  color: rgba(152, 58, 204, 1);
}
.highlighted .v-list-item__title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  border: 2px solid #7bc7f0;
  z-index: 100;
  animation: slide 2s forwards;
}
@keyframes slide {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>
