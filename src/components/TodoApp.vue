<template>
    <div class="todo-app">
        <TodoForm />
        <TodoList />
    </div>
</template>
<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

</script>
<style scoped>
.todo-app{
    max-width: 40%;
    margin: 5em auto;
    padding: 1em;
    background-color: darkslategray;
    color: white;
    border-radius: 0.5em;
}
</style>