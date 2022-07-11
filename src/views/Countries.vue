<template>
  <div class="white-bg page-wrapper">
    <div class="w-100 page-header pt-15 px-4">
      <h1 class="text-center white--text mb-10">Countries</h1>
      <SearchForm />
    </div>
    <v-container class="pt-16 new-container countries-page">
      <v-row>
        <v-col cols="12" class="d-flex justify-space-between align-center flex-wrap mb-1">
          <p class="mb-0">
            <span class="grey--text">Showing</span>&nbsp;
            <span class="black--text">1 - 8 of 10 results</span>
          </p>
          <div class="d-flex align-center">
            <div class="d-flex nowrap align-center sort-option-select">
              <v-select
                v-model="sortOption"
                :items="sortItems"
                class="mt-0 ml-2"
                placeholder="Default"
                dense
                outlined
                hide-details
                solo
                flat
                elevation="0"
                height="45px"
              ></v-select>
            </div>
            <div class="d-flex nowrap align-center per-page-select ml-3">
              <v-select
                v-model="itemsPerPage"
                :items="perPageItems"
                class="mt-0"
                placeholder="Default"
                dense
                outlined
                hide-details
                solo
                flat
                elevation="0"
                height="45px"
              ></v-select>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          :sm="6"
          :md="3"
          v-for="(item, index) in countries"
          :key="index"
        >
          <CountryCard :country="item" />
        </v-col>
        <v-col cols="12" class="py-16">
          <v-pagination
            v-model="currentPage"
            :length="10"
            circle
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import CountryCard from '@/components/CountryCard'
import countryItems from '@/data/countries'

export default {
  name: 'Countries',

  components: {
    SearchForm,
    CountryCard
  },

  data () {
    return {
      form: {
        location: null,
        groupsize: null,
        priceRange: null
      },
      currentPage: 3,
      sortItems: ['Most Recent'],
      sortOption: 'Most Recent',
      itemsPerPage: 10,
      perPageItems: [10, 20, 30],
      countries: countryItems
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
  background: url('../assets/countries/bg.svg'), #1D293E03;
  background-position: center;
  background-repeat: no-repeat;
  height: 346px;

  h1 {
    font-size: 50px;
    line-height: 72px;
  }
}

.countries-page {
  max-width: 1320px;
}

.sort-option-select {
  width: 160px;
}

.per-page-select {
  width: 120px;
}
</style>
