<script setup lang="ts">
import skills from "../components/Skills.ts"
import Block from "../components/Block.vue"

const skillList = skills;
</script>

<template>

<h1>Skills:</h1>
<div class="block-grid">
  <Block
    v-for="(item, index) in skillList"
    :key="index"
    :skill="item.skill"
    :description="item.description"
  />
</div>


</template>

<style scoped>
.block-grid{
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
  overflow: scroll;
  justify-items: center;
  width: 100vw;
}
</style>