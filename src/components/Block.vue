<script lang="ts" setup>

defineProps<{skill: string, description: string }>()

</script>

<template>
<div class="block">
  <div class="block-face front">
    {{ skill }}
  </div>
  <div class="block-face back">
    {{ description }}
  </div>
</div>

</template>

<style scoped>
.block{
  width: 300px;
  height: 180px;
  perspective: 1000px;
  cursor: pointer;
}

.block-face{
  position: absolute;
  width: 100%;
  height: 75%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  background-color: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 0 10px var(--hover-color);

}

.front {
  z-index: 2;
  background-color: transparent;
}

.back {
  z-index: 1;
  opacity: 0;
}

.block:hover .front {
  filter: blur(4px);
  opacity: 0.4;

}

.block:hover .back {
  opacity: 1;
  z-index: 3;
}

</style>