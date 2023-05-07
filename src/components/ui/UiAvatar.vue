<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { readFile } from '@/helpers/index'

interface Props {
  img: string | File
}
const props = defineProps<Props>()

const avatar = ref<string>()

watchEffect(() => {
  if (props.img instanceof File) {
    avatar.value = readFile(props.img)
    return
  }
  avatar.value = props.img
})
</script>

<template>
  <img :src="avatar" alt="avatar" />
</template>

<style lang="scss" scoped>
img {
  width: 32px;
  height: 32px;
  border-radius: 100px;
}
</style>
