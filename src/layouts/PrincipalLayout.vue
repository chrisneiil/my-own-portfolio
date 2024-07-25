<template>
  <v-app>
    <nav-drawer :list-items-props="[]" :width-drawer="350"></nav-drawer>
    <v-app-bar>
      <div class="ml-4">
        Mi portafolio
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-end">
        <v-tooltip
          location="top"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              @click="toggleTheme()"
              :icon="themeIconBtnToggle">
            </v-btn>
          </template>
          <span>{{ theme.global.current.value.dark ? 'Cambiar a modo luminoso' : 'Cambiar a modo oscuro' }}</span>
        </v-tooltip>
      </div>
    </v-app-bar>
    <v-main class="overflow-y-auto" :style="{ maxHeight: mainMaxHeight + 'px', position: 'relative' }">
      <div class="stars" style="{ background: black}">
        <div v-for="n in numStars" :key="n" class="star" :style="generateStarStyle()"></div>
      </div>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>

import {useTheme} from 'vuetify'
import router from "@/router";
import NavDrawer from "@/components/NavDrawer.vue";

const mainMaxHeight = ref(window.innerHeight - 40)

function updateDimensions() {
  mainMaxHeight.value = window.innerHeight - 40 // Ajustar el valor según la altura de tu app-bar
}

onMounted(() => {
  window.addEventListener('resize', updateDimensions)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDimensions)
})


const theme = useTheme()
const themeIconBtnToggle = ref("mdi-weather-night");

function toggleTheme() {

  themeIconBtnToggle.value = theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'

  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}


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

</script>

<style scoped>
.stars {
  position: absolute;
  width: 80%;
  height: 90%;
  overflow: hidden;
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
