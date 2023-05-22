<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: boolean
  triggerBtnText: string
  title: string
}
const appProps = defineProps<Props>()
console.log(appProps.triggerBtnText)
const emit = defineEmits<{
  (e: 'update:model-value', val: boolean): void
}>()
const isOpen = computed({
  set(val: boolean) {
    emit('update:model-value', val)
  },
  get() {
    return appProps.modelValue
  }
})
</script>

<template>
  <v-dialog v-model="isOpen" width="650">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props">{{ appProps.triggerBtnText }}</v-btn>
    </template>

    <v-card :title="appProps.title">
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped></style>
