<script setup lang="ts">
// import TableComponent from '../components/common/TableComponent.vue'
import ButtonComponent from '../components/common/ButtonComponent.vue'
</script>

<template>
  <h1>Clientes</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Documento</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ativo</th>
          <th class="table_align-right">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cliente 1</td>
          <td>111.111.111-11</td>
          <td>11 1111-1111</td>
          <td>11@11.com</td>
          <td class="table_status-on">Sim</td>
          <td class="table_actions">
            <ButtonComponent label="Editar" />
            <ButtonComponent label="Associar Produtos" />
            <ButtonComponent label="Inativar" type="inactivate" />
          </td>
        </tr>
        <tr class="table_item-inactive">
          <td>Cliente 2</td>
          <td>222.222.222-22</td>
          <td>22 2222-2222</td>
          <td>22@22.com</td>
          <td class="table_status-off">Não</td>
          <td class="table_actions">
            <ButtonComponent label="Editar" />
            <ButtonComponent label="Associar Produtos" />
            <ButtonComponent label="Ativar" type="activate" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
