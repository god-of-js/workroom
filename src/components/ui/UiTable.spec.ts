/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiTable from './UiTable.vue'
import movies from '@/data/movies'

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

describe('src/components/ui/UiTable.vue', () => {
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
  })

  it('Data is rendered', async () => {
    const wrapper = mount(UiTable, {
      props: {
        headers,
        data: movies,
        isSearchable: false
      },
      slots: {
        categories: '<span>a normal category</span>'
      }
    })

    const firstDataItem = wrapper.findAll('td')[0]
    const categories = wrapper.findAll('td')[1]

    expect(firstDataItem.exists()).toBe(true)
    expect(firstDataItem.text()).toBe(movies[0].name)
  })
})
