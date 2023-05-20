<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAppStore } from '@/stores'
import { useRouter } from 'vue-router';

const appStore = useAppStore();
const router = useRouter()

const formData = ref({
  email: '',
  password: ''
})
const loading = ref(false);

function emailIsValid(email: string) {
  if (!email || email.trim() === '') {
    return 'Email is required'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email'
  }
  return true
}

function passwordIsValid(password: string) {
  if (!password || password.trim() === '') {
    return 'Password is required'
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return true
}

const formIsValid = computed(() => {
  return (
    emailIsValid(formData.value.email) === true && passwordIsValid(formData.value.password) === true
  )
})

function registerUser() {
  loading.value = true;
  appStore.createUser(formData.value).then(() => {
    console.log('yep');
    router.push({ name: 'CalendarView'})
  }).finally(() => {
    loading.value = false;
  })
}
</script>

<template>
  <div>
    <h1 class="text-center mb-6">Sign up to Schedulo</h1>
    <form @submit.prevent="registerUser" ref="form">
      <v-text-field
        v-model="formData.email"
        label="Email"
        color="primary"
        :rules="[emailIsValid]"
      />
      <v-text-field
        v-model="formData.password"
        label="Password"
        color="primary"
        :rules="[passwordIsValid]"
      />
      <div class="mb-4">
        <router-link to="/" class="text-primary">Forgot password?</router-link>
      </div>
      <v-btn block color="primary" size="large" type="submit" :loading="loading" :disabled="!formIsValid"
        >Sign up</v-btn
      >
    </form>
    <div class="text-center text-black mt-6">
      Already have a password? <router-link to="/" class="text-primary">Login</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 33px;
}
</style>
