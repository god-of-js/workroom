<script setup lang="ts">
import UiIcon, { Icons } from './UiIcon.vue'

interface Props {
  iconName?: Icons
  placeholder: string
  modelValue: string | null
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', p: string): void
}>()

function update(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="[{ hasIconLeft: !!props.iconName }, 'input-container']">
    <UiIcon v-if="props.iconName" :name="props.iconName" class="left-icon" />
    <input type="text" :value="props.modelValue" :placeholder="props.placeholder" @input="update" />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  position: relative;
  display: flex;
  align-items: center;

  .left-icon {
    position: absolute;
    left: 0;
    z-index: 1;
    margin: 0 8px;
    background: white;
  }
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 8px;
    width: 276px;
    height: 46px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    outline: none;
    background: white;

    &::placeholder {
      font-family: 'Helvetica Neue';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #6a6a6a;
    }
  }
  &.hasIconLeft {
    input {
      padding-left: 36px !important;
    }
  }
}
</style>
