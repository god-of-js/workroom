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
  categoryFilter?: string[]
  hideSearch?: boolean
  alignFooterToCenter?: boolean;
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
  if (props.categoryFilter)
    return movies.filter(({ category }) => {
      return category.some((cat) => props.categoryFilter.includes(cat))
    })

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
    :fieldsToSearch="props.hideSearch ? undefined : ['name', 'categories', 'owner']"
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
    <template #actions="{ data }">
      <div class="action-btn-container">
        <router-link :to="`/movies/${data.index}`">
          <UiButton>View</UiButton>
        </router-link>
      </div>
    </template>
    <template #footer v-if="!!props.footerBtnText">
      <div :class="['table-footer', { center: props.alignFooterToCenter}]">
        <UiButton>{{ props.footerBtnText }}</UiButton>
      </div>
    </template>
  </UiTable>
</template>

<style lang="scss" scoped>
.action-btn-container {
  display: flex;
  justify-content: flex-end;

  a {
    text-decoration: none;
  }

  button {
    width: 63px;
  }
}
.table-footer {
  display: flex;
  justify-content: flex-end;

  &.center {
    justify-content: center;
  }
}
</style>
