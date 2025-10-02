<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import {useRouter} from 'vue-router';

const router = useRouter();

function goToResume(){
  router.push('/resume');
}
</script>

<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <h1>I'm Evan Bonk</h1>
    <button @click="goToResume">See Resume</button>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>