<template>
  <v-container class="fill-height">
    <div>
      <div class="d-flex justify-center">
        <v-img
          class="mb-4"
          rounded="circle"
          max-width="250"
          max-height="250"
          src="@/assets/yo.jpg"
        />
      </div>
      <container-about-me></container-about-me>
      <container-my-contact></container-my-contact>
    </div>
  </v-container>
</template>

<script setup>
  //
import ContainerAboutMe from "@/components/ContainerAboutMe.vue";
  import ContainerMyContact from "@/components/ContainerMyContact.vue";
</script>
