<template>
<v-container>
   <v-layout
    column
    justify-center 
    id="card-geser"
  >
    <v-flex xs12>
    <v-expansion-panel popout>
      <v-expansion-panel-content style="background-image:url(https://www.xmple.com/wallpaper/linear-blue-gradient-1920x1080-c2-00bfff-b0e0e6-a-15-f-14.svg)">
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar>
            <v-icon :color="messages.color" v-text="messages.icon">
            </v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only >
            <strong v-html="messages.name" ></strong>
            <span> ({{messages.total}}) </span>
          </v-flex>
          <v-flex no-wrap xs5 sm3 >
            <v-chip class="ml-0" label small :color="`${messages.color} lighten-4`">
              {{messages.new}} new
            </v-chip>
            <strong v-html="messages.title" ></strong>
          </v-flex>
        </v-layout>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
    
    <v-flex style="margin-top:20px">
    <v-expansion-panel popout>
      <v-expansion-panel-content style="background-image:url(https://www.xmple.com/wallpaper/linear-blue-gradient-1920x1080-c2-00bfff-b0e0e6-a-15-f-14.svg)">
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar>
            <v-icon :color="messages.color" v-text="messages.icon">
            </v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only >
            <strong v-html="messages.name" ></strong>
            <span> ({{messages.total}}) </span>
          </v-flex>
          <v-flex no-wrap xs5 sm3 >
            <v-chip class="ml-0" label small :color="`${messages.color} lighten-4`">
              {{messages.new}} new
            </v-chip>
            <strong v-html="messages.title" ></strong>
          </v-flex>
        </v-layout>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>

    <v-flex style="margin-top:20px">
    <v-expansion-panel popout>
      <v-expansion-panel-content style="background-image:url(https://www.xmple.com/wallpaper/linear-blue-gradient-1920x1080-c2-00bfff-b0e0e6-a-15-f-14.svg)">
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar>
            <v-icon :color="messages.color" v-text="messages.icon">
            </v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only >
            <strong v-html="messages.name" ></strong>
            <span> ({{messages.total}}) </span>
          </v-flex>
          <v-flex no-wrap xs5 sm3 >
            <v-chip class="ml-0" label small :color="`${messages.color} lighten-4`">
              {{messages.new}} new
            </v-chip>
            <strong v-html="messages.title" ></strong>
          </v-flex>
        </v-layout>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          <v-card style="background-color:white">
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-card>
          
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
  </v-layout>
    <v-btn
      color="pink"
      absolute
      middle
      right
      icon style="margin-right:70px;margin-top:-10px"
      large
      block
    >
      <v-icon>add</v-icon>
    </v-btn>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      messages: {
          color: 'red',
          icon: 'assignment',
          name: 'Todo',
          new: 'unread',
          total: 3,
          title: 'Todo-list'
      },
      lorem: 'Lorem ipsum Lorem Ipsum Lorem Ipsum',
      popoutexpan: ''
      }),
      methods: {
        testpop () {
          console.log('pop out')
          console.log(this.popoutexpan)
        }
      }
  }
</script>
<style lang="scss">
#card-geser {
  transition: margin-left .5s;
    padding: 0px;
    align-items: left;
}
</style>
