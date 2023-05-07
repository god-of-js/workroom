<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'
import movies from '@/data/movies'
import { readFile } from '@/helpers/index'
import ThePageHeader from '@/components/layout/ThePageHeader.vue'
import AverageWatchTime from '@/components/analytics/AverageWatchTime.vue'
import UiTable from '@/components/ui/UiTable.vue'
import MovieCategories from '@/components/movies/MovieCategories.vue'
import MovieTable from '@/components/movies/MovieTable.vue'
import TrendStat from '@/components/analytics/TrendStat.vue'

const route = useRoute()

const movie = computed(() => {
  return movies.find(({ index }) => index === route.params.movieIndex)
})
const bannerImg = ref<string | null>()

const moviePropertiesHeaders = [
  {
    title: 'Category',
    key: 'categories',
    isSlot: true
  },
  {
    title: 'Streams',
    key: 'streams'
  },
  {
    title: 'Watchlists',
    key: 'watchLists'
  },
  {
    title: 'Owner',
    key: 'owner'
  },
  {
    title: 'Release date',
    key: 'premierDate'
  }
]
const insightsHeader = [
  {
    title: 'People Reached',
    key: 'reach'
  },
  {
    title: 'Content Interactions',
    key: 'interactions'
  },
  {
    title: 'Impressions',
    key: 'impressions'
  },
  {
    title: 'Shares',
    key: 'shares'
  },
  {
    title: 'Likes',
    key: 'likes'
  }
]
const insightsData = [
  {
    reach: '39,823,154',
    interactions: '76,923,304',
    impressions: '101,783,945',
    shares: '14,895',
    likes: '34,056,147'
  }
]
watchEffect(async () => {
  if (!movie.value?.bannerImg) return
  if (movie.value.bannerImg instanceof File) {
    bannerImg.value = await readFile(movie.value?.bannerImg)
    return
  }
  bannerImg.value = movie.value?.bannerImg
})
</script>

<template>
  <div class="movies-view">
    <ThePageHeader v-if="movie" :name="movie.name" />
    <div class="page-body">
      <section class="banner-section">
        <img v-if="bannerImg" :src="bannerImg" alt="banner image" />
        <AverageWatchTime class="average-watch-time" />
      </section>

      <UiTable
        v-if="movie"
        :headers="moviePropertiesHeaders"
        :data="[movie]"
        table-title="Movie Properties"
        table-sub-title="A list of the details for this movie"
      >
        <template #categories="{ data }">
          <MovieCategories :categories="data.category" />
        </template>
        <template #header-right>
          <TrendStat v-if="movie" is-trending :popularity="movie.popularity" />
        </template>
      </UiTable>
      <UiTable
        :headers="insightsHeader"
        :data="insightsData"
        table-title="Interest Tracking Insights"
        table-sub-title="Keep track of the insights on this movie"
      />
      <section class="audience">
        <header>
          <h3>Audience</h3>
          <p>Specific gender, age range and top locations</p>
        </header>
        <div class="body">
          <div class="data-card"></div>
          <div class="data-card"></div>
          <div class="data-card"></div>
        </div>
      </section>

      <MovieTable
        is-mini
        hide-search
        table-title="Similar Movies"
        table-sub-title="Keep track of the trending movies on moviebox"
        :category-filter="movie?.category"
      />
    </div>
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

.banner-section {
  display: flex;
  gap: 32px;
  img {
    height: 364px;
    width: 30%;
  }
  .average-watch-time {
    width: 70%;
  }
}
.audience {
  header {
    margin-bottom: 32px;
    h3 {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      margin-bottom: 4px;
    }
    p {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #6a6a6a;
    }
  }

  .body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    .data-card {
      height: 280px;
      /* Brand Colors/Moviebox Highlight/50% */

      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }
  }
}
</styled>
