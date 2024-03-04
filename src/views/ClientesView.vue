<script setup lang="ts">
import { ref } from 'vue'

import ButtonComponent from '../components/common/ButtonComponent.vue'
import ModalComponent from '../components/common/ModalComponent.vue'

const modalEditState = ref(false)
const modalAssignState = ref(false)

const clientList = ref([
  {
    id: 0,
    name: 'Cliente 1',
    docs: '111.111.111-11',
    phone: '11 1111-1111',
    mail: '11@11.com',
    active: true
  },
  {
    id: 1,
    name: 'Cliente 2',
    docs: '222.222.222-22',
    phone: '22 2222-2222',
    mail: '22@22.com',
    active: false
  }
])
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
          <th class="table_align-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in clientList"
          :key="item.id"
          :class="item.active ? '' : 'table_item-inactive'"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.docs }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.mail }}</td>
          <td :class="item.active ? 'table_status-on' : 'table_status-off'">
            {{ item.active ? 'Sim' : 'Não' }}
          </td>
          <td class="table_actions">
            <ButtonComponent label="Editar" @action="modalEditState = true" />
            <ButtonComponent
              label="Associar Produtos"
              @action="modalAssignState = true"
              type="secondary"
            />
            <ButtonComponent
              :label="item.active ? 'Ativar' : 'Inativar'"
              :type="item.active ? 'activate' : 'inactivate'"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ModalComponent :isOpen="modalEditState" @close="modalEditState = false" title="Cliente">
    <template #content>
      <div>
        <form>
          <div>
            <label for="client">Nome</label>
            <input name="client" type="text" value="Cliente 1" />
          </div>
          <div>
            <label for="doc">Documento</label>
            <input name="doc" type="text" value="111.111.111-11" />
          </div>
          <div>
            <label for="tel">Telefone</label>
            <input name="tel" type="tel" value="11 1111-1111" />
          </div>
          <div>
            <label for="mail">Email</label>
            <input name="mail" type="email" value="11@11.com" />
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

  <ModalComponent
    :isOpen="modalAssignState"
    @close="modalAssignState = false"
    title="Associar Produto"
  >
    <template #content>
      <div>
        <form>
          <div>
            <label for="product-list">Produto</label>
            <select name="product-list">
              <option value="product-1">Produto 1</option>
              <option value="product-2">Produto 2</option>
              <option value="product-3">Produto 3</option>
              <option value="product-4">Produto 4</option>
              <option value="product-5">Produto 5</option>
            </select>
          </div>
        </form>
      </div>
    </template>
  </ModalComponent>
</template>
