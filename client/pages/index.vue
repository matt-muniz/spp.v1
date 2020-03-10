<template>
  <!-- eslint-disable -->
  <v-container v-resize="onResize">
    <!-- Hero section -->
    <div class="hero ">
      <v-row>
        <v-col cols="12">
          <v-row :style="{ height: heroHeight, width: width }" class="mx-auto">
            <v-img src="/bg.jpg" height="100%">
              <v-row justify="center" align="center" style="height: 100%">
                <div class="hero_title text-center">
                  <img src="/title.svg" alt="" />
                </div>
              </v-row>
            </v-img>
          </v-row>
          <!-- Quote -->
          <v-row justify="center" align="center">
            <v-card
              class="text-center my-md-10 mb-sm-10 my-5"
              outlined
              width="80%"
              max-width="500"
              color="#f8f8f8"
            >
              <div class="quote caption">
                <p>
                  "Play is often talked about as if it were a relief from
                  serious learning.
                </p>
                <p>But for children play is serious learning.</p>
                <p>Play is really the work of childhood."</p>
                <p>-Fred Rodgers</p>
              </div>
            </v-card>
          </v-row>
          <!-- Status -->
          <v-row justify="center" align="center" class="status">
            <v-col cols="10" xl="4" sm="6" class="text-center">
              <p class="lg-title">
                Need a babysitter? We have drop off babysitting services for
                your convenience. Call today and let your child enjoy playing at
                Serendipity's Playhouse and you can enjoy some child free time.
                Call today 978-283-4335
              </p>
            </v-col>
          </v-row>
          <!-- Facebook cta -->
          <v-row justify="center" align="center">
            <v-col
              md="4"
              sm="12"
              class="text-center font-weight-black body-2"
              style="color: #3b5998"
            >
              <p>Follow us on Facebook</p>
              <p>For more Updates!</p>
            </v-col>
          </v-row>
          <!-- Video -->
          <v-row justify="center" align="center">
            <video
              src="../static/spp.mp4"
              style="max-width:500px; width: 80%"
              class="mx-auto"
              controls
            ></video>
          </v-row>
          <v-row justify="center" align="center">
            <v-col cols="12" class="text-center">
              <p>The Meaning of Serendipity:</p>
              <p>Looking for something and finding something even better</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!-- Birthday -->
    <div v-for="(item, i) in sectionItems" :key="i" class="birthday my-10">
      <v-card class="mx-auto text-center text-xl-left" :width="width" flat>
        <v-img
          class="light-blue lighten-2"
          :height="sectionLabel"
          :src="item.imgUrl"
        >
          <v-row justify="center" align="center" style="height: 100%">
            <v-card-title
              style="color: white"
              class="responsiveText font-weight-black"
              >{{ item.title }}</v-card-title
            >
          </v-row>
        </v-img>
        <v-row class="my-5 my-sm-10">
          <v-col>
            <v-row justify="center" align="center">
              <v-col cols="12" xl="6">
                <v-card-text v-if="item.listItems" class="text--primary">
                  <div
                    class="listItems"
                    v-for="(listItem, j) in item.listItems"
                    :key="j"
                  >
                    <p>{{ listItem.list_1 }}</p>
                    <p>{{ listItem.list_2 }}</p>
                    <p>{{ listItem.list_3 }}</p>
                    <p>{{ listItem.list_4 }}</p>
                    <p>{{ listItem.list_5 }}</p>
                  </div>
                </v-card-text>
                <v-card-text v-if="item.text" class="text--primary">
                  <v-col xl="12" cols="11" sm="6" class="pa-0 mx-auto">
                    <p>
                      {{ item.text }}
                    </p>
                    <p class="mt-2">{{ item.text_2 }}</p>
                  </v-col>
                </v-card-text>
              </v-col>
              <v-col cols="8" sm="4" xl="4">
                <!-- slideshow -->
                <div v-if="item.items">
                  <v-carousel hide-delimiters :height="heroHeight">
                    <v-carousel-item
                      v-for="(item, i) in item.items"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </div>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-btn block color="light-blue lighten-3" text>
                More
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!-- Calendar -->
    <v-row :style="{ width: width }" class="mx-auto">
      <Calendar />
    </v-row>
  </v-container>
</template>

<script>
import Calendar from '../components/Calendar'

export default {
  layout: 'home',
  components: {
    Calendar
  },
  data() {
    return {
      heroHeight: '',
      sectionLabel: '',
      width: '',
      sectionItems: [
        {
          title: '$350 Private Birthday Party Package',
          listItems: [
            {
              list_1: '2 Hours of fun in our playroom',
              list_2: '20 children (additional children $10 each)',
              list_3: '100% private party (Sundays only or after closing)'
            }
          ],
          items: [
            {
              src: '/spp/img3.jpg'
            },
            {
              src: '/spp/img12.jpg'
            },
            {
              src: '/spp/img16.jpg'
            },
            {
              src: '/spp/img19.jpg'
            },
            {
              src: '/spp/img26.jpeg'
            }
          ],
          imgUrl: '/birthdayBg.jpg',
          url: ''
        },
        {
          title: 'Zumbini',
          text:
            "Designed for children 0-4, the Zumbini program combines music, dance and educational tools for 45-minutes of can't-stop, won't-stop bonding and fun.",
          text_2: 'Saturdays at 9am',
          items: [
            {
              src:
                'https://images-na.ssl-images-amazon.com/images/I/81EeySZtmUL._SX300_.jpg'
            },
            {
              src:
                'https://i.pinimg.com/originals/3d/3b/56/3d3b56b4c5dfcd665925fb2d82945db7.jpg'
            },
            {
              src:
                'https://www.dayton.com/rf/image_inline/Pub/p11/Dayton/2020/01/20/Images/newsEngin.25168056_Zumbini1.jpg'
            }
          ],
          imgUrl: '/zumbiniBg.jpg',
          url: ''
        },
        {
          title: 'Additional Information',
          listItems: [
            {
              list_1: '20% Off Daily Admission for Active Police,',
              list_2: 'Fire and Us Military',
              list_3: '(must have valid id)',
              list_4: 'Grandparents Day every Monday, 10% Off',
              list_5: 'Socks are Required for Children and Adults'
            }
          ],
          items: [
            {
              src: '/spp/img27.jpeg'
            },
            {
              src: '/spp/img28.jpeg'
            },
            {
              src: '/spp/img32.jpg'
            },
            {
              src: '/spp/img34.jpg'
            }
          ],
          url: ''
        }
      ],
      focus: '',
      selectedOpen: false,
      selectedEvent: {},
      selectedElement: null,
      events: [{ name: 'party', start: '2020-03-22' }]
    }
  },
  mounted() {},
  methods: {
    showEvent() {},
    onResize() {
      const responsiveText = document.querySelectorAll('.responsiveText')
      responsiveText.forEach((item) => {
        const text =
          window.innerWidth > 750
            ? item.classList.add('display-1')
            : item.classList.remove('display-1')
        return text
      })

      const heroHeight =
        window.innerWidth < 750
          ? (this.heroHeight = '140px')
          : (this.heroHeight = '200px')
      const sectionLabel =
        window.innerWidth < 750
          ? (this.sectionLabel = '100px')
          : (this.sectionLabel = '150px')
      const width =
        window.innerWidth < 1300
          ? (this.width = '100%')
          : (this.width = '1000px')
      return {
        heroHeight,
        sectionLabel,
        width,
        responsiveText
      }
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.hero_title {
  width: 300px;
}
.quote {
  color: #808080;
  border: 1px solid silver;
}
.listItems p {
  margin-top: 0.5rem;
}
@media (min-width: 750px) {
  .hero_title {
    width: 400px;
  }
}
</style>
