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
  isMini?: boolean
  footerBtnText?: string
  isUpcomingPremier?: boolean
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
  if (props.isMini && key === 'popularity') return false

  return true
})

const dataList = computed(() => {
  if (props.isTrending) return movies.filter(({ isTrending }) => isTrending)

  if (props.isUpcomingPremier) return movies.filter(({ isUpcomingPremier }) => isUpcomingPremier)
  return movies
})
</script>

<template>
  <UiTable
    :data="dataList"
    :headers="headers"
    :tableTitle="props.tableTitle"
    :tableSubTitle="props.tableSubTitle"
    :is-mini="props.isMini"
    :fieldsToSearch="['name', 'categories', 'owner']"
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
      <div class="action-btn-container">
        <UiButton>View</UiButton>
      </div>
    </template>
    <template #footer v-if="!!props.footerBtnText">
      <div class="table-footer">
        <UiButton>{{ props.footerBtnText }}</UiButton>
      </div>
    </template>
  </UiTable>
</template>

<style lang="scss" scoped>
.action-btn-container {
  display: flex;
  justify-content: flex-end;

  button {
    width: 63px;
  }
}
.table-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
