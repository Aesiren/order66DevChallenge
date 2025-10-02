<script lang="ts" setup>


defineProps<{title: string, organization: string, location: string, timeframe: string, description: string, picture: string }>()

</script>

<template>
<div class="block">
  <div class="block-face front" :style="{backgroundImage: `url('${picture}')`}">
    <h2 class="title">{{ title }}</h2>
  </div>
  <div class="block-face back">
    -{{ organization }}<br/>
    -{{ location }}<br/>
    -{{ description }}
  </div>
</div>

</template>

<style scoped>
.block{
  width: 300px;
  height: 300px;
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
  background-size: cover;
  background-position: center;
  color: var(--hover-color);
  box-shadow: 0 0 10px var(--hover-color);

}

.title{
  background-color: var(--bg-color);
    color: var(--text-color);
  font-weight: 200;
}

.front {
  z-index: 2;
  background-color: transparent;
}

.back {
  color: var(--text-color);
  text-shadow: 0px 0px 5px var(--highlight-color);
  z-index: 1;
  opacity: 0;
}

.block:hover .front {
  filter: blur(4px);
  opacity: 0.4;

}

.block:hover .back {
  opacity: .6;
  z-index: 3;
}

</style>