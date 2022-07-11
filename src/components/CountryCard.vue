<template>
  <v-card
    elevation="0"
    class="country-card"
  >
    <div class="country-photo d-flex">
      <img
        :src="country.photo"
        class="w-100"
      />
    </div>
    <div class="country-content pt-3">
      <h3 class="country-name text-center mt-3">{{ country.name }}</h3>
      <p class="country-listing-count text-center mt-1 mb-0">{{ country.listingCount }} Listings</p>
      <v-btn
        class="country-view-btn text-none"
        block
        color="primary"
        elevation="0"
        height="50px"
        @click="showCities"
      >
        View
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CountryCard',

  props: {
    country: Object
  },

  methods: {
    showCities () {
      this.$router.push({ name: 'Cities', query: { id: this.country.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card.country-card {
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
  position: relative;

  &:hover {
    .country-name {
      display: none;
    }

    .country-listing-count {
      display: none;
    }

    .country-view-btn {
      display: block;
    }
  }
}

.country-photo {
  position: relative;
}

.country-content {
  width: 100%;
  height: 95px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid #EAEAEA;
}

.country-view-btn {
  display: none;
}

.country-name {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #222222;
}

.country-listing-count {
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.v-card.country-list-item {
  @media (min-width: 600px) {
    display: flex;
    padding: 10px;

    .country-photo {
      width: 100%;
    }
  }
}
</style>
