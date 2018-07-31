<template>
<v-container>
   <v-layout
    column
    justify-center 
    id="card-geser"
  >
    <v-flex xs12>
    <v-expansion-panel popout >
      <v-expansion-panel-content class="outsidePanel" style="background-color:#EFFC5350">
        <v-layout slot="header" align-center row spacer>
          <v-flex xs4 sm2 md1>
            <v-avatar>
            <v-icon>
              folder
            </v-icon>
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only >
            <strong style="text-decoration-color:yellow" > Todo</strong>
            <span> ({{todos.length}}) </span>
          </v-flex>
          <v-flex no-wrap xs5 sm3 >
            <v-chip class="ml-0" label small color="red lighten-4`">
              Todo
            </v-chip>
            <strong> {{doneTodo}}/{{todos.length}} </strong>
          </v-flex>
        </v-layout>


        <!-- star panel card -->
        <div id="panelInside" >
          <v-container v-for="(todo, index) in todos" :key="index">
            <v-layout
              column
              justify-center 
              id="card-geser"
            >
                <v-flex xs12>
                  <v-expansion-panel popout>
                    <v-expansion-panel-content class="insidePanel" style="background-color:#F7B733">
                      <v-layout slot="header" align-center row spacer>
                        <v-flex xs4 sm2 md1>
                         <v-avatar>
                           <v-badge color="green" v-if="todo.done">
                            <span slot="badge"> <v-icon>done</v-icon> </span>
                              <v-icon :color="messages.color">
                               assignment
                              </v-icon>
                           </v-badge>
                           <v-badge color="red" v-else>
                            <span slot="badge">  ! </span>
                              <v-icon :color="messages.color">
                               assignment
                              </v-icon>
                           </v-badge>
                         </v-avatar>
                        </v-flex>
                         <v-flex v-if="todo.status=='important'" sm5 md3 hidden-xs-only style="margin-left:10px">
                            <strong  style="background-color:lightcoral">{{todo.status}}</strong>
                            <span> {{todo.todoCreated}} </span>
                         </v-flex>
                          <v-flex v-else sm5 md3 hidden-xs-only style="margin-left:10px">
                            <strong  style="background-color:#FFEE58">{{todo.status}}</strong>
                            <span> {{todo.todoCreated}} </span>
                         </v-flex>

                        <v-flex no-wrap xs5 sm3 align-center>
                          <v-chip class="ml-0" label small :color="`green lighten-2`" v-if="todo.done">
                            {{todo.todo}}
                          </v-chip>
                          <v-chip class="ml-0" label small :color="`red lighten-2`" v-else>
                            {{todo.todo}} 
                          </v-chip>
                          <strong v-if="todo.done"> Done </strong>
                          <strong v-else> Not Done Yet </strong>
                        </v-flex>
                        </v-layout>

                        <v-card style="background-color:white">
                          <v-divider></v-divider>
                          <v-card-text v-text="todo.description"></v-card-text>
                          <v-card-text> dont forget your deadline at {{todo.deadline}}</v-card-text>
                          <v-card-actions>
                            <v-flex>
                            <v-btn small> update </v-btn>
                            <v-btn @click="deleteTodo(index)" small> delete </v-btn>
                            <v-btn @click="addDone(index)" small> mark as done </v-btn>
                            </v-flex>
                          </v-card-actions>
                        </v-card>
                      
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
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
      icon style="margin-right:5%;margin-top:-1.5%"
      large
      block
      @click="openModal"
    >
      <v-icon>add</v-icon>
    </v-btn>
</v-container>
</template>

<script>

import moment from 'moment'
import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    messages: {
        color: 'success',
        icon: 'assignment',
    },
    lorem: 'Lorem ipsum Lorem Ipsum Lorem Ipsum',
    popoutexpan: '',
    todo: {
      name: 'Makan Pagi',
      date: moment().format('LT')
    }
    }),
  computed: {
  ...mapState([
    'todos','doneTodo'
  ]),
  totalDone () {
    return this.$store.state.doneTodo
  }
  },
  methods: {
    ...mapActions([
      'getTodos','openModal','deleteTodo','addDone', 'getDoneTodo'
    ])
  },
  created () {
  },
  mounted () {
    this.$store.dispatch('getTodos')
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
