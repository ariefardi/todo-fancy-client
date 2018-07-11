<template>
<v-flex>
  <v-container class="clock-container" id="clock-container">
  <div class="clock-col">
    <v-flex>
    <p class="clock-day clock-timer">
    </p>
    <p class="clock-label">
      Day
    </p>
    </v-flex>
  </div>
  
  <v-flex>
  <div class="clock-col">
    <p class="clock-date clock-timer">
    </p>
    <p class="clock-label">
      Date
    </p>
  </div>
  </v-flex>
  <v-flex>
  <div class="clock-col">
    <p class="clock-months clock-timer">
    </p>
    <p class="clock-label">
      Month
    </p>
  </div>
  </v-flex>
  <v-flex>
  <div class="clock-col">
    <p class="clock-years clock-timer">
    </p>
    <p class="clock-label">
      Year
    </p>
  </div>
  </v-flex>
</v-container>
</v-flex>
</template>

<script>
import moment from 'moment'


export default {
created () {
  document.addEventListener('DOMContentLoaded', () =>
    requestAnimationFrame(updateTime)
  )
console.log('Jalan gak nih?')
  function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-date', "'" + moment().format("Do") + "'");
    document.documentElement.style.setProperty('--timer-months', "'" + moment().format("MMMM") + "'");
    document.documentElement.style.setProperty('--timer-years', "'" + moment().format("YYYY") + "'");
    requestAnimationFrame(updateTime);
  }
}
}
</script>

<style lang="scss" scoped >
#clock-container {
    min-height: 100px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10px
  }

.clock {
  &-day {
    &:before {
      content: var(--timer-day);
    }
  }
  &-date {
    &:before {
      content: var(--timer-date);
    }
  }
  &-months {
    &:before {
      content: var(--timer-months);
    }
  }
  &-years {
    &:before {
      content: var(--timer-years);
    }
  }
}

body {
  background: linear-gradient(45deg, #1870ed 0, #f18f88 100%);
  font-family: 'Montserrat', 'sans-serif';
  min-height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock {
  &-container {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #080808;
    border-radius: 5px;
    padding: 60px 20px;
    box-shadow: 1px 1px 5px rgba(255,255,255,.15), 0 15px 90px 30px rgba(0,0,0,.25);
    display: flex;
  }
  &-col {
    text-align: center;
    margin-right: 40px;
    margin-left: 40px;
    min-width: 90px;
    position: relative;
    &:not(:last-child):before,
    &:not(:last-child):after{
      content: "";
      background-color: rgba(255,255,255,.3);
      height: 5px;
      width: 5px;
      border-radius: 50%;
      display: block;
      position: absolute;
      right: -42px;
    }
    &:not(:last-child):before {
      top: 35%;
    }
    &:not(:last-child):after {
      top: 50%;
    }
  }
  &-timer {
    &:before {
      color: #fff;
      font-size: 4.2rem;
      text-transform: uppercase;
    }
  }
  &-label {
    color: rgba(255,255,255,.35);
    text-transform: uppercase;
    font-size: .7rem;
    margin-top: 10px;
  }
}

@media (max-width: 300px) {
  .clock-container {
    min-height: 100px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .clock-col {
    & + & {
      margin-top: 20px;
    }
    &:before,
    &:after {
      display: none!important;
    }
  }
}
</style>

