<template>
    <div class="progress">
        <progress :max="todoList.length" :value="completed.length"></progress>
        <span>{{ completed.length }} out of {{ todoList.length }} completed</span>
    </div>
    <div class="buttons">
        <v-btn variant="tonal" @click="deleteAllItems">Delete all</v-btn>
        <v-btn variant="tonal" @click="removeAllDeleted">Clear completed</v-btn>
    </div>
    <div v-for="todo in todoList" :key="todo.id">
        <div class="content">
            <span :class="{ completed : todo.completed }">{{ todo.item }}</span>
            <div>
                <span class="completado" @click="toggleCompleted(todo.id)">&#10004;</span>
                <span class="eliminado" @click="removeItem(todo.id)">&#10060;</span>
            </div>
        </div>
    </div>
    <div class="buttons2">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        <button @click="orderByItem">Order</button>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useTodoListStore } from '../stores/TodoList';

const store = useTodoListStore()
const { todoList, completed } = storeToRefs(store)
const { toggleCompleted, deleteAllItems, removeItem, removeAllDeleted, initLocalStorage, orderByItem } = store
initLocalStorage()

</script>
<style scoped>
.buttons{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}
.buttons2{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0.5em 0 0 0;
}
.buttons2 >button:not(:last-child){
    margin-right: 1em;
}
.buttons2 >button{
    color: rgba(0, 0, 0, 0.5);
}
.completed{
    text-decoration: line-through;
    color: brown;
}
.eliminado{
    margin-left: 0.5em;
}
.completado:hover, .eliminado:hover{
    cursor: pointer;
}
.content{
    margin: 0.5em 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(14, 189, 189, 0.2);
    padding: 0.5em 1em;
    border-radius: 0.5em;
}
.progress{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0.5em;
}
</style>