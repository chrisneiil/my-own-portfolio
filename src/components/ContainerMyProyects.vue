<template>
  <v-container class="">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8" sm="8" >
        <v-card class="" outlined>
          <v-card-title>
            <v-icon left>mdi-folder-open</v-icon>
            <span class="headline">Mis Proyectos</span>
          </v-card-title>
          <v-card-text>
            <div v-if="myProjects.length > 0">
              <v-row>
                <v-col
                  v-for="(project, index) in myProjects"
                  :key="index"
                  cols="12"
                  md="6"
                >
                  <v-card class="hover-card" @click="goToProject(project.url)">
                    <v-card-title>{{ project.name }}</v-card-title>
                    <v-img :src="getImageUrl(project.img)" :alt="project.name" class="responsive-img"></v-img>
                    <v-card-text>{{ project.description }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <p class="pl-10">
                Proyectos sin publicar, puedes revisarlos en mi
                <span
                  style="color: cornflowerblue"
                  @click="goToProject('https://github.com/chrisneiil')"
                  class="cursor-pointer"
                >
                  github
                  <v-icon>mdi-github</v-icon>
                </span>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12"  md="10" lg="8" sm="8" class="mt-5">
        <v-card class="" outlined>
          <v-card-title>
            <v-icon left>mdi-folder-account</v-icon>
            <span class="headline">Proyectos Colaborado</span>
          </v-card-title>
          <v-card-text>
            <div v-if="collaboratedProjects.length > 0">
              <v-row>
                <v-col
                  v-for="(project, index) in collaboratedProjects"
                  :key="index"
                  cols="12"
                  md="6"
                >
                  <v-card class="hover-card" @click="goToProject(project.url)">
                    <v-card-title class="justify-center">{{ project.name }}</v-card-title>
                    <v-card-text align="center">
                      <v-img
                        class="responsive-img"
                        :src="getImageUrl(project.img)"
                        :alt="project.name"
                      ></v-img>
                    </v-card-text>
                    <v-card-text class="text-center">{{ project.description }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <p class="pl-10">Aún no hay proyectos por mostrar</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const myProjects = ref([])

const collaboratedProjects = ref([
  {
    name: 'Piu metrics',
    description: 'El proyecto Piu Metrics es una plataforma en línea diseñada para jugadores de Pump It Up. Permite a los usuarios recolectar y registrar sus récords, buscar récords de canciones, compararse con otros jugadores y organizar enfrentamientos para determinar posiciones de ganadores. La aplicación fue desarrollada con Vue 3 y Vuetify 3 en el frontend y Java con Spring Boot en el backend.',
    img: 'piuMetrics.png',
    url: 'https://beta.piumetrics.com/'
  },
  {
    name: 'CBRLS',
    img: 'cbrlswebpage.png',
    description: 'El proyecto consistió en una aplicación utilizando Vue 2 para el frontend y Spring Boot para el backend. Participe en todas las fases, desde el análisis y diseño, pasando por el desarrollo y pruebas, hasta la implementación y mantenimiento. El resultado fue una aplicación más eficiente y segura, con una mejor experiencia de usuario.',
    url: 'https://cbrls.cl/'
  },
  {
    name: 'CBRCQ',
    img: 'cbrcqWeb.png',
    description: 'El Conservador de Bienes Raíces de Coquimbo, disponible en cbrcoquimbo.cl, ofrece servicios similares al de La Serena, adaptado para la región de Coquimbo. Esta entidad es responsable de la inscripción y el registro de propiedades, hipotecas, gravámenes y prohibiciones.',
    url: 'https://cbrcoquimbo.cl/'
  }
])

function goToProject(url) {
  window.open(url, '_blank')
}

function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<style scoped>
.headline {
  font-weight: bold;
  font-size: 24px;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
}

.v-card-title {
  display: flex;
  align-items: center;
}

.v-icon {
  margin-right: 10px;
}

.responsive-img {
  max-width: 100%;
  height: auto;
}
</style>
