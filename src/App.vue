<script setup lang="ts">
import Sidebar from './pages/Sidebar.vue'
import Logo from './components/Logo.vue'
import {ref} from 'vue'


const theme = ref('cyberpunk');

function toggleTheme(){
  theme.value = theme.value == 'cyberpunk' ? 'cthulu' : 'cyberpunk';
}
</script>

<template>
  <div class="main" :data-theme="theme">
    <nav>
      <button @click="toggleTheme">Change Theme</button>
    </nav>

    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="view">
      <RouterView />
    </div>
    <div class="logo" v-if="theme === 'cyberpunk'">
      <Logo :theme="{theme}"/>
    </div>
    <div class="logo" v-if="theme === 'cthulu'">
      <Logo :theme="{theme}"/>
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
  background-image: var(--bg-image);
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
  /* padding: 1.5em;
  width: 100%;
  height: 100%; */
  will-change: filter;
  transition: filter 300ms;
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



nav{
  border: 2px solid var(--border-color);
  height: 96%;
  grid-column: 2/2;
  grid-row: 1/1;
  justify-content: center;
  align-content: center;
  overflow: hidden;
}

nav > a + a{
  margin-left: 10px;
}

.sidebar {
  grid-column: 1/1;
  grid-row: 2/2;
  display: flex;
  height: 96%;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  border: 2px solid var(--border-color);
  overflow: hidden;
}

.view {
  grid-column: 2/2;
  grid-row: 2/2;
}

</style>
