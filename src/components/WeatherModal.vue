<template>
<v-dialog v-model="weatherModal" width="100%">
  <v-container style="max-width:100%;padding:0px">
    <v-layout>
      <v-flex>
        <v-card color="amber lighten-1" hover>
          <v-card-text style="text-align:left"><h1>Weather for Jakarta, ID</h1></v-card-text>
        </v-card>
        <v-card color="white">
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 sm5 md5>
                <v-container style="padding:0; margin-top:20px">
                  <v-layout>
                    <v-flex xs12 sm6 md6 >
                      <img style="" src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/50n.png">
                    </v-flex>
                     <v-flex xs12 sm6 md6 >
                      <v-card-text> <h1 style="font-size:48px;padding:20px">{{today.main.temp | formatSuhu}} ºC </h1> </v-card-text>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-text style="padding:0">
                  <h1> {{today.weather[0].main}} </h1>
                </v-card-text>
                <v-card-text style="padding:0">
                  wind: {{today.wind.speed}} m/s
                </v-card-text>
              </v-flex>
              <v-flex xs12 sm1 md1 v-for="(cuaca, index) in weather" :key="index">
                <v-card>
                  <v-card-text>
                   <strong> {{cuaca.dt_txt | formatDate}} </strong>
                  </v-card-text>
                  <img v-bind:src="'http://openweathermap.org/img/w/' + cuaca.weather[0].icon + '.png'">
                  <v-card-text>
                   <strong>{{cuaca.main.temp_max | formatSuhu}}ºC </strong>
                  </v-card-text>
                  <v-card-text>
                   <strong>{{cuaca.main.temp_min | formatSuhu}}ºC </strong>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-dialog>
</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex'
export default {
  created () {
  },
  computed: {
    ...mapState([
      'weather','today'
    ]),
    weatherModal: {
      get () {
        return this.$store.state.weatherModal
      },
      set () {
        this.$store.commit('setWeatherModal', false)
      }
    }
  },
  data () {
    return {
      getWeather : this.weather
    }
  },
  filters: {
    formatDate (value) {
      let date = value
      let formatedDate = moment(date).format('ddd D MMM')
      return formatedDate
    },
    formatSuhu (value) {
      let string = value.toString()
      return string[0]+string[1]
    }
  }
}
</script>
<style scoped>

</style>


