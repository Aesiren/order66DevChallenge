<script lang="ts" setup>
import CthuluLogo from "../assets/EMB-cthulu-logo.png"
// import CthuluBG from "../assets/EMB-cthulu-bg.png"
import CyberLogo from "../assets/EMB-cyberpunk-logo.png"
// import CyberBG from "../assets/EMB-cyberpunk-bg.png"

const props = defineProps<{theme: {theme: string}}>()

// const background = props.theme.theme === 'cyberpunk' ? CyberBG : CthuluBG;
const EMBlogo = props.theme.theme === 'cyberpunk' ? CyberLogo : CthuluLogo;
</script>


<template>

<div class="content">
  <div class="logo">
    <img :src="EMBlogo" alt="EMB logo" />
  </div>
  <!-- <div class="bg">
    <img :src="background" alt="logo background" />
  </div> -->
</div>

</template>



<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--bg-color);
  background-image: ; */
  perspective: 1000px;

}


.logo {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 100%;
  height: 100%;
  animation: rotate3D 5s linear infinite;
  transform-style: preserve-3d;
}

@keyframes rotate3D{
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);}
  100% {transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg);}
}

.bg{
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.bg img {
  width: 100%;
  height: 100%;
  animation: none;
}



</style>