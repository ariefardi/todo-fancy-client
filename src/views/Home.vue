<template>
  <div class="home">
    <Navbar></Navbar>
    <!-- <Clock id="clock-geser"></Clock> -->
    <Card style="margin-top: -10px" ></Card>
    <Modal v-if="modal===true"></Modal>
    <WeatherModal></WeatherModal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Clock from '@/components/Clock.vue'
import Modal from '@/components/Modal.vue'
import WeatherModal from '@/components/WeatherModal.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar, 
    Card,
    Clock,
    Modal,
    WeatherModal
  },
  computed: {
    ...mapState([
      'todos','modal','weatherModal'
    ])
  },
  methods: {
    ...mapActions([
      'getTodos'
    ])
  },
  created () {
    if(!localStorage.hasOwnProperty('token')){
            this.$router.push('/login')
    }
    this.$store.dispatch('getTodos')
    this.$store.dispatch('getWeather')

  }
}
</script>
