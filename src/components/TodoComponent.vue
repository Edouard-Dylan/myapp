<template>    
    <input v-model="todo.done" type="checkbox" > 
    <label  v-on:dblclick="editTitle">{{ todo.title }}</label>
    <input v-if="editing" v-model="newTitle" v-on:keyup.enter="saveTitle" v-on:keyup.esc="cancelEdit" v-on:blur="cancelEdit">
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export class Todo {
    done:boolean;
    date!:Date;
    constructor(public title:string){
        this.done = false
    }
}

@Options({
    props: {
        todo: Todo
    }
})
export default class TodoComponent extends Vue {
    todo!: Todo
    editing = false;
    newTitle = '';

    editTitle() {
      this.editing = true;
      this.newTitle = this.todo.title;
    }

    saveTitle() {
      this.todo.title = this.newTitle;
      this.editing = false;
    }

    cancelEdit() {
      this.editing = false;
    }
}
</script>