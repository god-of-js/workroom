<script setup lang="ts">
interface Tab {
  name: string
  path: string
}
interface Props {
  tabs: Tab[]
  activeRoute: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="tab">
    <router-link
      v-for="(tab, index) in props.tabs"
      :key="index"
      :to="tab.path"
      :class="{ active: tab.path === props.activeRoute }"
    >
      {{ tab.name }}
    </router-link>
  </div>
</template>
