<script setup lang="ts">
import { ref } from 'vue'
import UiModal from '../ui/UiModal.vue'
import UiSelect from '../ui/UiSelect.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const value = ref('')
</script>

<template>
  <UiModal
    title="Update movie"
    subtitle="Update movie and view movie details"
    @close="emit('close')"
  >
    <!-- TODO: work in progress -->
    <UiSelect v-model="value" label="Select" name="select" :options="[]" />
  </UiModal>
</template>

<style lang="scss" scoped></style>
