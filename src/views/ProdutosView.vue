<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import ButtonComponent from '../components/common/ButtonComponent.vue'
import ModalComponent from '../components/common/ModalComponent.vue'

const modalEditState = ref(false)
const modalCreateState = ref(false)

const API_URL = `http://localhost:3100/api/`

const apiEndpoint = 'products'
const productList = ref<Array<{ id: number; name: string; active: boolean }>>()

watchEffect(async () => {
  const url = `${API_URL}${apiEndpoint}`
  productList.value = await (await fetch(url)).json()
})
</script>

<template>
  <div class="page_header">
    <h1>Produtos</h1>
    <div class="page_header-actions">
      <ButtonComponent label="Adicionar Produto" @action="modalCreateState = true" />
    </div>
  </div>
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
    </template>
  </ModalComponent>

  <ModalComponent
    :isOpen="modalCreateState"
    @close="modalCreateState = false"
    title="Adicionar Produto"
  >
    <template #content>
      <form>
        <div>
          <label for="client">Nome</label>
          <input name="client" type="text" />
        </div>
        <div>
          <label for="active_state">Ativar?</label>
          <select name="active_state">
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
      </form>
    </template>
  </ModalComponent>
</template>

<style lang="scss" scoped>
.page_header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > &-actions {
    display: flex;
    align-items: center;
  }
}
</style>
