<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Home</h1>
    <div class="home blocks">
      <div class="block_dash">Block resume</div>
      <div class="block_links">
        <RouterLink to="/produtos">Produtos</RouterLink>
        <RouterLink to="/clientes">Clientes</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  flex-direction: column;

  .block_dash {
    display: none; // Hidden for now :)
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 10px;
  }

  .block_links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60svh;

    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 10px;
      text-decoration: none;
      color: #000;

      &:first-of-type {
        margin-right: 2rem;
      }

      &:hover {
        background-color: #ccc;
      }
    }
  }
}
</style>
