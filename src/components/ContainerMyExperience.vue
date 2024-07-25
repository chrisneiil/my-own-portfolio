<template>
  <v-container class="my-5">
    <v-row justify="center">
      <v-col cols="12" md="12" lg="12">
        <v-card class="pa-5" outlined>
          <v-card-title>
            <v-icon left>mdi-briefcase</v-icon>
            <span class="headline">Experiencia Profesional</span>
          </v-card-title>
          <v-card-text>
            <v-timeline align-top>
              <v-timeline-item
                v-for="(item, index) in experience"
                :key="index"
                :color="item.color"
                :icon="item.icon"
              >
                <v-card class="elevation-2 hover-card pl-6" outlined>
                  <v-card-title class="headline">{{ item.position }}</v-card-title>
                  <v-card-subtitle>{{ item.period }}</v-card-subtitle>
                  <v-card-text>
                    <strong>{{ item.company }}</strong>
                    <ul>
                      <li v-for="(duty, i) in item.duties" :key="i">{{ duty }}</li>
                    </ul>
                    <h3 class="py-2">
                      Tecnologías:
                    </h3>
                    <div class="technologies-container d-flex flex-wrap">
                      <div v-for="(tech, i) in item.technologies" :key="i" class="technology-item d-flex align-items-center" :style="{ color: tech.color }">
                        <v-icon v-if="tech.icon.length > 0" :color="tech.color">{{ tech.icon }}</v-icon>
                        <span class="">{{ tech.technologie }}</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const experience = [
  {
    position: 'Programador full stack',
    company: 'Servicios Informáticos AionSoft Limitada',
    period: '2022-Actualidad',
    duties: [
      'Diseñar, desarrollar e implementar aplicaciones y servicios utilizando Java y Spring Boot',
      'Aplicar el modelo MVC para estructurar el código de manera modular y mantenible.',
      'Asegurar el rendimiento, calidad y capacidad de respuesta de las aplicaciones.',
      'Desarrollar interfaces de usuario interactivas y responsivas utilizando Vue.js 2 y 3',
      'Utilizar JavaScript y TypeScript para crear funcionalidades dinámicas y eficientes.',
      'Diseñar y gestionar bases de datos relacionales con MySQL.',
      'Optimizar consultas y estructuras de datos para mejorar el rendimiento.',
      'Trabajar estrechamente con otros desarrolladores, diseñadores y equipos de producto para implementar nuevas características y mejoras.',
      'Participar en revisiones de código y sesiones de planificación de proyectos.'
    ],
    color: 'primary',
    icon: 'mdi-briefcase',
    technologies: [
      { technologie: 'JavaScript', icon: 'mdi-language-javascript', color: '#F7DF1E' },
      { technologie: 'HTML', icon: 'mdi-language-html5', color: '#E34F26' },
      { technologie: 'CSS', icon: 'mdi-language-css3', color: '#1572B6' },
      { technologie: 'Vue.js 2 y 3', icon: 'mdi-vuejs', color: '#4FC08D' },
      { technologie: 'Vuetify 2 y 3', icon: 'mdi-vuetify', color: '#1867C0' },
      { technologie: 'Quasar', icon: '', color: '#1976D2' },
      { technologie: 'TypeScript', icon: 'mdi-language-typescript', color: '#3178C6' },
      { technologie: 'Java 1.8 - 22', icon: 'mdi-language-java', color: '#007396' },
      { technologie: 'SpringBoot', icon: '', color: '#6DB33F' },
      { technologie: 'MySQL', icon: 'mdi-database', color: '#4479A1' },
      { technologie: 'Git', icon: 'mdi-git', color: '#F05032' },
      { technologie: 'BitBucket', icon: 'mdi-bitbucket', color: '#2684FF' }
    ]
  }
]
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

.technologies-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technology-item {
  border: 2px solid;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
}
</style>
