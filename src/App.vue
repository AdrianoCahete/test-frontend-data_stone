<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/produtos">Produtos</RouterLink>
      <RouterLink to="/clientes">Clientes</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>
