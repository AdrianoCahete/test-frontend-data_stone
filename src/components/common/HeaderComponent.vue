<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="brand">
      <img alt="Logo" src="@/assets/logo.svg" />
    </RouterLink>
    <div class="header_nav">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/produtos">Produtos</RouterLink>
        <RouterLink to="/clientes">Clientes</RouterLink>
      </nav>
      <div class="header_nav-user-info">User</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  height: var(--header-height);
  align-items: center;
  border-bottom: 1px solid #ccc; /* TODO: Move/get from vars */
  justify-content: space-between;
  padding: 0 var(--content-margin);

  .brand {
    display: flex;

    & > img {
      height: calc(var(--header-height) - (var(--content-margin) * 2)); /* (4rem  - (1rem * 2))*/
      width: auto;
    }
  }

  .header_nav {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.4rem;

    nav {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 1.4rem;

      > a {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        height: inherit;
        text-decoration: none;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        transition: 0.5s ease-in-out all;

        &:hover {
          background-color: #f2f2f2;
          transition: 0.5s ease-in-out all;
        }

        &.router-link-active:not(.brand) {
          color: var(--brand-color);
          border-bottom: 2px solid var(--brand-color);
          pointer-events: none;
        }
      }
    }

    .header_nav-user-info {
      display: none; // Hidden by now
    }
  }
}
</style>
