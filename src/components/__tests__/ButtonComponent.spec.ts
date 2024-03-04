import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonComponent from '../common/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonComponent, { props: { label: 'Button Label' } })
    expect(wrapper.text()).toContain('Button Label')
  })

  it('renders as default', () => {
    const wrapper = mount(ButtonComponent, {
      props: { label: 'Button Default/Primary' }
    })
    expect(wrapper.classes()).toContain('btn_primary')
  })

  it('renders as secondary', () => {
    const wrapper = mount(ButtonComponent, {
      props: { label: 'Button Secondary', type: 'secondary' }
    })
    expect(wrapper.classes()).toContain('btn_secondary')
  })

  it('to be clickable', () => {
    const wrapper = mount(ButtonComponent, {
      props: { label: 'Button Secondary', action: 'close' }
    })
    wrapper.get('button').trigger('click')
    expect(wrapper.vm.action).toEqual('close')
  })
})
