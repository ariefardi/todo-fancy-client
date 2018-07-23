<template>
  <v-toolbar id="navbar-geser" style="margin-right:200px;background-color:#EF5350">
    <v-toolbar-side-icon @click="openNav"></v-toolbar-side-icon>
    <v-toolbar-title> <h2>  TODO LIST </h2></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <label class="switch" id="toggle-geser" style="margin-top:15%">
        <input type="checkbox" checked @click="checkBox" id="myCheck">
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
                 document.getElementById("toggle-geser").style.marginTop = "10px";
                //  document.getElementById("clock-geser").style.marginLeft = "250px";
            },
            checkBox () {
              console.log('jalan')
              let checkKotak = document.getElementById("myCheck")
              if (checkKotak.checked) {
                console.log('true')
                
                var x = document.getElementById("panelInside").getElementsByClassName("insidePanel");
                console.log(x[1])

                for(var i=0;i<x.length;i++){
                  x[i].style.backgroundColor = "#F7B733"
                }
                document.getElementsByClassName("outsidePanel")[0].style.backgroundColor = "#EFFC5350"
                // document.getElementsByClassName("insidePanel")[0].style.backgroundColor = "#448AFF"
                document.getElementById("bodyChange").style.backgroundColor = "#4ABDAC"
                document.getElementById("navbar-geser").style.backgroundColor = "#EF5350"
              }
              else {
                console.log('false')
                var x = document.getElementById("panelInside").getElementsByClassName("insidePanel");
                console.log(x.length)
                for(var i=0;i<x.length;i++){
                  x[i].style.backgroundColor = "#3b5998"
                }
                document.getElementsByClassName("outsidePanel")[0].style.backgroundColor = "#8b9dc3"
                // document.getElementsByClassName("insidePanel")[0].style.backgroundColor = "#EF5350"
                document.getElementById("bodyChange").style.backgroundColor = "#dfe3ee"
                document.getElementById("navbar-geser").style.backgroundColor = "#3b5998"
              }
            }
        }
    }
</script>

<style lang="scss">
h2 {
  text-decoration-color: whitesmoke
}
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
  margin-top: 30px
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
