<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import movies from '@/data/movies';
import ThePageHeader from '@/components/layout/ThePageHeader.vue';

const route = useRoute()

const movie = computed(() => {
    console.log(route.params)
    return movies.find(({ index}) => index === route.params.movieIndex)
})
</script>

<template>
  <div class="movies-view">
    <ThePageHeader :name="movie?.name" />
  </div>
</template>

<styled lang="scss" scoped>
.movie-view {
  width: 100%;
  height: 100%;
}

.page-body {
  padding: 32px 128px;
  display: grid;
  gap: 32px;
}
</styled>
