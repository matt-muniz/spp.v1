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
          <v-btn depressed color="rgba(0,0,0,0)" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list :color="color"
          ><v-list-item-group>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              class="text-right"
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
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: '75',
      color: '#c8ecff',
      nuxt: true,
      model: 0,
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
