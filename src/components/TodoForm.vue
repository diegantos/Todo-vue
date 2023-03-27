<template>
    <v-card class="card" text="Write here something" variant="tonal">
        <form 
            class="form" 
            @click.prevent="addItemAndClear( todo )">
            <v-text-field class="input" v-model="todo" label="Introduce new item here" variant="outlined"></v-text-field>
            <button><v-btn variant="tonal">Add</v-btn></button>
        </form>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/TodoList';

const todo = ref('')
const store = useTodoListStore()

const addItemAndClear = ( item ) => {
    if( item === ''){
        return
    }
    store.addItem( item )
    todo.value = ''
}

</script>
<style scoped>
.card{
    padding: 1em;
    background-color: darkslategray;
    color: white;
}
.form{
    text-align: center;
}
.input{
    border-radius: 0.5em;
}
</style>