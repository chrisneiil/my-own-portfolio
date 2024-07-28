<template>
  <v-container class="pb-4 pt-0 mt-0">
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <v-card class="pa-5 hover-card" outlined @click="openLink('https://github.com/chrisneiil')">
          <v-card-title>
            <span class="headline">GitHub</span>
          </v-card-title>
          <v-card-text>
            <div>
              <v-icon>mdi-github</v-icon>
              <span class="ml-1">chrisneiil</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="pa-5 hover-card" outlined @click="openLink('https://www.linkedin.com/in/crhistopher-neil-adasme-cortes-a15b942a6/')">
          <v-card-title>
            <span class="headline">Linkedin</span>
          </v-card-title>
          <v-card-text>
            <div>
              <v-icon>mdi-linkedin</v-icon>
              <span class="ml-1">Crhistopher Neil Adasme Cortes</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="pa-5 hover-card" outlined @click="openLink('mailto:adasmechristopher12@gmail.com')">
          <v-card-title>
            <span class="headline">Gmail</span>
          </v-card-title>
          <v-card-text>
            <div>
              <v-icon>mdi-email</v-icon>
              <span class="ml-1">adasmechristopher12@gmail.com</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
function openLink(url) {
  window.open(url, '_blank');
}
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.no-underline {
  text-decoration: none;
  color: inherit;
}
</style>
