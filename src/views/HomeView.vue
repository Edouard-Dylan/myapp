<template>
  <div class="home">
    <p v-if="visible">Maintenant vous me voyez {{msg}}</p>
    <button v-on:click="foo()">
      ok
    </button>
    <TextComponent v-background:green color="green"/>
    <TextComponent v-background:white color="white"/>
    <TextComponent v-background/>
    <Todos/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TextComponent from '@/components/TextComponent.vue';
import Todos from '@/components/Todos.vue';


@Options({
  components: {
    TextComponent,
    Todos,
  },
  props: {
    msg: String
  },
})
export default class Home extends Vue {
    msg!: string
    visible = true;
    foo(){
      this.visible = !this.visible;
    }
}
</script>