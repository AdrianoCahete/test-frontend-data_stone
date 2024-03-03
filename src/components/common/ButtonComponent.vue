<script setup lang="ts">
defineProps<{
  label: string
  icon?: string
}>()
</script>

<template>
  <button>{{ label }}</button>
</template>

<style lang="scss" scoped>
button {
  border: 0;
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: var(--button-color-primary);
  color: #fff;
  transition: 0.3s ease-in-out all;

  & ~ button {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: var(--button-color-primary-hover);
    transition: 0.3s ease-in-out all;
  }
}
</style>
