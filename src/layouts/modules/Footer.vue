<template>
  <v-footer class="footerpart" dark inset>
    <v-container class="py-0">
      <v-row class="contact_wrapper">
        <v-col cols="12" class="py-0 d-flex justify-space-between mx-auto">
          <div class="contact_us d-block">
            <div class="text-center d-flex py-0 justify-start align-center">
              <router-link to="/contact" class="white--text">Contact us</router-link>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <div style="width:10%">
                <img src="../../assets/contact_us/location.png" height="20px" class="mx-auto" />
              </div>
              <p>Bozeman, Mt.<br>1 Street. St.</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <div style="width:10%">
                <img src="../../assets/contact_us/phone-16.png" height="15px" class="mx-auto" />
              </div>
              <p>1234567890</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <div style="width:10%">
                <img src="../../assets/contact_us/email.png" height="13px" class="mx-auto" />
              </div>
              <p>support @guidebook.com</p>
            </div>
          </div>
          <div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <router-link to="/about" class="white--text">Company</router-link>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">Help Center</router-link></p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">About</router-link></p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">News</router-link></p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">How It Works</router-link></p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">Articles & Tips</router-link></p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
                <p><router-link to="/about" class="white--text">Terms of Service</router-link></p>
            </div>
          </div>
          <div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <router-link to="/location" class="white--text">Locations</router-link>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>North America</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>Central America</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>South America</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>Europe</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>Asia</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>Africa</p>
            </div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <p>Oceania</p>
            </div>
          </div>
          <div>
            <div class="text-center d-flex py-0 justify-start align-center">
              <router-link to="/feedback" class="white--text">Newsletter</router-link>
            </div>
            <div class="text-left d-block py-0">
              <p>We don't send spam so don't worry.</p>
              <div class="d-flex justify-start align-center">
                <v-col style="width: 400px; padding-left: 0;">
                  <v-text-field
                    label="Enter Your Email"
                    outlined
                    filled
                  >
                  </v-text-field>
                </v-col>
                <v-btn
                  depressed
                  color="primary"
                  style="margin-left:-125px; margin-bottom:27px"
                  class="transform-none"
                >
                  Subscribe
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="py-0 footer-divider-wrapper">
          <div class="footer-divider"></div>
        </v-col>
      </v-row>
      <v-row class="footer-bottom pt-9">
        <v-col cols="12" md="4" class="d-flex align-center">
          <p class="copyright mb-0 text-center text-sm-left px-5 px-sm-0">© Guide Booking - All rights reserved</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-col cols="12" class="text-center d-flex py-0">
            <img src="@/assets/logo.svg" height="50px" class="mx-auto" />
          </v-col>
        </v-col>
        <v-col cols="12" md="4" class="d-flex align-center justify-start justify-sm-end">
          <a href="https://www.facebook.com" class="mx-3">
            <v-icon>mdi-facebook</v-icon>
          </a>
          <a href="https://www.twitter.com" class="mx-3">
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a href="https://www.instagram.com" class="mx-3">
            <v-icon>mdi-instagram</v-icon>
          </a>
          <a href="https://www.pinterest.com" class="mx-3">
            <v-icon>mdi-pinterest</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({})
}
</script>
<style lang="scss" scoped>
.v-application .footerpart {
  min-height: 363px;
  padding-top: 71px;
  padding-bottom: 36px;
  padding-right: 250px;
  padding-left: 250px;
  background: #1D293E;
}

.logos {
  .logo-link {
    opacity: .25;
  }
}

.footer-bottom {
  .copyright {
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
  }

  .a {
    font-weight: 400;
    font-size: 15px;
    line-height: 35px;
  }
}

.footer-divider-wrapper {
  position: relative;
  .footer-divider {
    position: absolute;
    width: 100vw;
    left: calc(50% - 50vw);
    height: 1px;
    background: #FFFFFF;
    opacity: 0.1;
  }
}

p {
  font-size: 12px;
  margin: 3px 0px;
}

.footer-divider {
  margin-top: 20px;
}

.transform-none {
  text-transform: none;
}
</style>
