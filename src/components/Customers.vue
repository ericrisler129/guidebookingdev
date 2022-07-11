<template>
  <v-card
    :class="{ 'guided-trip-list-item': displayMode == 'list', 'guided-trip-card': true, 'position-relative': true }"
  >
    <i class="big-quote fa-5x text--disabled">"</i>
    <div class="guided-trip-photo d-flex pt-5">
      <div class="guided-trip-owner">
        <img :src="trip.owner.photo"/>
      </div>
    </div>
    <div class="guided-trip-content">
      <h3 class="guided-trip-title pt-1">{{ trip.owner.name }}</h3>
      <p class="guided-trip-summary">Wordpress developer</p>
      <p class="guided-trip-summary">"Hello I'm a professional wordpress developer I'm looking for a job"</p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Customers',

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
  position: relative;
}

.guided-trip-photo {
  justify-content: center;
  align-items: center;
}

.guided-trip-content {
  width: 100%;
  padding: 10px;
}

.guided-trip-title {
  display:flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #222222;
}

.guided-trip-summary {
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #717171;
}

.guided-trip-owner {
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(140, 152, 164, 0.6);
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

.big-quote {
  position: absolute;
  left: 20px;
}
</style>
