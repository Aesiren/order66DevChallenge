<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();

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

<button @click="goToHome">Welcome</button>
<button @click="goToResume">Resume</button>
<button @click="goToBio">Bio</button>
<button @click="goToExperience">Experience</button>
<button @click="goToSkills">Skills</button>
<button @click="goToFunfact">Fun Fact</button>
<button @click="goToReferences">References</button>

</template>


<style scoped>
button{
  margin: 5px;
}

</style>