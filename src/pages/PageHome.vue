<script setup lang="ts">
  import HomeTitle from './PageHome-Title.vue';
</script>

<template>
  <div class="page-home">
    <div class="page-home-content">
      <HomeTitle />

      <div class="page-home-socials">
        <a target="_blank" href="https://t.me/JairS19">
          <img src="@/assets/icon/telegram-color.svg" alt="Telegram" />
        </a>
        <a target="_blank" href="https://furaffinity.net/user/RoqueMapache1">
          <img src="@/assets/icon/fa-color.png" alt="Furaffinity" />
        </a>
        <a target="_blank" href="https://instagram.com/roquemapache">
          <img src="@/assets/icon/instagram-color.png" alt="Instagram" />
        </a>
        <a target="_blank" href="https://bsky.app/profile/roquemapache.bsky.social">
          <img src="@/assets/icon/bluesky-color.png" alt="Bluesky" />
        </a>
      </div>
    </div>

    <img class="image" src="@/assets/trim.jpg" />
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

        & > a {
          & > img {
            width: 2rem;
            height: 2rem;
          }
          object-fit: contain;
        }
      }
    }
    .image {
      width: 100%;
      max-height: 20rem;
      object-fit: contain;
    }
  }
</style>
