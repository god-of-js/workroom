<script setup lang="ts">
interface Tab {
  name: string
  path: string
}
interface Props {
  tabs: Tab[]
  activeTab: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="tabs">
    <router-link
      v-for="(tab, index) in props.tabs"
      :key="index"
      :to="tab.path"
      :class="{ active: tab.path === props.activeTab }"
    >
      {{ tab.name }}
      <!-- Because gradient borders are not supported in all browsers -->
      <div class="border-bottom" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  border-bottom: 1px solid #f5f5f5;

  a {
    text-decoration: none;
    padding: 10px 12px;
    position: relative;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #aaaaaa;
    border-bottom-width: 1px;

    .border-bottom {
      height: 2px;
      position: absolute;
      bottom: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 8px;
    }

    &.active {
      color: #000000;

      .border-bottom {
        background: linear-gradient(
          273.64deg,
          #35c3f3 11.27%,
          #8b9fe8 36.72%,
          #e681d8 61.72%,
          #ffa9a4 82.79%,
          #fed2ce 107.29%,
          #fed2ce 107.29%
        );
      }
    }
  }
}
</style>
