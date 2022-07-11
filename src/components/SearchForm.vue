<template>
  <div class="guide-search d-flex align-center justify-space-between mx-auto pa-2 px-9 px-sm-2 pl-sm-9">
    <div class="guide-search--location d-flex align-center">
      <span class="font-weight-medium">Where are you going</span>
      <v-text-field
        v-model="form.location"
        placeholder="Select Location"
        required
        background-color="white"
        filled
        dense
        rounded
        hide-details
        elevation="0"
      ></v-text-field>
    </div>
    <div class="guide-search-capacity d-flex align-center ">
      <span class="font-weight-medium">Group size</span>
      <v-text-field
        v-model="form.groupsize"
        placeholder="1 per"
        required
        background-color="white"
        filled
        dense
        rounded
        hide-details
      ></v-text-field>
    </div>
    <div class="guide-search-action ">
      <v-btn
        fab
        dark
        small
        color="primary"
        width="50px"
        height="50px"
      >
        <v-icon dark>
          mdi-magnify
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',

  data () {
    return {
      form: {
        location: null,
        groupsize: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.guide-search {
  max-width: 770px;
  min-height: 70px;
  background: #FFFFFF;
  border-radius: 35px;
  flex-direction: column;
  padding-right: 36px;

  @media (min-width: 600px) {
    flex-direction: unset;
    padding-right: 8px;
  }

  .guide-search--location {
    width: 100%;

    > span {
      white-space: nowrap;
    }

    @media (min-width: 600px) {
      width: 55%;
    }
  }

  .guide-search-capacity {
    width: 100%;

    > span {
      white-space: nowrap;
    }

    @media (min-width: 600px) {
      width: 35%;
    }
  }
}
</style>
