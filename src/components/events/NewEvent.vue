<script setup lang="ts">
import { useAppStore } from '@/stores'
import { uuidv4 } from '@firebase/util'
import dayjs, { Dayjs } from 'dayjs'
import { computed, reactive, ref, watch } from 'vue'
import UiCalendarPicker from '../ui/UiCalendarPicker.vue'
import UiDialog from '../ui/UiDialog.vue'

interface Props {
  modelValue: boolean
  chosenDate?: Dayjs | null
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void
}>()
const appStore = useAppStore();

const data = reactive({
  name: '',
  date: props.chosenDate || dayjs(),
  id: uuidv4()
})
const loading = ref(false);
const isOpen = computed({
  set(val: boolean) {
    emit('update:model-value', val)
  },
  get() {
    return props.modelValue
  }
})
watch(
  () => props.chosenDate,
  (newVal) => {
    if (newVal) {
      data.date = newVal
    }
  }
)

function createEvent() {
  loading.value = true;
  const uid = localStorage.getItem('uid')!
  appStore.createEvent({...data, date: data.date.format('YYYY-MM-DD'), uid}).finally(() => {
    loading.value = false;
  })
}
</script>

<template>
  <UiDialog v-model="isOpen" title="Schedule Event" trigger-btn-text="Add Event">
    <v-text-field label="Event Name" variant="outlined" v-model="data.name" />
    <UiCalendarPicker v-model="data.date" />
    <v-btn color="primary" class="my-6" @click="createEvent">Create Event</v-btn>
  </UiDialog>
</template>

<style scoped></style>
