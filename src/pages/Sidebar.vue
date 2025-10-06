<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

defineProps<{
  toggleTheme: () => void;
  toggleSidebar: () => void;
}>();

function goToBio(){
  router.push('/bio');
}

function goToResume(){
  router.push('/resume');
}

function goToFunfact(){
  router.push('/funfact');
}

function goToSkills(){
  router.push('/skills');
}

function goToExperience(){
  router.push("/experience");
}

function goToHome(){
  router.push("/")
}

function goToReferences(){
  router.push("/references")
}
</script>

<template>


<button @click="goToHome(); toggleSidebar();">Welcome</button>
<button @click="goToResume(); toggleSidebar();">Resume</button>
<button @click="goToBio(); toggleSidebar();">Bio</button>
<button @click="goToExperience(); toggleSidebar();">Experience</button>
<button @click="goToSkills(); toggleSidebar();">Skills</button>
<button @click="goToFunfact(); toggleSidebar();">Fun Fact</button>
<button @click="goToReferences(); toggleSidebar();">References</button>
<button @click="toggleTheme(); toggleSidebar();">Change Theme</button>

</template>


<style scoped>
button{
  margin: 5px;
}

</style>