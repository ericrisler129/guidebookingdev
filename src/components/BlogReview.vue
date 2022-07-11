<template>
  <v-card
    elevation="0"
    class="article-review-list-item d-flex mt-5"
  >
    <div class="article-review-list-item-photo d-flex align-baseline mr-6">
      <img
        :src="item.photo"
        :width="70"
        :height="70"
      />
    </div>
    <div class="article-review-list-item-content">
      <div class="article-review-list-item-content-header d-flex align-end mb-4">
        <div class="article-review-list-item-content-header__author">
          <p class="mb-0 font-weight-medium">{{ item.author }}</p>
          <p class="mb-0 grey--text">{{ item.postDate | datefilter2 }}</p>
        </div>
        <v-spacer></v-spacer>
        <div class="article-review-list-item-content-header-review d-flex">
          <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            length="5"
            readonly
            size="12"
            color="grey"
            :value="item.review"
          ></v-rating>
          <span>({{ item.review }} Reviews)</span>
        </div>
      </div>
      <p class="article-review-list-item-content-summary">{{ item.content }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'BlogReview',

  props: {
    item: Object
  },

  data: () => ({
    //
  })
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
