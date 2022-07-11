<template>
  <v-card
    elevation="0"
    class="article-list-item article-card"
  >
    <div class="article-photo d-flex">
      <img
        :src="item.photo"
        class="w-100"
      />
      <div class="top-status-block d-flex">
        <div class="article-category d-flex align-center justify-center rounded-pill mx-5 px-5">
          <span>{{ item.category }}</span>
        </div>
      </div>
    </div>
    <div class="article-content">
      <div class="article-contact mb-4">
        <div class="article-phone d-flex">
          <v-icon>mdi-account-outline</v-icon>
          {{ item.author }}
        </div>
        <div class="article-city d-flex">
          <v-icon>mdi-calendar</v-icon>
          {{ item.postDate | datefilter }}
        </div>
      </div>
      <h3 class="article-title pt-1">{{ item.title }}</h3>
      <p class="article-summary mb-2">{{ item.content }}</p>
      <a class="article-readmore text-decoration-underline" @click="readmore">Read More</a>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'BlogArticleCard',

  props: {
    item: Object
  },

  data: () => ({
    //
  }),

  methods: {
    readmore () {
      this.$router.push({ name: 'Article', params: { id: this.item.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card.article-card {
  padding: 10px 10px 0;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
  position: relative;
}

.article-photo {
  position: relative;

  .review-block {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .top-status-block {
    position: absolute;
    top: 20px;
    width: 100%;

    .article-category {
      background: linear-gradient(297.21deg, #2650D9 0%, #4567D5 92.82%);
      min-width: 90px;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      border-radius: 8px;
      height: 30px;
    }
  }
}

.article-content {
  width: 100%;
  padding: 30px 25px 25px;
}

.article-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
}

.article-summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.article-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #222222;

  .v-icon {
    margin-right: 0.5rem;
  }
}

.article-readmore {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #234DD4;
}

.v-card.article-list-item {
  @media (min-width: 600px) {
    display: flex;
    padding: 10px;

    .article-summary {
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }

    .article-photo {
      width: 100%;
    }
  }
}
</style>
