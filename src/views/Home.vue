<template>
  <div class="home">
    <Navbar></Navbar>
    <Clock id="clock-geser"></Clock>
    <Card style="margin-top: -10px" ></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Clock from '@/components/Clock.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar, 
    Card,
    Clock
  }
}
</script>
