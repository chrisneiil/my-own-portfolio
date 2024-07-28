<script setup>

import ContainerAboutMe from "@/components/ContainerAboutMe.vue";
import ContainerMyContact from "@/components/ContainerMyContact.vue";
import ContainerMyEducation from "@/components/ContainerMyEducation.vue";
import StarBackgroundComponent from "@/components/StarBackgroundComponent.vue";
</script>

<template>
  <div class="fill-height justify-center">
    <StarBackgroundComponent></StarBackgroundComponent>
    <div>
      <container-my-education></container-my-education>
    </div>
  </div>
</template>

<style scoped>

</style>
