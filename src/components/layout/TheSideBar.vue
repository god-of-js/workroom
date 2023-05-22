<script setup lang="ts">
import { useRoute } from 'vue-router'
import UiIcon, { Icons } from '../ui/UiIcon.vue'
import Logo from '@/assets/logo-solid.svg'
import WomanWithLaptop from '@/assets/images/woman-with-laptop.svg'

const appRoute = useRoute()
interface Route {
  path: string
  icon: Icons
  name: string
}
const routes: Route[] = [
  {
    path: '/',
    icon: 'Grid',
    name: 'Dashboard'
  },
  {
    path: '/',
    icon: 'Projects',
    name: 'Projects'
  },
  {
    path: '/calendar',
    icon: 'Calendar',
    name: 'Calendar'
  },
  {
    path: '/',
    icon: 'AirPlane',
    name: 'Vacations'
  },
  {
    path: '/',
    icon: 'Users',
    name: 'Employees'
  },
  {
    path: '/',
    icon: 'Chat',
    name: 'Messenger'
  },
  {
    path: '/',
    icon: 'Folder',
    name: 'Info Portal'
  }
]
</script>

<template>
  <aside id="sidebar">
    <div class="sidebar__inner">
      <Logo class="logo" />
      <ul>
        <li
          v-for="(route, index) in routes"
          :key="index"
          :class="{ isActive: route.path === appRoute.fullPath }"
        >
          <router-link to="/calendar">
            <UiIcon :name="route.icon" />
            <span>{{ route.name }}</span>
          </router-link>
          <div class="active-indicator" />
        </li>
      </ul>

      <div class="bottom-container">
        <div class="support-container">
          <WomanWithLaptop />
          <v-btn color="primary" size="large">Support</v-btn>
        </div>
        <div class="log-out">
          <button>
            <UiIcon name="LogOut" />
            Log Out
          </button>
        </div>
      </div>
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
  .sidebar__inner {
    position: relative;
    height: 100%;
  }

  .logo {
    margin-bottom: 52px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li,
  .log-out {
    display: flex;
    align-items: center;
    height: 44px;
    margin-bottom: 8px;
    gap: 8px;

    a,
    button {
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 16px;
      flex-grow: 1;
      padding: 10px;
      text-decoration: none;
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #7d8592;
      cursor: pointer;

      svg {
        fill: #7d8592;
      }
    }
    .active-indicator {
      border-radius: 2px;
      width: 4px;
      height: 90%;
    }

    &.isActive,
    &:hover {
      a {
        background: #3f8cff10;
        color: #3f8cff;

        svg {
          fill: #3f8cff;
        }
      }
      .active-indicator {
        background: #3f8cff;
      }
    }
  }

  .bottom-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-right: 16px;
    .support-container {
      background: #3f8cff10;
      border-radius: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
      min-height: 168px;
      padding: 16px;
      margin-bottom: 50px;

      svg {
        margin-top: -25%;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
