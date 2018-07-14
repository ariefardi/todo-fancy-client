import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    modal: false,
    status: '',
    deadline: '',
    todo: '',
    description: '',
    done: 0
  },
  mutations: {
    setTodos (state,payload) {
      state.todos = payload
    },
    setModal (state, payload) {
      state.modal = payload
    },
    setDeadline (state, payload) {
      state.deadline = payload
    },
    setStatus (state, payload) {
      state.status = payload
    },
    setTodo (state, payload) {
      state.todo = payload
    },
    setDesc (state, payload) {
      state.description = payload
    },
    pushNewFood(state, payload) {
      state.todos.push(payload)
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload,1)
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
            // console.log('id masuk yang cocok',i)
            result.push(temp[i])
          }
        }
        context.commit('setTodos',result)
      })
    },
    openModal (context) {
    console.log('add Todo')
    context.commit('setModal',true)
   
    },
    close (context) {
      context.commit('setModal',false)
    },
    addTodo (context) {
      console.log('addtodo')
      let obj = {
        todo : this.state.todo,
        deadline : this.state.deadline,
        status : this.state.status,
        description: this.state.description,
        userTodo : localStorage.getItem('idUser'),
        done : false,
        todoCreated : moment().format('LL'),
      }
      axios.post("http://localhost:3000/todos",obj)
      .then(({data})=> {
        console.log(data)
        swal('Berhasil menambahkan todo')
        this.state.modal = false
        context.commit('pushNewFood', data)
      })
      .catch(err=> {
        swal(err.message)
      })
    },
    deleteTodo (context, index) {
      console.log('dleteTodo', index)
      let query = this.state.todos[index]._id
      console.log(query)
      axios.delete('http://localhost:3000/todos/delete/'+query)
      context.commit('deleteTodo', index)
    }
  }
})
