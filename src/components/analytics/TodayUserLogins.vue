<script setup lang="ts">
import UiButton from '../ui/UiButton.vue'
import UiIcon from '../ui/UiIcon.vue'
</script>

<template>
  <div class="todays-user-logins">
    <div class="body">
      <div class="title-container">
        <h2>Today’s user logins</h2>
        <UiIcon name="ThreeDots" />
      </div>
    </div>
    <!-- TODO: add chart -->
    <div class="view-full-report">
      <UiButton>View full report</UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todays-user-logins {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  .body {
    padding: 24px;
    margin-bottom: 72px;
  }
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    h2 {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #000000;
    }

    svg {
      fill: #000000;
    }
  }
  .view-full-report {
    background: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    height: 72px;
  }
}
</style>
