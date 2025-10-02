<script setup lang="ts">
import rubiks from "../assets/rubiks.png"

</script>

<template>

<h1>Fun Fact:</h1>
<p>I can solve a Rubik's cube in under a minute</p>
<img :src="rubiks" alt="Rubik's cube time" />


</template>

<style scoped>
img{
  width: 300px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 0 10px var(--hover-color)
}
</style>