<template>
  <v-container class="my-5">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="6">
        <v-card class="py-5 hover-card" outlined>
          <v-card-title>
            <v-icon left>mdi-school</v-icon>
            <span class="headline">Educación</span>
          </v-card-title>
          <v-card-text class="mx-0 px-0 pr-3">
            <v-timeline align="start" side="end">
              <v-timeline-item
                v-for="(item, index) in education"
                :key="index"
                :color="item.color"
                :icon="item.icon"
              >
                <v-card class="elevation-2 hover-card" outlined>
                  <v-card-title class="headline">{{ item.institution }}</v-card-title>
                  <v-card-subtitle>{{ item.period }}</v-card-subtitle>
                  <v-card-text>{{ item.details }}</v-card-text>
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
const education = [
  {
    institution: 'Instituto profesional IPChile',
    period: '2022-2024',
    details: 'Carrera: Analista Programador Computacional. Título en trámite.',
    color: 'primary',
    icon: 'mdi-school'
  },
  {
    institution: 'Universidad de La Serena',
    period: '2017-2018',
    details: 'Carrera: Ingeniería en computación (no completada).',
    color: 'info',
    icon: 'mdi-school'
  },
  {
    institution: 'Colegio San Nicolás',
    period: '2011-2016',
    details: 'Educación media Científico/Humanista.',
    color: 'success',
    icon: 'mdi-school'
  }
]
</script>

<style scoped>
.headline {
  font-weight: bold;
  font-size: 20px;
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

@media (max-width: 600px) {
  .v-card-title {
    font-size: 18px;
  }

  .headline {
    font-size: 16px;
  }

  .v-card-subtitle {
    font-size: 14px;
  }
}
</style>
