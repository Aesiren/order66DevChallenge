<script setup lang="ts">
import Sidebar from './pages/Sidebar.vue'
import Logo from './components/Logo.vue'
import {ref} from 'vue'


const theme = ref('cyberpunk');
let sidebarView = ref(false);

function toggleTheme(){
  theme.value = theme.value == 'cyberpunk' ? 'cthulu' : 'cyberpunk';
}

function toggleSidebar(){
  sidebarView.value = !sidebarView.value;
}

    document.addEventListener("mousemove", (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const offsetX = (x - 0.5) * 20;
      const offsetY = (y - 0.5) * 20;
      const appEl = document.getElementById("back-bg");
      if (appEl) {
        appEl.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
      }
    });


</script>

<template>
  <div class="main" :data-theme="theme">

    <div id="sidebar" :style="{visibility: sidebarView ? 'visible' : 'hidden'}">
      <Sidebar :toggleTheme="toggleTheme" :toggleSidebar="toggleSidebar"/>
    </div>
    <div class="view">
      <RouterView />
    </div>
    <div class="background">
      <div id="back-bg"></div>
      <div id="front-bg"></div>
    </div>
    <div class="logo" v-if="theme === 'cyberpunk'">
      <Logo :theme="{theme}" @click="toggleSidebar"/>
    </div>
    <div class="logo" v-if="theme === 'cthulu'">
      <Logo :theme="{theme}" @click="toggleSidebar"/>
    </div>

  </div>

</template>

<style scoped>
.main {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 15% 90%;
  grid-template-rows: 10% 90%;
  background: var(--bg-color);
  color: var(--text-color);
  overflow: hidden;
}

.logo {
  grid-column: 1/1;
  grid-row: 1/1;
  width: 100px;
  height: 100%;
  justify-self: center;
  align-self: center;
  margin: 10px;
  will-change: filter;
  transition: filter 300ms;
  z-index: 5;
}
.logo:hover {
  filter: drop-shadow(0 0 2em var(--bg-color));
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
body{
  background-color: var(--bg-color);
}

#sidebar {
  grid-column: 1/1;
  grid-row: 2/2;
  display: flex;
  height: 96%;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  border: 2px solid var(--border-color);
  background-color: color-mix(in srgb, var(--bg-color), transparent 20%);
  overflow: hidden;
  visibility: hidden;
  z-index: 5;
}

.view {
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: 4;
  width: 100%;
  background-color: color-mix(in srgb, var(--bg-color), transparent 10%);
  background-clip: content-box;
  justify-self: center;
}

.background{
  grid-column: 1/3;
  grid-row: 1/3;
  z-index: 0;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.background #back-bg{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: var(--back-bg);
  background-position: bottom center;
  background-repeat: no-repeat;
  z-index: 0;
}

.background #front-bg{
  width: 100%;
  height: 100%;
  background-image: var(--front-bg);
  background-position: bottom center;
  background-repeat: no-repeat;
  z-index: 1;
}

</style>
