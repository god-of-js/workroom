<script setup lang="ts">
import AirPlane from './icons/airplane.svg'
import Calendar from './icons/calendar.svg'
import Chat from './icons/chat.svg'
import Folder from './icons/folder.svg'
import Grid from './icons/grid.svg'
import LogOut from './icons/logout.svg'
import Projects from './icons/projects.svg'
import Users from './icons/users.svg'

const icons = {
  AirPlane,
  Calendar,
  Chat,
  Folder,
  Grid,
  LogOut,
  Projects,
  Users
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
