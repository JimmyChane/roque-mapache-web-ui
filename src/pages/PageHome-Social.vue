<script setup lang="ts">
  defineProps({
    href: { type: String, required: true },
    icon: { type: String, required: true },
    alt: { type: String, required: true },
  });
</script>

<template>
  <a class="page-home-social" target="_blank" :href="href">
    <img :src="icon" :alt="alt" />
  </a>
</template>

<style scoped lang="scss">
  .page-home-social {
    object-fit: contain;
    & > img {
      width: 2rem;
      height: 2rem;
    }
  }
</style>
