<template>
  <div>
    <div class="banner-wrapper pa-0">
      <div class="search-block">
        <h2 class="white--text search-block__title">Book a fishing guide</h2>
        <SearchForm />
      </div>
    </div>
    <div class="top-locations-section px-10">
      <div class="top-locations-wrapper mx-auto">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="n in 8"
            :key="n"
          >
            <v-card
              class="top-location-card"
              height="350"
              width="270"
            >
              <img src="../assets/homepage/trips/3.png" />
              <div class="top-location-card-info w-100">
                <p class="text-center top-location-card-info__location">Bozeman, Montana USA</p>
                <p class="text-center top-location-card-info__listcount">{{ n * 5 }} Listings</p>
              </div>
            </v-card>
          </v-slide-item>
          <template slot="next">
            <v-btn fab icon class="slide-arrow-btn ml-0 ml-md-4" width="45" height="45">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <template slot="prev">
            <v-btn fab icon class="slide-arrow-btn mr-0 mr-md-4" width="45" height="45">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
        </v-slide-group>
      </div>
    </div>
    <div class="why_book_an_adventure grey-bg">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">Why book an adventure with guidebooking.xyz?</h2>
      <p class="text-center why_book_an_adventure-description home-description">Bringing business and community members together.</p>
      <div class="why_book_an_adventure-card-row">
        <div class="why_book_an_adventure-card">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/find-location.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Find Guides</p>
          <p class="why_book_an_adventure-card__description ma-0">Discover & connect with great guides all over the world.</p>
        </div>
        <div class="why_book_an_adventure-card">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/comment.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Review Listings</p>
          <p class="why_book_an_adventure-card__description ma-0">Review your experiences to help the best guides gain recognition for their awesomeness.</p>
        </div>
        <div class="why_book_an_adventure-card">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/date.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Make a Reservation</p>
          <p class="why_book_an_adventure-card__description ma-0">A single platform to book and communicate securly with guides for adventures around the world. </p>
        </div>
      </div>
    </div>
    <div class="guidebooking_family white-bg px-10">
      <h2 class="home-title guidebooking_family-title text-center">The guidebooking.xyz family</h2>
      <div class="guidebooking_family-wrapper mx-auto">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(item, index) in family"
            :key="index"
          >
            <v-card
              class="guidebooking_family-card"
              width="270"
            >
              <img :src="item.image" />
              <p class="guidebooking_family-card-name text-center">{{ item.name }}</p>
              <p class="guidebooking_family-card-job text-center">{{ item.job }}</p>
            </v-card>
          </v-slide-item>
          <template slot="next">
            <v-btn fab icon class="slide-arrow-btn ml-0 ml-md-4" width="45" height="45">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <template slot="prev">
            <v-btn fab icon class="slide-arrow-btn mr-0 mr-md-4" width="45" height="45">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
        </v-slide-group>
      </div>
    </div>
    <div class="meet-community white-bg d-flex justify-center flex-column flex-sm-row align-center pt-10">
      <v-btn class="ma-3 text-none primary" to="/community/members">
        Meet the community
      </v-btn>
      <v-btn class="ma-3 text-none primary">
        Join the community
      </v-btn>
    </div>
    <div class="browse-adventures white-bg">
      <h2 class="home-title browse-adventures-title text-center">Browse our Unique Guided Adventures</h2>
      <div class="adventures-wrapper">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div class="adventure-card" v-for="(item, index) in guidedTrips" :key="index">
            <GuidedTripCard :trip="item" />
          </div>
        </slick>
      </div>
      <div class="w-100 text-center mt-12">
        <v-btn class="text-none primary">Explore all guided trips</v-btn>
      </div>
    </div>
    <div class="why_book_an_adventure grey-bg">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">Why become an adventure host?</h2>
      <div class="why_book_an_adventure-card-row">
        <div class="why_book_an_adventure-card elevation-0 transparent">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/find-location.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Find Guides</p>
          <p class="why_book_an_adventure-card__description ma-0">Discover & connect with great guides all over the world.</p>
        </div>
        <div class="why_book_an_adventure-card elevation-0 transparent">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/comment.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Review Listings</p>
          <p class="why_book_an_adventure-card__description ma-0">Review your experiences to help the best guides gain recognition for their awesomeness.</p>
        </div>
        <div class="why_book_an_adventure-card elevation-0 transparent">
          <div class="why_book_an_adventure-card__icon mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/date.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Make a Reservation</p>
          <p class="why_book_an_adventure-card__description ma-0">A single platform to book and communicate securly with guides for adventures around the world. </p>
        </div>
      </div>
    </div>
    <div class="browse-unique-adventures white-bg">
      <h2 class="home-title browse-unique-adventures-title text-center">Browse our Unique Guided Adventures</h2>
      <div class="browse-unique-adventures-wrapper mx-auto">
        <v-row>
          <v-col sm="8" cols="12" class="browse-unique-adventure">
            <img src="../assets/homepage/unique_adventures/1.png" class="w-100" />
          </v-col>
          <v-col sm="4" cols="12" class="browse-unique-adventure">
            <img src="../assets/homepage/unique_adventures/2.png" class="w-100" />
          </v-col>
          <v-col sm="4" cols="12" class="browse-unique-adventure">
            <img src="../assets/homepage/unique_adventures/4.png" class="w-100" />
          </v-col>
          <v-col sm="8" cols="12" class="browse-unique-adventure">
            <img src="../assets/homepage/unique_adventures/3.png" class="w-100" />
          </v-col>
        </v-row>
      </div>
      <div class="w-100 text-center mt-12">
        <v-btn class="text-none primary">Explore all guided trips</v-btn>
      </div>
    </div>
    <div class="our-story">
      <h2 class="white--text text-center our-story-title">Our story</h2>
      <div class="our-story-video-section d-flex align-center justify-center">
        <div class="our-story-video-section-bg d-flex align-center">
          <img src="../assets/homepage/our_story/video.png" />
        </div>
        <img src="../assets/homepage/our_story/play-icon.png" class="play-btn" />
      </div>
    </div>
    <div class="our-partners white-bg">
      <h3 class="text-center our-partners-title">Our partners</h3>
      <v-container class="our-partners-logos mt-12">
        <v-row>
          <v-col cols="6" sm="4" md="3" class="d-flex align-center justify-center mb-md-16">
            <v-img src="../assets/homepage/partners/1.svg" max-width="218px" />
          </v-col>
          <v-col cols="6" sm="4" md="3" class="d-flex align-center justify-center mb-md-16">
            <v-img src="../assets/homepage/partners/2.svg" max-width="218px" />
          </v-col>
          <v-col cols="6" sm="4" md="3" class="d-flex align-center justify-center mb-md-16">
            <v-img src="../assets/homepage/partners/3.svg" max-width="222px" />
          </v-col>
          <v-col cols="6" sm="4" md="3" class="d-flex align-center justify-center mb-md-16">
            <v-img src="../assets/homepage/partners/4.svg" max-width="124px" />
          </v-col>
          <v-col cols="6" sm="4" md="4" class="d-flex align-end justify-center">
            <v-img src="../assets/homepage/partners/5.svg" max-width="146px" />
          </v-col>
          <v-col cols="6" sm="4" md="4" class="d-flex align-end justify-center">
            <v-img src="../assets/homepage/partners/6.svg" max-width="218px" />
          </v-col>
          <v-col cols="12" sm="4" md="4" class="d-flex align-end justify-center">
            <v-img src="../assets/homepage/partners/7.svg" max-width="218px" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import photoUploadMixin from '@/mixins/photoUploadMixin'
import GuidedTripCard from '@/components/GuidedTripCard'
import SearchForm from '@/components/SearchForm'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

export default {
  name: 'Home',

  mixins: [photoUploadMixin],

  components: {
    GuidedTripCard,
    SearchForm,
    Slick
  },

  data () {
    return {
      form: {
        location: null,
        groupsize: null
      },
      trips: [],
      family: [],
      profileImage: null,
      model: null,
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      guidedTrips: [{
        id: 1,
        photos: [
          require('../assets/homepage/adventures/1.png')
        ],
        title: 'Adventure High Ropes',
        category: 'Outdoor Activities',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
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
      }, {
        id: 2,
        photos: [
          require('../assets/homepage/adventures/2.png')
        ],
        title: 'Amrutha Lounge',
        category: 'Restaurant',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
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
      }, {
        id: 3,
        photos: [
          require('../assets/homepage/adventures/3.png')
        ],
        title: 'The Waldorf Hilton',
        category: 'Hotels',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
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
      }, {
        id: 4,
        photos: [
          require('../assets/homepage/adventures/1.png')
        ],
        title: 'Adventure High Ropes',
        category: 'Outdoor Activities',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
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
      }, {
        id: 5,
        photos: [
          require('../assets/homepage/adventures/2.png')
        ],
        title: 'Amrutha Lounge',
        category: 'Restaurant',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
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
      }]
    }
  },

  methods: {
  },

  mounted () {
    console.log('mounted')
    for (let i = 0; i < 10; i++) {
      this.trips.push({
        id: i,
        image: require('../assets/homepage/trips/3.png'),
        location: 'Bozeman, Montana USA',
        listing_count: 62
      })
    }

    for (let i = 0; i < 10; i++) {
      this.family.push({
        id: i,
        image: require('../assets/homepage/family/3.png'),
        name: 'Kathryn Murphy',
        job: 'photographer'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-title {
  font-weight: 500;
  font-size: 30px;
  line-height: 43px;
  color: #222222;
}

.home-description {
  color: #717171;
}

::v-deep .v-slide-group.v-item-group > .v-slide-group__prev {
  margin-left: -52px;
}

::v-deep .v-slide-group.v-item-group > .v-slide-group__next {
  margin-right: -52px;
}

.slide-arrow-btn {
  border: 1px solid #EAEAEA;
  box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
}

.banner-wrapper {
  background: url('../assets/homepage/banner3.png');
  background-position: center;
  background-repeat: no-repeat;
  height: 860px;
  position: relative;

  .search-block {
    height: 50%;
    position: absolute;
    top: 35%;
    width: 100%;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;

    .search-block__title {
      font-weight: 500;
      font-size: 50px;
      line-height: 72px;
      margin-bottom: 63px;
    }

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
  }
}

.top-locations-section {
  background: white;
  height: 435px;

  .top-locations-wrapper {
    max-width: 1230px;
    margin-top: -95px;

    .v-item-group {
      background: white;
      border-radius: 8px;
    }

    .top-location-card {
      margin: 0 15px;
      position: relative;

      .top-location-card-info {
        position: absolute;
        bottom: 0;

        .top-location-card-info__location {
          color: #E5E5E5;
          font-weight: 500;
          font-size: 16px;
          line-height: 23px;
          margin-bottom: 9px;
        }

        .top-location-card-info__listcount {
          color: white;
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 28px;
        }
      }
    }
  }
}

.why_book_an_adventure {
  padding-top: 100px;
  padding-bottom: 85px;

  .why_book_an_adventure-title {
    margin-bottom: 45px;
  }

  .why_book_an_adventure-description {
    margin-bottom: 45px;
  }

  .why_book_an_adventure-card-row {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .why_book_an_adventure-card {
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 30px rgba(34, 34, 34, 0.07);
    border-radius: 8px;
    padding: 60px 33px;
    margin: 15px;
    // max-width: 370px;

    .why_book_an_adventure-card__icon {
      width: 120px;
      height: 120px;
      background: linear-gradient(297.21deg, #2650D9 0%, #4567D5 92.82%);
      border-radius: 50%;
    }

    .why_book_an_adventure-card__title {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #222;
      margin-top: 37px;
    }

    .why_book_an_adventure-card__description {
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #717171;
    }
  }
}

.guidebooking_family {
  padding-top: 121px;

  .guidebooking_family-title {
    margin-bottom: 34px;
  }

  .guidebooking_family-wrapper {
    max-width: 1230px;

    .guidebooking_family-card {
      margin: 0 15px;

      .guidebooking_family-card-name {
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        color: #222;
        margin-top: 25px;
        margin-bottom: 6px;
      }

      .guidebooking_family-card-job {
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #717171;
        margin-bottom: 0;
      }
    }
  }
}

.browse-adventures {
  padding-top: 102px;
  padding-bottom: 114px;

  .adventures-wrapper {
    max-width: 1200px;
    margin: 0 auto;

    .adventure-card {
      padding: 15px;
    }
  }
}

::v-deep .slick-dots {
  list-style-type: none;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  padding: 0;

  li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 8px;
    height: 8px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
    position: relative;
  }

  li button:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: ' ';
    background: #DEDEDE;
  }

  li.slick-active button {
    width: 20px;
    height: 8px;
  }

  li.slick-active button:before {
    background: #222222;
    border-radius: 20px;
    width: 20px;
  }

  li + li {
    margin-left: 10px;
  }
}

.browse-unique-adventures {
  padding-top: 108px;
  padding-bottom: 145px;

  .browse-unique-adventures-wrapper {
    margin-top: 69px;
    margin-bottom: 63px;
    max-width: 1264px;
    padding-left: 32px;
    padding-right: 32px;

    .browse-unique-adventure {
      overflow: hidden;
      border-radius: 8px;
      display: flex;
    }
  }
}

.our-story {
  background: #1D293E url('../assets/homepage/our_story/story-bg.png');
  background-position: center;
  min-height: 600px;
  padding-top: 52px;

  .our-story-title {
    font-weight: 500;
    font-size: 50px;
    line-height: 72px;
    margin-bottom: 39px;
  }

  .our-story-video-section {
    position: relative;
    padding-left: 32px;
    padding-right: 32px;

    .our-story-video-section-bg {
      border-radius: 8px;
      max-width: 85%;

      img {
        width: 100%;
      }
    }

    .play-btn {
      position: absolute;
    }
  }
}

.our-partners {
  padding-top: 149px;
  padding-bottom: 190px;

  .our-partners-title {
    font-weight: 500;
    font-size: 30px;
    line-height: 43px;
    color: #222222;
  }

  .our-partners-logos {
    max-width: 1200px;

    .v-image {
      width: 100%;
      // margin-left: 60px;
      // margin-right: 60px;
    }
  }
}
</style>
