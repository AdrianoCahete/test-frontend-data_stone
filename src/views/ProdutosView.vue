<script setup lang="ts">
// import TableComponent from '../components/common/TableComponent.vue'
import ButtonComponent from '../components/common/ButtonComponent.vue'
</script>

<template>
  <h1>Produtos</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th class="table_align-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Prod1</td>
          <td>Sim</td>
          <td class="table_actions">
            <ButtonComponent label="Editar" />
            <ButtonComponent label="Inativar" />
          </td>
        </tr>
        <tr class="table_item-inactive">
          <td>Prod2</td>
          <td>Não</td>
          <td class="table_actions">
            <ButtonComponent label="Editar" />
            <ButtonComponent label="Ativar" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
