<script setup lang="ts">
import { shallowRef } from 'vue'
import { required } from '@vuelidate/validators'
import { useAppStore } from '@/stores'
import Movie from '@/types/Movie'
import UiButton from '../ui/UiButton.vue'
import UiForm from '../ui/UiForm.vue'
import UiInput from '../ui/UiInput.vue'
import UiModal from '../ui/UiModal.vue'

interface Props {
  movie: Movie
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const store = useAppStore()

const formData = shallowRef({...props.movie})
const rules = {
  name: [required],
  owner: [required]
}

function initUpdateMovie() {
  store.updateMovie(formData.value)
  emit('close')
}
</script>

<template>
  <UiModal
    title="Update movie"
    subtitle="Update movie and view movie details"
    @close="emit('close')"
  >
    <!-- In Progress. -->
    <UiForm :form-data="formData" :rules="rules" @form-submit="initUpdateMovie">
      <template #default="{ formErrors }">
        <UiInput v-model="formData.name" :error="formErrors.name" label="Movie Name" name="name" />
        <UiInput
          v-model="formData.owner"
          :error="formErrors.owner"
          label="Movie Owner"
          name="owner"
        />
        <UiButton size="lg">Update Movie</UiButton>
      </template>
    </UiForm>
  </UiModal>
</template>

<style lang="scss" scoped>
form {
  * {
    margin-bottom: 12px;
  }
}
</style>
