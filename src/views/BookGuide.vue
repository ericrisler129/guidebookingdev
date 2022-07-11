<template>
  <div class="white-bg mt-16">
    <v-container class="pt-16 new-container book-guide-page">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center black--text">Catch more fish</h1>
          <p class="text-center grey--text">Book an adventure</p>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="filter-form">
            <v-form>
              <v-text-field
                v-model="form.location"
                placeholder="Where are you going"
                background-color="white"
                outlined
                hide-details
                elevation="0"
                class="mb-5"
              ></v-text-field>
              <v-select
                :items="groupsizeItems"
                outlined
                hide-details
                elevation="0"
                placeholder="Group size"
                v-model="form.groupsize"
                background-color="white"
                class="mb-5"
              ></v-select>
              <v-select
                :items="priceRangeItems"
                outlined
                hide-details
                elevation="0"
                placeholder="Price Range"
                v-model="form.priceRange"
                background-color="white"
              ></v-select>
              <h4 class="mt-8">Tags</h4>
              <v-checkbox
                label="Featured Guided Trips"
                color="primary"
                v-model="form.includeFeatured"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="form.includeNew"
                label="New guided trips"
                color="primary"
                hide-details
              ></v-checkbox>
              <v-btn
                block
                color="primary"
                class="text-none body-1 mt-9"
                :height="55"
              >
                Search
              </v-btn>
              <div class="d-flex pb-2">
                <span
                  aria-controls
                  class="text-decoration-underline mx-auto mt-4 reset-filter"
                  @click="resetFilters"
                >
                  Reset Filters
                </span>
              </div>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="pl-md-7">
          <v-row>
            <v-col
              cols="12"
              class="d-flex justify-space-between align-center flex-wrap mb-1"
            >
              <p class="mb-0">
                <span class="grey--text">Showing</span>&nbsp;
                <span class="black--text">1 - 8 of 10 results</span>
              </p>
              <div class="d-flex align-center">
                <div class="d-flex nowrap align-center">
                  <span class="grey--text">Sort By:</span>
                  <v-select
                    :items="sortItems"
                    class="mt-0 ml-2"
                    placeholder="Default"
                    dense
                    hide-details
                    solo
                    flat
                    elevation="0"
                  ></v-select>
                </div>
                <v-btn
                  icon
                  tile
                  class="grid-mode-btn ml-7"
                  :color="displayMode == 'grid' ? 'primary' : ''"
                  :height="40"
                  :width="40"
                  @click="displayMode = 'grid'"
                >
                  <v-icon>mdi-view-grid-outline</v-icon>
                </v-btn>
                <v-btn
                  icon
                  tile
                  class="grid-mode-btn ml-2"
                  :color="displayMode == 'list' ? 'primary' : ''"
                  :height="40"
                  :width="40"
                  @click="displayMode = 'list'"
                >
                  <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              :sm="displayMode == 'grid' ? 6 : 12"
              v-for="(item, index) in guidedTrips"
              :key="index"
            >
              <GuidedTripCard :trip="item" :displayMode="displayMode" />
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
</template>

<script>
import GuidedTripCard from '@/components/GuidedTripCard'

export default {
  name: 'BookGuide',

  components: {
    GuidedTripCard
  },

  data () {
    return {
      form: {
        location: null,
        groupsize: null,
        priceRange: null
      },
      currentPage: 3,
      groupsizeItems: [
        {
          size: 2
        },
        {
          size: 5
        },
        {
          size: 7
        }
      ],
      pricerangeItems: [
        {
          min: 100,
          max: 500
        },
        {
          min: 500,
          max: 1000
        },
        {
          min: 1000,
          max: 2000
        }
      ],
      guidedTrips: [
        {
          id: 1,
          photos: [require('../assets/homepage/adventures/1.png')],
          title: 'Adventure High Ropes',
          category: 'Outdoor Activities',
          summary:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          city: 'New York',
          price: {
            unit: 'USD',
            cost: 212
          },
          phone: '+61-8181-123',
          review: 4.9,
          isFeatured: true,
          owner: {
            photo: require('../assets/homepage/avatars/1.png'),
            name: 'Lourens'
          }
        },
        {
          id: 2,
          photos: [require('../assets/homepage/adventures/2.png')],
          title: 'Amrutha Lounge',
          category: 'Restaurant',
          summary:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          city: 'New York',
          price: {
            unit: 'USD',
            cost: 212
          },
          phone: '+61-8181-123',
          review: 4.9,
          isFeatured: false,
          owner: {
            photo: require('../assets/homepage/avatars/1.png'),
            name: 'Lourens'
          }
        },
        {
          id: 3,
          photos: [require('../assets/homepage/adventures/3.png')],
          title: 'The Waldorf Hilton',
          category: 'Hotels',
          summary:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          city: 'New York',
          price: {
            unit: 'USD',
            cost: 292
          },
          phone: '+61-8181-123',
          review: 5,
          isFeatured: false,
          owner: {
            photo: require('../assets/homepage/avatars/1.png'),
            name: 'Lourens'
          }
        },
        {
          id: 4,
          photos: [require('../assets/homepage/adventures/1.png')],
          title: 'Adventure High Ropes',
          category: 'Outdoor Activities',
          summary:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          city: 'New York',
          price: {
            unit: 'USD',
            cost: 212
          },
          phone: '+61-8181-123',
          review: 4.9,
          isFeatured: true,
          owner: {
            photo: require('../assets/homepage/avatars/1.png'),
            name: 'Lourens'
          }
        },
        {
          id: 5,
          photos: [require('../assets/homepage/adventures/2.png')],
          title: 'Amrutha Lounge',
          category: 'Restaurant',
          summary:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
          city: 'New York',
          price: {
            unit: 'USD',
            cost: 212
          },
          phone: '+61-8181-123',
          review: 4.9,
          isFeatured: false,
          owner: {
            photo: require('../assets/homepage/avatars/1.png'),
            name: 'Lourens'
          }
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
.book-guide-page {
  padding-bottom: 52px;

  @media (min-width: 600px) {
    padding-bottom: 152px;
  }
}

.v-card.filter-form {
  background-color: #f4f4f4;
  padding: 30px;
}

.reset-filter {
  color: #717171;
}

.grid-mode-btn {
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
