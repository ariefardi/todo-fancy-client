import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    weather: [],
    today: '',
    modal: false,
    weatherModal: false,
    status: '',
    deadline: '',
    todo: '',
    description: '',
    doneTodo: 0
  },
  mutations: {
    setTodos (state,payload) {
      state.todos = payload
    },
    setWeather (state, payload) {
      state.weather = payload
      state.today = payload[0]
    },
    setModal (state, payload) {
      state.modal = payload
    },
    setWeatherModal (state, payload) {
      state.weatherModal = payload
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
    },
    setDone (state, payload) {
      state.doneTodo = payload
    },
    addDone (state, payload) {
      state.doneTodo += 1
      state.todos[payload].done = true
    }
  },
  actions: {
    getTodos (context) {
      console.log('axios get todo')
      axios.get('http://localhost:3000/todos')
      .then(({data})=>{
        let temp = data.todos
        let id = localStorage.getItem('idUser')
        let result = []
        for(var i=0;i<temp.length;i++) {
          if (temp[i].userTodo._id == id) {
            result.push(temp[i])
          }
        }
        let done = 0
        for(var i=0;i<result.length;i++) {
          if (result[i].done==true) {
            done++
          }
        }
        context.commit('setTodos',result)
        context.commit('setDone',done)
      })
    },
    openModal (context) {
    console.log('add Todo')
    context.commit('setModal',true)
   
    },
    openWeatherModal (context) {
      console.log('openWeather')
      context.commit('setWeatherModal',true)
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
        this.state.todo = ''
        this.state.deadline = ''
        this.state.status = ''
        this.state.description = ''
        context.commit('pushNewFood', data.todo)
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
    },
    addDone (context, index) {
      let query = this.state.todos[index]._id
      console.log(query, 'id')
      axios.put('http://localhost:3000/todos/updatedone/'+query,{done: true})
      .then(todo=> {
        console.log(todo)
      })
      context.commit('addDone',index)
      swal('done')
    },
    getWeather (context) {
      console.log('get weather')
      axios.get('http://localhost:3000/weather')
      .then(({data})=> {
        // console.log(data.list)
        let weather = data.weather
        // for(var i=0;i<data.list.length;i++){
        //   // console.log(data.list[i].dt_txt[11]+data.list[i].dt_txt[12])
        //   let temp = data.list[i].dt_txt[11]+data.list[i].dt_txt[12]
        //   if (temp=='09') {
        //     weather.push(data.list[i])
        //   }
        // }
        context.commit('setWeather', weather)
        // console.log(weather)
      })
    }
  }
})
