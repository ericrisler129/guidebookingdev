<template>
  <v-card
    elevation="0"
    class="city-card"
  >
    <div class="city-photo d-flex">
      <img
        :src="city.photo"
        class="w-100"
      />
    </div>
    <div class="city-content pt-3">
      <h3 class="city-name text-center mt-3">{{ city.name }}</h3>
      <p class="city-listing-count text-center mt-1 mb-0">{{ city.listingCount }} Listings</p>
      <v-btn
        class="city-view-btn text-none"
        block
        color="primary"
        elevation="0"
        height="50px"
      >
        View
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CityCard',

  props: {
    city: Object
  },

  data: () => ({
    //
  })
}
</script>

<style lang="scss" scoped>
.v-card.city-card {
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
  position: relative;

  &:hover {
    .city-name {
      display: none;
    }

    .city-listing-count {
      display: none;
    }

    .city-view-btn {
      display: block;
    }
  }
}

.city-photo {
  position: relative;
}

.city-content {
  width: 100%;
  height: 95px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #EAEAEA;
}

.city-view-btn {
  display: none;
}

.city-name {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #222222;
}

.city-listing-count {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.v-card.city-list-item {
  @media (min-width: 600px) {
    display: flex;
    padding: 10px;

    .city-photo {
      width: 100%;
    }
  }
}
</style>
