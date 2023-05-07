<script setup lang="ts">
import { computed } from 'vue'
import UiTable from '../ui/UiTable.vue'
import movies from '@/data/movies'
import UserNameWithAvatar from '../user/UserNameWithAvatar.vue'
import TrendStat from '../analytics/TrendStat.vue'
import MovieCategories from './MovieCategories.vue'
import UiButton from '../ui/UiButton.vue'

interface Props {
  tableTitle: string
  tableSubTitle: string
  isTrending?: boolean
}
const props = defineProps<Props>()

const headers = [
  {
    title: 'Name',
    key: 'name',
    isSortable: true,
    isSlot: true,
    isCheckable: true
  },
  {
    title: 'Category',
    key: 'categories',
    isSlot: true
  },
  {
    title: 'Popularity/Interests',
    key: 'popularity',
    isSlot: true
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
  },
  {
    title: '',
    key: 'actions',
    isSlot: true
  }
].filter(({ key }) => {
  if (props.isTrending && key === 'popularity') return false;

  return true;
})

const dataList = computed(() => {
  if (props.isTrending) return movies.filter(({ isTrending }) => isTrending)

  return movies
})
</script>

<template>
  <UiTable
    :data="dataList"
    :headers="headers"
    :tableTitle="props.tableTitle"
    :tableSubTitle="props.tableSubTitle"
  >
    <template #name="{ data }">
      <UserNameWithAvatar :avatar="data.avatar" :name="data.name" />
    </template>
    <template #categories="{ data }">
      <MovieCategories :categories="data.category" />
    </template>
    <template #popularity="{ data }">
      <TrendStat :isTrending="data.isTrending" :popularity="data.popularity" />
    </template>
    <template #actions>
      <UiButton class="action-btn">View</UiButton>
    </template>
  </UiTable>
</template>

<style lang="scss" scoped>
.action-btn {
  width: 63px;
}
</style>
