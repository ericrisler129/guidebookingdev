<template>
  <div class="white-bg page-wrapper">
    <div class="w-100 page-header d-flex flex-column align-center justify-center px-4">
      <h1 class="text-center white--text mb-1">Blog</h1>
      <p class="text-center white--text mb-0">Home / Blog</p>
    </div>
    <v-container class="pt-16 new-container">
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col
              cols="12"
              v-for="(item, index) in articles"
              :key="index"
            >
              <BlogArticleCard :item="item" />
            </v-col>
            <v-col cols="12">
              <v-pagination
                v-model="currentPage"
                :length="4"
                circle
              ></v-pagination>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="filter-form">
            <v-form>
              <v-text-field
                v-model="form.location"
                placeholder="To search type and hit enter"
                background-color="white"
                outlined
                elevation="0"
                height="55px"
                hide-details
              ></v-text-field>
            </v-form>
          </v-card>
          <v-card class="filter-form">
            <h3 class="mb-2">Categories</h3>
            <ul class="category-list">
              <li>Accepts Credit Cards</li>
              <li>Smoking Allowed</li>
              <li>Bike Parking</li>
              <li>Street Parking</li>
              <li>Wireless Internet</li>
              <li>Alcohol</li>
              <li>Pet Friendly</li>
            </ul>
          </v-card>
          <v-card class="filter-form">
            <h3 class="mb-6">Top Articles</h3>
            <div class="d-flex flex-column">
              <div
                class="top-article d-flex"
                v-for="(item, index) in topArticles"
                :key="index"
              >
                <div class="top-article-photo mr-5">
                  <img
                    :src="item.photo"
                    class="w-100"
                  />
                </div>
                <div class="top-article-content">
                  <h4 class="top-article-content-title">{{ item.title }}</h4>
                  <p class="top-article-content-date">{{ item.postDate | datefilter }}</p>
                </div>
              </div>
            </div>
          </v-card>
          <v-card class="filter-form">
            <h3 class="mb-2">Tags</h3>
            <div class="d-flex">
              <v-chip
                pill
                class="ma-1 py-1 px-5 filter-tag"
              >
                Travelling
              </v-chip>
              <v-chip
                pill
                class="ma-1 py-1 px-5 filter-tag"
              >
                Art
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { articles } from '@/data/blog'
import BlogArticleCard from '@/components/BlogArticleCard'

export default {
  name: 'Blog',

  components: {
    BlogArticleCard
  },

  data () {
    return {
      form: {
        location: null
      },
      currentPage: 1,
      itemsPerPage: 4,
      articles: articles,
      topArticles: articles.slice(0, 3)
    }
  },

  methods: {
    resetFilters () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: url('../assets/blog/bg.png'), #1D293E;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    font-size: 30px;
    line-height: 43px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
  }
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

.top-article + .top-article {
  margin-top: 20px;
}

.top-article-photo {
  min-width: 90px;
  height: 80px;
  border-radius: 8px;
}

.top-article-content-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #222222;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.top-article-content-date {
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  color: #717171;
}
</style>
