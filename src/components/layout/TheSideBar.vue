<script setup lang="ts">
import Logo from '@/assets/logo-solid.svg'

const routes = [
  {
    path: '/calendar',
    icon: 'Grid',
    name: 'Dashboard'
  },
  {
    path: '/calendar',
    icon: 'Projects',
    name: 'Projects'
  },
  {
    path: '/calendar',
    icon: 'Calendar',
    name: 'Calendar'
  },
  {
    path: '/calendar',
    icon: 'AirPlane',
    name: 'Vacations'
  },
  {
    path: '/calendar',
    icon: 'Users',
    name: 'Employees'
  },
  {
    path: '/calendar',
    icon: 'Chat',
    name: 'Messenger'
  },
  {
    path: '/calendar',
    icon: 'Folder',
    name: 'Info Portal'
  }
]
</script>

<template>
  <aside id="sidebar">
    <div class="sidebar__inner">
      <component :is="Logo" class="logo" />
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path">
            <span>{{ route.name }}</span>
          </router-link>
          <div class="active-indicator" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="scss">
#sidebar {
  background: #fff;
  border-radius: 8px;
  position: fixed;
  left: 0;
  width: 250px;
  top: 0;
  bottom: 0;
  padding: 40px 0 40px 16px;
  margin: 20px;

  .logo {
    margin-bottom: 52px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        align-items: center;
        height: 44px;


        a {

        }
    }
  }
}
</style>
