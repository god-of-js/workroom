<script setup lang="ts">
import { useRoute } from 'vue-router'
import TheLogo from './TheLogo.vue'

const appRoute = useRoute()

const routes = [
  {
    path: '/',
    name: 'Overview'
  },
  {
    path: '/movies',
    name: 'Movies'
  },
  {
    path: '/',
    name: 'Upload'
  },
  {
    path: '/',
    name: 'Reporting'
  },
  {
    path: '/',
    name: 'Users'
  }
]
</script>

<template>
  <nav>
    <div class="logo-and-links-container">
      <TheLogo />

      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path"  :class="[{isActive: route.name === appRoute.name}]">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 72px;
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 128px;

  .logo-and-links-container {
    display: flex;
    align-items: center;
    gap: 32px;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 16px;
}

a {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #6a6a6a;
  text-decoration: none;

  &.isActive, &:hover {
    color: #ffffff;
  }
}
</style>
