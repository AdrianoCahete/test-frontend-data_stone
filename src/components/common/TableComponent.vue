<script setup lang="ts">
defineProps<{
  tline: Object
}>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Ativo</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Prod1</td>
        <td>Sim</td>
        <td>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
      </tr>
      <tr>
        <td>Prod2</td>
        <td>Não</td>
        <td>
          <button>Editar</button>
          <button>Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
