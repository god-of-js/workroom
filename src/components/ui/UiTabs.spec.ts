/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import UiTab from './UiTabs.vue'

describe('src/components/ui/UiTabs.vue', () => {
  it('All tabs are rendered', async () => {
    const wrapper = mount(UiTab, {
      props: {
        tabs: [
          {
            name: 'All Movies',
            path: '/'
          },
          {
            name: 'Trending',
            path: '/?trending'
          },
          {
            name: 'Upcoming Premier',
            path: '/?upcoming-premier'
          }
        ],
        activeRoute: '/?upcoming-premier'
      }
    })

    const activeTab = wrapper.find('.active')
    expect(activeTab.exists()).toBe(true)
    expect(activeTab.text()).toBe('Upcoming Premier')
  })
})
