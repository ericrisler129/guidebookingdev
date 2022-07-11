<template>
  <div class="white-bg mt-16">
    <v-container class="pt-16 new-container book-guide-page">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center black--text">Community</h1>
          <p class="text-center grey--text">Members</p>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="filter-form">
            <v-form>
              <v-text-field
                v-model="form.location"
                placeholder="Location"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5"
                clearable
              ></v-text-field>
              <h4 class="mt-8">Tags</h4>
              <v-checkbox
                label="New Members"
                color="primary"
                v-model="form.newMembers"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="form.recentSubmissions"
                label="Recent Submissions"
                color="primary"
                hide-details
              ></v-checkbox>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <v-col
              cols="12"
              :sm="4"
              v-for="(item, index) in guidedTrips"
              :key="index"
            >
              <v-card class="member-card mb-11">
                <div class="member-image rounded-lg overflow-hidden">
                  <v-img :src="item.photo" />
                </div>
                <div class="d-flex member-name-block">
                  <span class="member-name mx-auto font-weight-medium">{{ item.name }}</span>
                </div>
              </v-card>
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
      </v-row>
    </v-container>
  </div>
</template>r

<script>
export default {
  name: 'CommunityMembers',

  data () {
    return {
      form: {
        location: null,
        newMembers: false,
        recentSubmissions: null
      },
      currentPage: 3,
      guidedTrips: [
        {
          id: 1,
          photo: require('../../assets/members/1.png'),
          name: 'Eleanor Pena'
        },
        {
          id: 2,
          photo: require('../../assets/members/2.png'),
          name: 'Wade Warren'
        },
        {
          id: 3,
          photo: require('../../assets/members/3.png'),
          name: 'Marvin McKinney'
        },
        {
          id: 4,
          photo: require('../../assets/members/4.png'),
          name: 'Jenny Wilson'
        },
        {
          id: 5,
          photo: require('../../assets/members/5.png'),
          name: 'Devon Lane'
        },
        {
          id: 6,
          photo: require('../../assets/members/1.png'),
          name: 'Devon Lane'
        },
        {
          id: 7,
          photo: require('../../assets/members/2.png'),
          name: 'Devon Lane'
        },
        {
          id: 8,
          photo: require('../../assets/members/3.png'),
          name: 'Devon Lane'
        },
        {
          id: 9,
          photo: require('../../assets/members/4.png'),
          name: 'Devon Lane'
        }
      ],
      sortItems: ['Price', 'Review', 'Name'],
      displayMode: 'grid' // grid or list
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
.new-container {
  max-width: 1170px;
}

.book-guide-page {
  padding-bottom: 52px;

  @media (min-width: 600px) {
    padding-bottom: 152px;
  }
}

.v-card.filter-form {
  background-color: #f4f4f4;
  padding: 30px 22px;
}

.member-name-block {
  padding: 25px 0;
}

.member-image {
  position: relative;
}

.member-image::after {
  content: ' ';
  background: linear-gradient(180deg, rgba(29, 41, 62, 0) 0%, #1D293E 100%);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
}

.member-name {
  font-size: 18px;
  line-height: 26px;
}
</style>
