<script setup lang="ts">
import AuthIllustration from '@/assets/images/auth-Illustration.svg'
import Logo from '@/assets/logo.svg'
</script>

<template>
  <div class="auth-view">
    <div class="auth-view__content">
      <div class="banner">
        <div class="logo-container">
          <component :is="Logo" />
          <span class="app-title">Schedulo</span>
        </div>
        <h1>Your place to work Plan. Create. Control.</h1>
        <component :is="AuthIllustration" />
      </div>
      <div class="form-container">
        <div class="form-container__inner">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-view {
  background: #f4f9fd;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    border-radius: 8px;
    width: 90%;
    height: 90%;
    overflow: hidden;
    display: flex;

    .banner {
      background: #3f8cff;
      color: #fff;
      height: 100%;
      width: 50%;
      padding: 60px 96px;
      display: flex;
      flex-direction: column;
      gap: 44px;

      .logo-container {
        display: flex;
        gap: 24px;
        align-items: center;
        .app-title {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 41px;
          color: #ffffff;
        }
      }
    }

    .form-container {
      width: 50%;
      height: 100%;
      padding-top: 10%;
      display: flex;
      justify-content: center;
      background: #fff;

      .form-container__inner {
        width: 60%;
        display: flex;
        flex-direction: column;

        h1 {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          line-height: 30px;
          text-align: center;
          margin-bottom: 33px;
        }
      }
    }
  }
}
</style>
