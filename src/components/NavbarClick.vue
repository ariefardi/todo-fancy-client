<template>
  <v-toolbar id="navbar-geser" color="white" style="margin-right:200px">
    <v-toolbar-side-icon @click="openNav"></v-toolbar-side-icon>
    <v-toolbar-title>TODO LIST</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <label class="switch" id="toggle-geser" style="margin-top:0px">
        <input type="checkbox" checked>
        <span class="slider round"></span>
        </label>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
    export default {
        data () {
            return {
                tile: false
            }
        },
        methods: {
            openNav () {
                console.log('ini open nav')
                 document.getElementById("mySidenav").style.width = "250px";
                 document.getElementById("navbar-geser").style.marginLeft = "200px";
                 document.getElementById("card-geser").style.marginLeft = "250px";
                 document.getElementById("toggle-geser").style.marginRight = "250px";
                 document.getElementById("clock-geser").style.marginLeft = "250px";
                 document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            }
        }
    }
</script>

<style lang="scss">
#toggle-geser {
    transition: margin-right .5s;
    margin-left: 0px
}
#navbar-geser {
    transition: margin-left .5s;
    align-items: left;
}
#clock-geser {
  transition: margin-left .5s;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
