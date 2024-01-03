<script setup lang="ts">
  import PageHomeSocial from './PageHome-Social.vue';
  import HomeTitle from './PageHome-Title.vue';

  import TelegramIcon from '@/assets/icon/telegram-color.svg';
  import FaIcon from '@/assets/icon/fa-color.png';
  import InstagramIcon from '@/assets/icon/instagram-color.png';
  import BlueskyIcon from '@/assets/icon/bluesky-color.png';
</script>

<template>
  <div class="page-home">
    <div class="page-home-content">
      <HomeTitle />

      <div class="page-home-socials">
        <PageHomeSocial href="https://t.me/JairS19" :icon="TelegramIcon" alt="Telegram" />
        <PageHomeSocial
          href="https://furaffinity.net/user/RoqueMapache1"
          :icon="FaIcon"
          alt="Furaffinity"
        />
        <PageHomeSocial
          href="https://instagram.com/roquemapache"
          :icon="InstagramIcon"
          alt="Instagram"
        />
        <PageHomeSocial
          href="https://bsky.app/profile/roquemapache.bsky.social"
          :icon="BlueskyIcon"
          alt="Bluesky"
        />
      </div>
    </div>

    <img class="image" src="@/assets/roque.jpg" />
  </div>
</template>

<style scoped lang="scss">
  .page-home {
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    .page-home-content {
      flex-grow: 1;

      .page-home-socials {
        width: 100%;
        height: 66%;
        padding: 1rem;

        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }
    .image {
      width: 100%;
      max-height: 20rem;
      object-fit: contain;
    }
  }
</style>
