<script setup lang="ts">
import AuthIllustration from '@/assets/images/auth-Illustration.svg'
import Logo from '@/assets/logo.svg'
</script>
<template>
  <div class="registration-view">
    <div class="registration-view__content">
      <div class="banner">
        <div class="logo-container">
          <component :is="Logo" />
        </div>
        <h1>Your place to work Plan. Create. Control.</h1>
        <component :is="AuthIllustration" />
      </div>
      <div class="form-container"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registration-view {
  background: #f2f2f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    border-radius: 8px;
    width: 90%;
    height: 90%;
    overflow: hidden;
  }
}
.banner {
  background: #3f8cff;
  color: #fff;
  height: 100%;
  width: 50%;
  padding: 60px 96px;
  display: flex;
  flex-direction: column;
  gap: 44px;

  h1 {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    width: 60%;
  }
}
</style>
