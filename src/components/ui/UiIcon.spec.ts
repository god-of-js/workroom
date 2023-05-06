/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiIcon from './UiIcon.vue'

describe('src/components/ui/UiIcon.vue', () => {
  it('SVG is rendered', async () => {
    const wrapper = mount(UiIcon, {
      props: {
        name: 'Export'
      }
    })

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })
})
