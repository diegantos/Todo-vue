import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList' , {
    state: () => ({
        todoList: [],
        id: 0,
        completed: []
    }),
    getters:{
        orderByItem(){
            return this.todoList = this.todoList.sort((a, b) => a.item - b.item)
        }
    },
    actions:{
        addItem( itemAdd ){
            this.todoList.push({ item: itemAdd, id: this.id++, completed: false})
            this.updatedStorage()
        },
        removeItem( itemDel ){
            this.todoList = this.todoList.filter((object) => { return object.id !== itemDel})
            this.completedTodos()
            this.updatedStorage()
        },
        deleteAllItems(){
            this.todoList = []
            this.completedTodos()
            this.updatedStorage()
        },
        toggleCompleted( itemTog ){
            const todo = this.todoList.find((obj) => obj.id === itemTog)
            if(todo){
                todo.completed = !todo.completed
            }
            this.completedTodos()
        },
        removeAllDeleted(){
            this.todoList = this.todoList.filter((object) => object.completed === false)
            this.completedTodos()
            this.updatedStorage()
        },
        completedTodos(){
            this.completed = this.todoList.filter((object) => object.completed === true)
        },
        updatedStorage(){
            window.localStorage.setItem('saved', JSON.stringify(this.todoList))
        },
        initLocalStorage(){
            const saved = JSON.parse(window.localStorage.getItem('saved'))
            console.log(saved)
            this.todoList = saved
        }
    },
})