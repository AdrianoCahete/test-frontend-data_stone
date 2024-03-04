import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ModalComponent from '../common/ModalComponent.vue'

describe('ModalComponent', () => {
  it('renders properly opened with title', () => {
    const wrapper = mount(ModalComponent, { props: { isOpen: true, title: 'Modal Title' } })
    expect(wrapper.text()).toContain('Modal Title')
  })

  it('renders properly closed', () => {
    const wrapper = mount(ModalComponent, { props: { isOpen: false, title: 'Modal Closed' } })
    expect(wrapper.text()).not.toContain('Modal Closed')
  })
})
