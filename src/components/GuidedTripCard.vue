<template>
  <v-card
    elevation="0"
    :class="{ 'guided-trip-list-item': displayMode == 'list', 'guided-trip-card': true }"
  >
    <div class="guided-trip-photo d-flex">
      <img
        :src="trip.photos[0]"
        class="w-100"
      />
      <div class="top-status-block d-flex">
        <div class="guided-trip-cost d-flex align-center justify-center">
          <span>${{ trip.price.cost }}</span>
        </div>
        <div class="guided-trip-status d-flex align-center justify-center">
          <span>Open</span>
        </div>
        <v-spacer></v-spacer>
        <div class="guided-trip-featured d-flex align-center justify-center">
          <span>Featured</span>
        </div>
      </div>
      <div class="review-block d-flex align-center">
        <v-rating
          :value="trip.review"
          color="white"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <span class="white--text ms-4 font-style-1">
          ({{ trip.review }} reviews)
        </span>
      </div>
      <div class="guided-trip-owner">
        <img :src="trip.owner.photo"/>
      </div>
    </div>
    <div class="guided-trip-content">
      <h3 class="guided-trip-title pt-1">{{ trip.title }}</h3>
      <p class="guided-trip-summary">{{ trip.summary }}</p>
      <div class="guided-trip-contact mb-4">
        <div class="guided-trip-phone d-flex">
          <v-icon>mdi-phone-outline</v-icon>
          {{ trip.phone }}
        </div>
        <div class="guided-trip-city d-flex">
          <v-icon>mdi-map-marker-outline</v-icon>
          {{ trip.city }}
        </div>
      </div>
      <v-divider class="guided-trip-divider"></v-divider>
      <div class="guided-trip-action d-flex align-center">
        <v-btn
          class="mr-3"
          fab
          dark
          small
          color="primary"
          elevation="0"
        >
          <v-icon dark>
            mdi-tent
          </v-icon>
        </v-btn>
        <span>{{ trip.category }}</span>
        <v-spacer></v-spacer>
        <v-btn fab small icon class="mr-2">
          <v-icon>mdi-magnify-plus-outline</v-icon>
        </v-btn>
        <v-btn fab small icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'GuidedTripCard',

  props: {
    trip: Object,
    displayMode: {
      type: String,
      default: 'grid'
    }
  },

  data: () => ({
    //
  })
}
</script>

<style lang="scss" scoped>
.v-card.guided-trip-card {
  padding: 10px 10px 0;
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
  position: relative;
}

.guided-trip-photo {
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

    .guided-trip-cost, .guided-trip-status, .guided-trip-featured {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;
      border-radius: 8px;
      height: 30px;
    }

    .guided-trip-cost, .guided-trip-status {
      border: 1px solid #FFFFFF;
      min-width: 60px;
    }

    .guided-trip-cost {
      margin-left: 20px;
      margin-right: 10px;
    }

    .guided-trip-featured {
      background: #ED4949;
      min-width: 90px;
      margin-right: 20px;
    }
  }
}

.guided-trip-content {
  width: 100%;
  padding: 10px;
}

.guided-trip-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
}

.guided-trip-summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.guided-trip-contact {
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

.guided-trip-divider {
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);
  max-width: unset;
}

.guided-trip-owner {
  position: absolute;
  bottom: -25px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(140, 152, 164, 0.6);
}

.guided-trip-action {
  margin-top: 10px;
}

.v-card.guided-trip-list-item {
  @media (min-width: 600px) {
    display: flex;
    padding: 10px;

    .guided-trip-summary {
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }

    .guided-trip-photo {
      width: 100%;
    }

    .guided-trip-owner {
      bottom: 15px;
    }
  }
}
</style>
