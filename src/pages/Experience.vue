<script setup lang="ts">
import experience from "../components/Experience.ts"
import Card from '../components/Card.vue'

</script>

<template>

<h1>Experience:</h1>

<div class="block-grid">
  <Card
    v-for="(item, index) in experience"
    :key="index"
    :title="item.title"
    :organization="item.organization"
    :location="item.location"
    :timeframe="item.timeframe"
    :description="item.description"
    :picture="item.picture"
  />
</div>

</template>

<style scoped>
.exp-item{
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}
.exp-item:hover{
  background: var(--highlight-color);
}

.block-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
}
</style>