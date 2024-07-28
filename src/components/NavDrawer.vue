<template>
  <v-navigation-drawer  v-model="props.drawer" :width="widthDrawer" class="" app>
    <v-list>
      <v-list-item
        prepend-avatar="@/assets/yo.jpg"
        subtitle="adasmechristopher12@gmail.com"
        title="Crhistopher Adasme"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-menu-open" title="Ocultar Drawer" @click="emitUpdate()"></v-list-item>
      <v-list-item v-for="list in props.listItemsProps.length > 0 ? props.listItemsProps : listItemsDefault" :prepend-icon="list.icon" :title="list.title" :value="list.value" @click="emitUpdate();router.push(list.path)"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import router from "@/router";
import {defineProps} from 'vue'


const props = defineProps({
  widthDrawer: Number,
  listItemsProps: Array,
  drawer:Boolean,
})

import { defineEmits } from 'vue'

// Definir los eventos que el componente puede emitir
const emit = defineEmits(['updateDrawer'])

// Función para emitir el evento
const emitUpdate = () => {
  emit('updateDrawer', !props.drawer)
}

const listItemsDefault = ref([
  {
    icon: 'mdi-account',
    title: 'Sobre mi',
    value: 'myfiles',
    path: '/about-me'
  },
  {
    icon: 'mdi-account-school',
    title: 'Educacion',
    value: 'Educacion',
    path: '/experience-and-education'
  },
  {
    icon: 'mdi-briefcase',
    title: 'Experiencia laboral',
    value: 'Experiencia',
    path: '/experience'
  },
  {
    icon: 'mdi-folder',
    title: 'Proyectos',
    value: 'Proyectos',
    path: '/proyectos'
  },
])
</script>

<style scoped>

</style>
