<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'

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

function readFile(file: File) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  let fileUrl: string | null = null
  return new Promise((resolve) => {
    reader.onload = () => {
      fileUrl = reader.result as string
      resolve(reader.result)
    }
  }).then(() => {
    return (fileUrl as string) || null
  })
}
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
