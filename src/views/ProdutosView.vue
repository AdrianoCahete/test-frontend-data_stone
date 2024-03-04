<script setup lang="ts">
import { ref } from 'vue'

import ButtonComponent from '../components/common/ButtonComponent.vue'
import ModalComponent from '../components/common/ModalComponent.vue'

const modalEditState = ref(false)

const productList = ref([
  {
    id: 0,
    name: 'Produto 1',
    active: true
  },
  {
    id: 1,
    name: 'Produto 2',
    active: false
  }
])
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
        <tr
          v-for="item in productList"
          :key="item.id"
          :class="item.active ? '' : 'table_item-inactive'"
        >
          <td>{{ item.name }}</td>
          <td :class="item.active ? 'table_status-on' : 'table_status-off'">
            {{ item.active ? 'Sim' : 'Não' }}
          </td>
          <td class="table_actions">
            <ButtonComponent label="Editar" @action="modalEditState = true" />
            <ButtonComponent
              :label="item.active ? 'Ativar' : 'Inativar'"
              :type="item.active ? 'activate' : 'inactivate'"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ModalComponent :isOpen="modalEditState" @close="modalEditState = false" title="Produto 1">
    <template #content>
      <div>
        <form>
          <div>
            <label for="client">Nome</label>
            <input name="client" type="text" value="Produto 1" />
          </div>
          <div>
            <label for="active_state">Ativo?</label>
            <select name="active_state">
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
          </div>
        </form>
      </div>
    </template>
  </ModalComponent>
</template>
