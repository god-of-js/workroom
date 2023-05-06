/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiTable from './UiTable.vue'
import UiPill from './UiPill.vue'

const headers = [
  {
    title: 'Name',
    key: 'name',
    isSortable: true
  },
  {
    title: 'category',
    key: 'categories'
  }
]

const data = [
  {
    name: 'Wonder Woman',
    category: ['action', 'thriller']
  }
]

describe('src/components/ui/UiTabs.vue', () => {
  it('Headers are rendered', async () => {
    const wrapper = mount(UiTable, {
      props: {
        headers,
        data,
        isSearchable: false
      }
    })

    const firstHeader = wrapper.findAll('th')[0]

    expect(firstHeader.exists()).toBe(true)
    expect(firstHeader.text()).toBe('Name')
    expect(firstHeader.html()).toContain('UiIcon')
  })

  it('Data is rendered', async () => {
    const wrapper = mount(UiTable, {
      props: {
        headers,
        data: [],
        isSearchable: false
      },
      slots: {
        categories: UiPill
      }
    })

    const name = wrapper.findAll('#name')[0]
    const categories = wrapper.findAll('#categories')[0]

    expect(name.exists()).toBe(true)
    expect(name.text()).toBe('Wonder Woman')

    expect(categories.exists()).toBe(true)

    expect(categories.html()).toContain('UiPill')
  })
})
