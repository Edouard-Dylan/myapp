<template>
    <div>
        <p>Mon texte est de couleur : {{color}}</p>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  props: {
    color: String
  }
})
export default class TextComponent extends Vue {
    color!: string
}
</script>