<template>
  <v-app>
    <v-layout>
      <nav-drawer @updateDrawer="drawerOpen = $event" :drawer="drawerOpen" :list-items-props="[]" :width-drawer="350"></nav-drawer>
      <v-app-bar>
        <div class="ml-4">
          <v-tooltip
            location="top"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                @click="openDrawerHandler()"
                icon="mdi-menu-open">
              </v-btn>
            </template>
            <span>Abrir Menu</span>
          </v-tooltip>

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
      <v-main class="overflow-y-auto"
              :style="{ maxHeight: mainMaxHeight + 'px', background: theme.global.current.value.dark ? 'black' : 'white', width: '100%', height: '100%' }">
        <router-view/>
      </v-main>
      <AppFooter/>
    </v-layout>
  </v-app>
</template>

<script setup>

import {useTheme} from 'vuetify'
import NavDrawer from "@/components/NavDrawer.vue";

const theme = useTheme()
const themeIconBtnToggle = ref(theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night');

function toggleTheme() {

  themeIconBtnToggle.value = theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'

  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawerOpen = ref(true);

function openDrawerHandler() {
  drawerOpen.value = !drawerOpen.value
}

const mainMaxHeight = ref(window.innerHeight - 40)
const starMaxWidth = ref(window.innerWidth - 200)

function updateDimensions() {
  mainMaxHeight.value = window.innerHeight - 40 // Ajustar el valor según la altura de tu app-bar
  starMaxWidth.value = window.innerWidth - 200
}

onMounted(() => {
  window.addEventListener('resize', updateDimensions)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDimensions)
})


</script>

<style scoped>
</style>
