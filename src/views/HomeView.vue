<script setup lang="ts">
import UiButton from '@/components/ui/UiButton.vue'
import UiIcon from '@/components/ui/UiIcon.vue'
import TodayUserLogins from '@/components/analytics/TodayUserLogins.vue'
import AverageWatchTime from '@/components/analytics/AverageWatchTime.vue'
import MovieTable from '@/components/movies/MovieTable.vue'
</script>

<template>
  <main>
    <header class="header">
      <h1>Overview</h1>
      <div class="btn-container">
        <UiButton>
          <UiIcon name="Filter" />
          Filter</UiButton
        >
        <UiButton>
          <UiIcon name="Export" />

          Export</UiButton
        >
      </div>
    </header>
    <div class="page-body">
      <div class="analytics">
        <TodayUserLogins class="user-logins" />
        <AverageWatchTime class="average-watch-time" />
      </div>

      <MovieTable isTrending />
    </div>
  </main>
</template>

<styled lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 128px;
  height: 72px;
  border: 1px solid #e0e0e0;

  h1 {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  .btn-container {
    display: flex;
    gap: 8px;
  }
}

.page-body {
  padding: 32px 128px;
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
