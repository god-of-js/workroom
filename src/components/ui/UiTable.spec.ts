/**
 * @vitest-environment jsdom
 */
// @ts-nocheck
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiTable, { Header, TableRowData } from './UiTable.vue'
import movies from '@/data/movies'

const headers: Header[] = [
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

const data: TableRowData[] = movies
const props = {
  headers,
  data,
  tableTitle: 'Test',
  tableSubTitle: 'Test'
}

describe('src/components/ui/UiTable.vue', () => {
  it('Headers are rendered', async () => {
    const wrapper = mount(UiTable, {
      props
    })

    const firstHeader = wrapper.findAll('th')[0]

    expect(firstHeader.exists()).toBe(true)
    expect(firstHeader.text()).toBe('Name')
  })

  it('Data is rendered', async () => {
    const wrapper = mount(UiTable, {
      props,
      slots: {
        categories: '<span>a normal category</span>'
      }
    })

    const firstDataItem = wrapper.findAll('td')[0]

    expect(firstDataItem.exists()).toBe(true)
    expect(firstDataItem.text()).toBe(movies[0].name)
  })
})
