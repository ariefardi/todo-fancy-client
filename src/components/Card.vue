<template>
<v-container>
   <v-layout
    column
    justify-center 
    id="card-geser"
  >
    <v-flex xs12>
    <v-expansion-panel popout @click="popOut">
      <v-expansion-panel-content id="outsidePanel" style="background-color:#EF5350">
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar>
            <v-icon :color="messages.color">
              folder
            </v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only >
            <strong style="text-decoration-color:yellow" > Todo</strong>
            <span> ({{messages.total}}) </span>
          </v-flex>
          <v-flex no-wrap xs5 sm3 >
            <v-chip class="ml-0" label small :color="`${messages.color} lighten-4`">
              {{messages.new}} new
            </v-chip>
            <strong v-html="messages.title" ></strong>
          </v-flex>
        </v-layout>


        <!-- star panel card -->
          <v-container>
            <v-layout
              column
              justify-center 
              id="card-geser"
            >
                <v-flex xs12>
                  <v-expansion-panel popout>
                    <v-expansion-panel-content id="insidePanel" style="background-color:#448AFF">
                      <v-layout slot="header" align-center row spacer>
                        <v-flex xs4 sm2 md1>
                         <v-avatar>
                           <v-badge color="red">
                            <span slot="badge">  ! </span>
                              <v-icon :color="messages.color">
                               assignment
                              </v-icon>
                           </v-badge>
                         </v-avatar>
                        </v-flex>
                         <v-flex sm5 md3 hidden-xs-only style="margin-left:10px">
                            <strong style="background-color:lightcoral">Important</strong>
                            <span> {{todo.date}} </span>
                         </v-flex>

                        <v-flex no-wrap xs5 sm3 align-center>
                          <v-chip class="ml-0" label small :color="`red lighten-2`">
                            Not Done Yet 
                          </v-chip>
                          <strong> Makan pagi di hacktiv8 </strong>
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
            </v-container>
          <!-- end todo panel-->

      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-flex>
    
  </v-layout>
    <v-btn
      color="pink"
      absolute
      middle
      right
      icon style="margin-right:100px;margin-top:-20px"
      large
      block
    >
      <v-icon>add</v-icon>
    </v-btn>
</v-container>
</template>

<script>
import moment from 'moment'
  export default {
    data: () => ({
      messages: {
          color: 'success',
          icon: 'assignment',
          name: 'Todo',
          new: 'progress',
          total: 3,
          title: '3/10'
      },
      lorem: 'Lorem ipsum Lorem Ipsum Lorem Ipsum',
      popoutexpan: '',
      todo: {
        name: 'Makan Pagi',
        date: moment().format('LT')
      }
      }),
      methods: {
        testpop () {
          console.log('pop out')
          console.log(this.popoutexpan)
        },
        popOut () {
          console.log('Jalan nih popout')
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
