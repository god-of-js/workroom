<script setup lang="ts">
import Notification from './icons/notification.svg'
import Settings from './icons/settings.svg'
import Filter from './icons/filter.svg'
import Export from './icons/export.svg'
import ThreeDots from './icons/three-dots.svg'
import ArrowDown from './icons/arrow-down.svg'
import VerticalDash from './icons/vertical-dash.svg'
import Trend from './icons/trend.svg'
import Search from './icons/search.svg'
import Close from './icons/close.svg'
import Edit from './icons/edit.svg'

const icons = {
  Notification,
  Settings,
  Filter,
  Export,
  ThreeDots,
  ArrowDown,
  VerticalDash,
  Trend,
  Search,
  Close,
  Edit
}
export type Icons = keyof typeof icons
interface Props {
  name: Icons
}
const props = defineProps<Props>()
</script>

<template>
  <component :is="icons[props.name]" />
</template>
