<script setup lang="ts">
import UiTable from '../ui/UiTable.vue'
import movies from '@/data/movies'
import UiPill from '../ui/UiPill.vue'
import UserNameWithAvatar from '../user/UserNameWithAvatar.vue'

const headers = [
  {
    title: 'Name',
    key: 'name',
    isSortable: true,
    isSlot: true
  },
  {
    title: 'Category',
    key: 'categories',
    isSlot: true
  },
  {
    title: 'Popularity/Interests',
    key: 'popularity'
  },
  {
    title: 'Watchlists',
    key: 'watchLists'
  },
  {
    title: 'Streams',
    key: 'streams'
  },
  {
    title: 'Release date',
    key: 'premierDate'
  }
]
</script>

<template>
  <UiTable :data="movies" :headers="headers">
    <template #name="{ data }">
      <UserNameWithAvatar :avatar="data.avatar" :name="data.name" />
    </template>
    <template #categories="{ data }">
      <div class="categories-container">
        <UiPill v-for="(category, index) in data.category" :key="index">
          {{ category }}
        </UiPill>
      </div>
    </template>
  </UiTable>
</template>

<style lang="scss" scoped>
.categories-container {
  display: flex;
  gap: 8px;
}
</style>
