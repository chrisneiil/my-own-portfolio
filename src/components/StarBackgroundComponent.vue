<script setup>

import {useTheme} from "vuetify";

const numStars = 100 // Número de estrellas

function generateStarStyle() {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 2
  return {
    left: `${x}%`,
    top: `${y}%`,
    animationDelay: `${delay}s`,
    background: theme.global.current.value.dark ? 'white' : 'black'
  }
}

const theme = useTheme()
</script>

<template>
  <div class="stars"  :style="{ background: theme.global.current.value.dark ? 'black' : 'white'}" >
    <div v-for="n in numStars" :key="n" class="star" :style="generateStarStyle()"></div>
  </div>
</template>

<style scoped>
.stars {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.star {
  z-index: 0;
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  opacity: 0;
  animation: twinkle 3s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>
