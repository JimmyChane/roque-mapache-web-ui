<script setup lang="ts">
  const title = 'Roque Mapache';
</script>

<template>
  <div class="page-home-title">
    <h1>{{ title }}</h1>
    <!-- <span>{{ title }}</span> -->
  </div>
</template>

<style scoped lang="scss">
  .page-home-title {
    font-size: 5em;
    font-weight: 900;
    position: relative;
    overflow: hidden;
    padding: 1rem;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > h1 {
      font-size: 1em;
      font-weight: inherit;
    }
    & > span {
      opacity: 0.08;
      position: absolute;
      bottom: 0.5em;
      left: 1em;
      pointer-events: none;
    }
  }
</style>
