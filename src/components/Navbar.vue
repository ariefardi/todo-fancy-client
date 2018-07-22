<template>
<div>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
  <a href="#" @click="openWeatherModal" >Check Weather</a>
  <a href="#" @click="logout">Logout</a>
</div>
  <NavbarClick></NavbarClick>
</div>
</template>
<script>
import NavbarClick from '@/components/NavbarClick.vue'
import swal from 'sweetalert';
import {mapActions} from 'vuex'
    export default {
        components: {
            NavbarClick
        },
        methods: {
            ...mapActions([
                'openWeatherModal'
            ]),
            testBtn () {
                console.log('testbtn')
            },
            closeNav () {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("card-geser").style.marginLeft = "0";
                 document.getElementById("navbar-geser").style.marginLeft = "0px";
                 document.getElementById("toggle-geser").style.marginRight = "0px";
                //  document.getElementById("clock-geser").style.marginLeft = "0px";
                //  document.getElementById("clock-geser").style.marginRight = "0px";
            },
            logout () {
                console.log('logout')
                localStorage.clear();
                swal('Kamu berhasil logout')
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss">
h2 {
    font-family: "Ubuntu", sans-serif;
}
body {
    align-content: left
}
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

#main {
    transition: margin-left .5s;
    padding: 16px;
    align-items: left;
    margin-left: -500px
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
