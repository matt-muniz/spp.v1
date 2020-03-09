<template>
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
      <v-card class="mx-auto" max-width="400" flat>
        <v-img class="white--text align-end" height="200px" :src="item.imgUrl">
          <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
          <h1 style="height: 100%">Hello</h1>
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>
            Share
          </v-btn>

          <v-btn color="orange" text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      heroHeight: '',
      sectionLabel: '',
      width: '',
      sectionItems: [
        {
          title: '$350 Private Birthday Party Package',
          listItems: [
            { list_1: 'list one', list_2: 'list two', list_3: 'list three' }
          ],
          imgUrl: '/birthday_bg.jpg'
        },
        { title: 'two', text: 'some text', imgUrl: '' },
        {
          title: 'three',
          listItems: [{ list_1: 'list_one', list_2: 'list two' }],
          imgUrl: ''
        }
      ]
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize() {
      const heroHeight =
        window.innerWidth < 750
          ? (this.heroHeight = '140px')
          : (this.heroHeight = '200px')
      const sectionLabel =
        window.innerWidth < 750
          ? (this.sectionLabel = '100px')
          : (this.sectionLabel = '150px')
      const width =
        window.innerWidth < 900
          ? (this.width = '100%')
          : (this.width = '1000px')
      return {
        heroHeight,
        sectionLabel,
        width
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
@media (min-width: 750px) {
  .hero_title {
    width: 400px;
  }
}
</style>
