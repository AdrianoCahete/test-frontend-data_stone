<script setup lang="ts">
defineProps<{
  label: string
  icon?: string
  type?: string
  action?: string
}>()
</script>

<template>
  <button @click="$emit('action')" :class="type ? `btn_${type}` : 'btn_primary'">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped></style>
