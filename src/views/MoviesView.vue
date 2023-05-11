<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MovieTable from '@/components/movies/MovieTable.vue'
import ThePageHeader from '@/components/layout/ThePageHeader.vue'
import UiTabs from '@/components/ui/UiTabs.vue'

const tabs = [
  {
    name: 'All Movies',
    path: '/movies'
  },
  {
    name: 'Trending',
    path: '/movies?trending=true'
  },
  {
    name: 'Upcoming Premier',
    path: '/movies?upcomingPremier=true'
  }
]
const route = useRoute()

const isTrending = computed(() => !!route.query.trending)
const upcomingPremier = computed(() => !!route.query.upcomingPremier)
</script>

<template>
  <div class="movies-view">
    <ThePageHeader name="Movies" />
    <div class="page-body">
      <UiTabs :tabs="tabs" :active-tab="route.fullPath" />
      <MovieTable
        table-title="Collection of all movies"
        :is-trending="isTrending"
        align-footer-to-center
        :is-upcoming-premier="upcomingPremier"
        table-sub-title="Keep track of all the movies on moviebox"
        footer-btn-text="Load More"
      />
    </div>
  </div>
</template>

<styled lang="scss" scoped>
.movies-view {
  width: 100%;
  height: 100%;
}

.page-body {
  padding: 32px 128px;
  display: grid;
  gap: 32px;
}
</styled>
