<script setup lang="ts">
import { computed } from 'vue'
import UiDialog from '../ui/UiDialog.vue'

interface Props {
  modelValue: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()
const isOpen = computed({
  set(val: boolean) {
    emit('update:model-value', val)
  },
  get() {
    return props.modelValue
  }
})
</script>

<template>
  <UiDialog v-model="isOpen" title="Schedule Event" trigger-btn-text="Add Event">
    <v-text-field label="Event Name" variant="outlined" />
  </UiDialog>
</template>

<style scoped></style>
