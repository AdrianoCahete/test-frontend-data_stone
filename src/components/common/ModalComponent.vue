<script setup lang="ts">
// https://vuejs.org/examples/#modal
// Normalmente eu uso lib de UI né.
import { ref } from 'vue'

defineProps<{
  isOpen: boolean
  title: string
}>()

const modal = ref(null)
</script>

<template>
  <div v-if="isOpen" class="modal_background">
    <div class="modal_container" ref="modal">
      <h1 class="modal_title">
        {{ title }}
      </h1>
      <div class="modal_content">
        <slot name="content"></slot>
      </div>
      <div class="modal_footer">
        <slot name="footer">
          <div>
            <button class="btn_ghost" @click="$emit('close')">Cancelar</button>
            <button class="btn_primary" @click="$emit('close')">Salvar</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal_background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

.modal_container {
  width: 300px;
  margin: 10vh auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.modal_title,
.modal_content,
.modal_footer {
  padding: 10px 20px;
}

.modal_title {
  margin-top: 0;
  color: var(--brand-color);
  background-color: #f2f2f2;
  font-size: 2.3rem;
}

.modal_content {
  font-size: 1.2rem;
}

.modal_footer {
  text-align: right;
  border-top: 1px solid #ccc;
}
</style>
