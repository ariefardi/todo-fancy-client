import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import moment from 'moment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos (state,payload) {
      state.todos = payload
    }
  },
  actions: {
    getTodos (context) {
      console.log('axios get todo')
      axios.get('http://localhost:3000/todos')
      .then(({data})=>{
        console.log(data.todos)
        let result = data.todos
        context.commit('setTodos',result)
      })
    }
  }
})
