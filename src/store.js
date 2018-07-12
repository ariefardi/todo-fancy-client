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
        let temp = data.todos
        let id = localStorage.getItem('idUser')
        console.log(id,'id user')
        console.log(temp[0].userTodo._id, 'ini temp')
        let result = []
        for(var i=0;i<temp.length;i++) {
          if (temp[i].userTodo._id == id) {
            console.log('id masuk yang cocok',i)
            result.push(temp[i])
          }
        }
        context.commit('setTodos',result)
      })
    }
  }
})
