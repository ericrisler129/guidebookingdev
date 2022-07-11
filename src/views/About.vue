<template>
  <div class="white-bg page-wrapper">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      @click="toTop"
    >
      <v-icon class="font-normal pt-3">^</v-icon>
    </v-btn>
    <div class="w-100 page-header d-flex flex-column align-center justify-center px-4">
      <h1 class="text-center white--text mb-1">About Us</h1>
      <p class="text-center white--text mb-0">Home / About Us</p>
    </div>
    <div class="why_book_an_adventure">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">Our Mission Is To Golo</h2>
      <p class="text-center why_book_an_adventure-description home-description">Discover some of the most popular listings in Toronto based on user reviews and ratings.</p>
      <v-row class="adventures-wrapper-video our-mission">
        <v-col cols="12" sm="6" class="d-flex justify-end">
          <div class="our-mission-video-section d-flex align-center justify-center">
            <div class="our-mission-video-section-bg d-flex align-end">
              <img src="../assets/homepage/our_story/video.png" />
            </div>
            <img src="../assets/homepage/our_story/play-icon.png" class="play-btn" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="video-discription">
          <h4 class="mb-4">Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut scelerisque tempor faucibus tempor tincidunt egestas morbi at congue. lmperdiet blandit ac neque commodo integer turpis. Eget orci sed viverra in sed. lpsum amet eu mauris ac. Semper netus gravida adipiscing consectetuer velit aliquam tellus lobortis blandit. adipisicing tincidunt maecenas et mattis lectus sit amet tellus.</p>
          <p>Tincidunt nec condimentum lacus enim, ac arcu condimentum porttitor sollicitudin. Id elementum erat hendrerit a mi gravida iaculis non. Ullamcorper nislvel pretium  tellus, elit duis leo sed. Habitasse eget arcu tellus faucibus.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="2" />
      </v-row>
      <div class="video-info-number-wrapper">
        <div class="video-info-number">
            <h1>749</h1>
            <p>Happy customers</p>
        </div>
        <div class="video-info-number">
            <h1>853</h1>
            <p>Listing Pages</p>
        </div>
        <div class="video-info-number">
            <h1>28k+</h1>
            <p>Best followers</p>
        </div>
        <div class="video-info-number">
            <h1>53k+</h1>
            <p>Team members</p>
        </div>
      </div>
    </div>
    <div class="why_book_an_adventure grey-bg">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">How it works</h2>
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
          <div class="why_book_an_adventure-card__icon_review mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/comment.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Review Listings</p>
          <p class="why_book_an_adventure-card__description ma-0">Review your experiences to help the best guides gain recognition for their awesomeness.</p>
        </div>
        <div class="why_book_an_adventure-card">
          <div class="why_book_an_adventure-card__icon_reservation mx-auto d-flex align-center justify-center">
            <img src="../assets/homepage/why_adventure/date.svg" />
          </div>
          <p class="why_book_an_adventure-card__title mb-2">Make a Reservation</p>
          <p class="why_book_an_adventure-card__description ma-0">A single platform to book and communicate securly with guides for adventures around the world. </p>
        </div>
      </div>
    </div>
    <div class="why_book_an_adventure">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">Testimonials From Our Customers</h2>
      <p class="text-center why_book_an_adventure-description home-description">Lorem ipsum dolor sit amet elit, sed do eiusmod</p>
      <div class="about-adventures-wrapper">
        <slick
          ref="slick"
          :options="slickCustomersOptions"
        >
          <div class="adventure-card" v-for="(item, index) in guidedTrips" :key="index">
            <Customers :trip="item" />
          </div>
        </slick>
      </div>
    </div>
    <div class="w-100 page-header d-flex flex-column align-center justify-center px-4">
      <h1 class="text-center white--text mb-1">Get Business Exposure</h1>
      <p class="text-center white--text mb-0 business-description pt-5">Your business deserves efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real time schemas.</p>
      <div class="w-100 text-center mt-12">
        <v-btn class="primary--text">How It Works</v-btn>
      </div>
    </div>
    <div class="why_book_an_adventure">
      <h2 class="text-center mb-2 why_book_an_adventure-title home-title">Our Team</h2>
      <p class="text-center why_book_an_adventure-description home-description">Cities You Must Explore This Summer</p>
      <div class="adventures-wrapper">
        <div class="guidebooking_family-wrapper mx-auto">
          <v-slide-group
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(item, index) in Members"
              :key="index"
            >
              <v-card
                class="guidebooking_family-card"
                width="270"
              >
                <div class="pa-10">
                  <img :src="item.photo" class="card-img" />
                  <h3 class="guidebooking_family-card-name text-center">{{ item.name }}</h3>
                  <p class="guidebooking_family-card-name text-center">Web developer</p>
                </div>
              </v-card>
            </v-slide-item>
            <template slot="next">
              <v-btn fab icon class="slide-arrow-btn ml-0 ml-md-4 shadow-btn" width="45" height="45">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
            <template slot="prev">
              <v-btn fab icon class="slide-arrow-btn mr-0 mr-md-4 shadow-btn" width="45" height="45">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
          </v-slide-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Customers from '@/components/Customers'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
export default {
  name: 'About',
  components: {
    Customers,
    Slick
  },
  data () {
    return {
      fab: false,
      slickCustomersOptions: {
        centerMode: true,
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
      slickOurTeamOptions: {
        slidesToShow: 4,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
      }],
      Members: [
        {
          id: 1,
          photo: require('../assets/members/1.png'),
          name: 'Eleanor Pena'
        },
        {
          id: 2,
          photo: require('../assets/members/2.png'),
          name: 'Wade Warren'
        },
        {
          id: 3,
          photo: require('../assets/members/3.png'),
          name: 'Marvin McKinney'
        },
        {
          id: 4,
          photo: require('../assets/members/4.png'),
          name: 'Jenny Wilson'
        },
        {
          id: 5,
          photo: require('../assets/members/5.png'),
          name: 'Devon Lane'
        },
        {
          id: 6,
          photo: require('../assets/members/1.png'),
          name: 'Devon Lane'
        },
        {
          id: 7,
          photo: require('../assets/members/2.png'),
          name: 'Devon Lane'
        },
        {
          id: 8,
          photo: require('../assets/members/3.png'),
          name: 'Devon Lane'
        },
        {
          id: 9,
          photo: require('../assets/members/4.png'),
          name: 'Devon Lane'
        }
      ]
    }
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    },
    resetFilters () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: url('../assets/blog/bg.png'), #1D293E;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;

  h1 {
    font-size: 30px;
    line-height: 43px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
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
    .why_book_an_adventure-card__icon_review {
      width: 120px;
      height: 120px;
      background: linear-gradient(297.21deg, #f1f1f1 0%, #f1f1f1 92.82%);
      border-radius: 50%;
    }
    .why_book_an_adventure-card__icon_reservation{
      width: 120px;
      height: 120px;
      background: linear-gradient(297.21deg, #f1f1f1 0%, #f1f1f1 92.82%);
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
//slick
.adventures-wrapper {
  max-width: 1200px;
  margin: 0 auto;

  .adventure-card {
    padding: 15px;
  }
}
.about-adventures-wrapper {
  max-width: 1200px;
  margin: 0 auto;

  .adventure-card {
    padding: 15px;
  }
}

.about-adventures-wrapper::v-deep .slick-slide {
  .v-card {
    opacity: .5;
  }
  .text--disabled {
    display: none;
  }
}

.about-adventures-wrapper::v-deep .slick-current {
  .v-card {
    opacity: 1;
    background-color: #f8f8f8;
  }
  .text--disabled {
    display: block;
  }
}

.adventures-wrapper-video{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video{
  widows: 50%;
  height: 50;
}
.video-discription{
  width: 40%;
  padding: 3%;
  font-size: 13px;
}
.video-info-number-wrapper{
  width:100%;
  height:10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-info-number{
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
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
.primary--text{
  font-size: 10px;
}

.font-normal {
  font-style: normal;
}

.our-mission {
  padding-bottom: 32px;
  .our-mission-title {
    font-weight: 500;
    font-size: 50px;
    line-height: 72px;
    margin-bottom: 39px;
  }

  .our-mission-video-section {
    position: relative;
    padding-left: 64px;

    .our-mission-video-section-bg {
      border-radius: 8px;

      img {
        width: 100%;
      }
    }

    .play-btn {
      position: absolute;
    }
  }
}

.business-description {
  max-width: 600px;
}

.shadow-btn {
  box-shadow: 0 0 2px 2px lightgrey;
  margin-bottom: 50px;
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 15px;
}
</style>
