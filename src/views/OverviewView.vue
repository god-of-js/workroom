<script setup lang="ts">
import TodayUserLogins from '@/components/analytics/TodayUserLogins.vue'
import AverageWatchTime from '@/components/analytics/AverageWatchTime.vue'
import MovieTable from '@/components/movies/MovieTable.vue'
import ThePageHeader from '@/components/layout/ThePageHeader.vue'
</script>

<template>
  <div class="home-view">
    <ThePageHeader name="Overview" />
    <div class="page-body">
      <div class="analytics">
        <TodayUserLogins class="user-logins" />
        <AverageWatchTime class="average-watch-time" />
      </div>

      <MovieTable
        isUpcomingPremier
        table-title="Upcoming movie premieres"
        table-sub-title="Keep track of the upcoming movie premieres"
        is-mini
        footer-btn-text="View all upcoming premieres"
        footerBtnLink="/movies?upcomingPremier=true"
      />
      <MovieTable
        isTrending
        table-title="Trending Movies"
        table-sub-title="Keep track of the trending movies on moviebox"
        is-mini
        footer-btn-text="View all Trending movies"
        footerBtnLink="/movies?trending=true"
      />
    </div>
  </div>
</template>

<styled lang="scss" scoped>
.home-view {
  width: 100%;
  height: 100%;
}

.page-body {
  padding: 32px 128px;
  display: grid;
  gap: 32px;
}

.analytics {
  display: flex;
  gap: 32px;

  .user-logins {
    width: 30%;
  }
  .average-watch-time {
    width: 70%;
  }
}
</styled>
