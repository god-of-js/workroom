/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiButton from './UiButton.vue'

describe('src/components/ui/UiButton.vue', () => {
  it('Button emits click to parent', async () => {
    const wrapper = mount(UiButton)

    wrapper.trigger('click')

    expect(wrapper.emitted().click).toBeDefined()
  })

  it('Button does not emit when disabled', async () => {
    const wrapper = mount(UiButton, {
      props: {
        disabled: true
      }
    })

    wrapper.trigger('click')

    expect(wrapper.emitted().click).not.toBeDefined()
  })
})
