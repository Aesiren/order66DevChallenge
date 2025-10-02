<script setup lang="ts">
import skills from "../components/Skills.ts"
import experience from "../components/Experience.ts"
import bio from "../components/bio.ts"

const skillList = skills;
const expList = experience;
</script>

<template>
  <div class="resume">
<h1>MSgt Evan Bonk</h1>
<h2>Chief Innovation Officer</h2>
<h2>Space Base Delta 1</h2>
<h2>Bio:</h2>
<p>{{bio}}</p>
<h3>Skills:</h3>
<ul>
<li v-for="(item, index) in skillList" :key="index">
  {{ item.skill }}
</li>
</ul>
<h3>Experience:</h3>
<ul>
  <li v-for="(item, index) in expList" :key="index">
  {{ item.title }}
</li>
</ul>
  </div>

</template>

<style scoped>
.resume{
  width: 100%;
  justify-content: center;
}
</style>