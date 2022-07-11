<template>
  <div class="white-bg page-wrapper">
    <div class="w-100 page-header d-flex flex-column align-center justify-end px-4">
      <v-btn
        rounded="pill"
        elevation="0"
        class="white primary--text text-none"
      >
        Health & Care
      </v-btn>
      <h1 class="text-center white--text my-4">The Top 25 Bike Stores in Toronto by Neighbourhood</h1>
      <div class="article-contact mb-4">
        <div class="article-phone d-flex">
          <v-icon>mdi-account-outline</v-icon>
          Jack Wilson
        </div>
        <div class="article-city d-flex">
          <v-icon>mdi-calendar</v-icon>
          {{ '2022-04-07T07:17:30.122Z' | datefilter }}
        </div>
      </div>
    </div>
    <v-container class="pt-16 new-container">
      <v-row>
        <v-col cols="12">
          <p>
            Dishes are loosely based on Jewish cooking from the Middle East and Europe. Loosely, as a ‘Russian salad’ wouldn’t be recognised by its creator, Belgian chef Lucien Olivier, or many of his antecedents. Instead, whole green beans, large chunks of carrot, peas and potatoes were very lightly dressed with mayonnaise, and all the better for it.
            <br><br>
            The Amrutha Lounge means port in the Turkish language, however the restaurant opens its doors to all aspects of the Mediterranean kitchen. The kitchen will be mostly focused on Mediterranean food; the owners of the restaurant are young professional chefs who can bring new, exciting tastes to Angel, Islington which will show through in the quality of food they prepare
          </p>

          <p class="text-center font-weight-bold">
            Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
          </p>
          <p class="text-center font-weight-medium">Luis Pickford</p>

          <p>
            Cras orci condimentum feugiat proin tellus erat aenean scelerisque urna. Tortor turpis et enim scelerisque scelerisque nec. Auctor lacus eget consequat sit justo metus id. Id donec pellentesque nullam dolor quam. Aliquet turpis augue purus sed egestas euismod nulla.
          </p>

          <img src="@/assets/blog/img.png" class="my-10" />

          <p class="font-weight-bold">Requirements</p>
          <ul>
            <li>
              We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.
            </li>
            <li>
              A computer with a good internet connection.
            </li>
            <li>
              Adobe Photoshop (OPTIONAL)
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          class="d-flex mt-6"
        >
          <div>
            <v-btn
              icon
              :width="45"
              :height="45"
              class="mr-2 grey--text"
            >
              <v-icon>
                mdi-tray-arrow-up
              </v-icon>
            </v-btn>
            Share Post
          </div>
          <v-spacer />
          <div>
            <v-chip
              v-for="(tag, index) in tags"
              :key="index"
              class="ma-1 px-5"
              outlined
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-col>
        <v-col cols="12">
          <v-divider></v-divider>
          <div class="my-12 d-flex">
            <div>
              <span
                class="blue--text mb-0"
                aria-controls
                @click="prevPost"
              >
                <v-icon color="blue">mdi-chevron-left</v-icon>
                Previous Post
              </span>
              <p class="my-0">Given Set was without from god divide rule Hath</p>
            </div>
            <v-spacer />
            <div class="text-right">
              <span
                class="blue--text mb-0"
                aria-controls
                @click="nextPost"
              >
                Next Post
                <v-icon color="blue">mdi-chevron-right</v-icon>
              </span>
              <p class="my-0">Tree earth fowl given moveth deep lesser After</p>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="pt-12">
            <p>14 Reviews</p>
            <BlogReview
              v-for="(item, index) in articleReviews"
              :key="index"
              :item="item"
            />
          </div>
        </v-col>
        <v-col cols="12">
          <v-card class="filter-form">
            <p>Add a review</p>
            <v-form>
              <v-text-field
                v-model="form.name"
                placeholder="Name"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                placeholder="Email"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5"
              ></v-text-field>
              <v-textarea
                name="message"
                placeholder="Message"
                v-model="form.message"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5"
              ></v-textarea>
              <v-btn
                color="primary"
                class="text-none body-1 mt-9"
                :height="55"
                :width="300"
              >
                Send Your Review
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BlogReview from '@/components/BlogReview'
import { articleReviews } from '@/data/blog'

export default {
  name: 'BlogDetail',

  components: {
    BlogReview
  },

  data () {
    return {
      articleId: null,
      form: {
        name: null,
        email: null,
        message: null
      },
      currentPage: 1,
      itemsPerPage: 4,
      tags: ['Travelling', 'Art', 'Vacation', 'Tourism', 'Culture', 'Lifestyle'],
      articleReviews: articleReviews
    }
  },

  methods: {
    resetFilters () {
      //
    },

    prevPost () {
      if (this.articleId) {
        // prev post
      }
    },

    nextPost () {
      if (this.articleId) {
        // next post
      }
    }
  },

  mounted () {
    this.articleId = this.$route.params.id
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: url('../assets/blog/blog_single.png'), #1D293E;
  background-position: center;
  background-repeat: no-repeat;
  height: 550px;

  h1 {
    font-size: 30px;
    line-height: 43px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
  }
}

.new-container {
  max-width: 771px;
}

.filter-form {
  background: #F4F4F4;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 8px;

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #222222;
  }

  .category-list {
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
    color: #717171;
  }
}

.filter-tag {
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #717171;
}

.article-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: white;

  .v-icon {
    margin-right: 0.5rem;
    color: white;
  }
}
</style>
