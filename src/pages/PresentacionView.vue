<template>
  <div class="fill-height" style="width: 100%">
    <StarBackgroundComponent></StarBackgroundComponent>
    <div>
      <div class="d-flex justify-center">
        <v-img
          class="mb-4 mt-4"
          rounded="circle"
          max-width="250"
          max-height="250"
          src="@/assets/yo.jpg"
        />
      </div>
      <container-about-me></container-about-me>
      <container-my-contact class="pb-4"> </container-my-contact>
    </div>
  </div>
</template>

<script setup>
  //
import ContainerAboutMe from "@/components/ContainerAboutMe.vue";
  import ContainerMyContact from "@/components/ContainerMyContact.vue";
  import StarBackgroundComponent from "@/components/StarBackgroundComponent.vue";
</script>
