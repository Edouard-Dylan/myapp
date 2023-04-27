<template>
    <select v-model="filter">
      <option disabled value="">Please select one</option>
      <option value='faites'>faites</option>
      <option value='à faire'>à faire</option>
      <option value='toutes'>toutes</option>
    </select>
    <ul>
        <li v-for="(item,index) in filteredList" :key="index">
            <TodoComponent :todo="item"/>
            <button @click="todoDelete(index)">Suppr</button>
        </li>
    </ul>
    <input v-model="addTodoText" placeholder="Exemple" />
    <button v-on:click="(event) => addTodo()">
        Ajouter tâche
    </button>
    <button v-on:click="(event) => deleteAll()">
        supprimer toutes les tâches
    </button>
    <footer v-if="validTasks() > 0">
        <span>Il reste : {{ validTasks() }} tâches à faire.</span>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import  TodoComponent, { Todo } from '@/components/TodoComponent.vue';

@Options({
    components: {
        TodoComponent
    }
})
export default class Todos extends Vue {
    todoList = [new Todo("Faire une liste"), new Todo("Faire d'autres listes"), new Todo("Faire une todo liste"), new Todo("Faire d'autre truc")]
    addTodoText!: string;
    filter!: string;
    addTodo(){
        this.todoList.push(new Todo(this.addTodoText));
    }
    validTasks(){
        let num = 0;
        this.todoList.forEach(todo => {
            if (!todo.done)
                num++;
        });
        return num;
    }
    get filteredList(){
        if (this.filter === 'à faire') {
            return this.todoList.filter(item => !item.done);
        } else if (this.filter === 'faites') {
            return this.todoList.filter(item => item.done);
        } else {
            return this.todoList;
        }
    }
    todoDelete(index: number){
        this.todoList.splice(index, 1);
    }
    deleteAll(){
        this.todoList = [];
    }
}
</script>
