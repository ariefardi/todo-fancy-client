<template>
<div id="myModal" class="modal" >
    <div class="modal-content" >
        <div class="modal-header">
            <span class="close"> <v-btn @click="close" icon small flat><v-icon small>close</v-icon></v-btn></span>
            <h2>Add Your Todo</h2>
        </div>
        <div class="modal-body">
            <label for="Todo"> Your Todo </label>
            <input type="text" placeholder="todo" v-model="inputTodo">
            <label for="Description"> Description </label>
            <input type="text" placeholder="description" v-model="inputDesc">

            <label for="inputStatus">status</label>
            <select id="inputStatus" name="inputStatus"  style="align:center;" v-model="inputStatus">
            <option value="" disabled selected>Select your option</option>
            <option  v-for="(status, index) in statusTodo" :key="index" > {{status}} </option>
            </select>

            <label for="inputDeadline">deadline</label>
            <select id="inputDeadline" name="inputDeadline"  style="align:center;" v-model="inputDeadline">
            <option value="" disabled selected>Your deadline (7 days)</option>
            <option  v-for="(deadline, index) in deadlines" :key="index" > {{deadline}} </option>
            </select>

            
        </div>
        <div class="modal-footer" >
            <v-btn @click="addTodo">add</v-btn>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data () {
            return {
                statusTodo : ['important', 'medium'],
                deadlines : [1,2,3,4,5]
            }
        },
        computed: {
            ...mapState([

            ]),
            inputDeadline: {
                get () {
                    return this.$store.state.deadline
                },
                set (value) {
                    this.$store.commit('setDeadline', value)
                }
            },
            inputStatus: {
                get () {
                    return this.$store.state.status
                },
                set (value) {
                    this.$store.commit('setStatus', value)
                }
            },
            inputDesc: {
                get () {
                    return this.$store.state.description
                },
                set (value) {
                    this.$store.commit('setDesc', value)
                }
            },
            inputTodo: {
                get () {
                    return this.$store.state.todo
                },
                set (value) {
                    this.$store.commit('setTodo', value)
                }
            },
        },
        methods: {
            ...mapActions([
                'close', 'addTodo'
            ]),
            add () {
                console.log('masuk',this.status)
            }
        },
        created () {
            this.$store.dispatch('getTodos')
        }
    }
</script>

<style scoped>
#status {
    border: 1px solid black;
}
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #555;
    outline: black;
}

input[type=text]:focus {
    background-color: lightblue;
}
.modal {
    /* display: none; Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

/* The Close Button */
.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}
</style>
