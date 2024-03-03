<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderComponent from './components/common/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
