<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  isSidebar?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const transitionName = computed(() => (props.isSidebar ? 'sidebar' : 'slide'))
</script>

<template>
  <Teleport to="#overlay">
    <Transition name="fade">
      <div v-if="modelValue" class="background" @click="$emit('update:modelValue', false)" />
    </Transition>
  </Teleport>

  <Teleport to="#overlay">
    <Transition :name="transitionName">
      <div class="overlay-content">
        <slot v-if="modelValue" @close="$emit('update:modelValue', false)" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.8);
  z-index: 3;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  margin-top: 5rem;
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  margin-right: -5rem;
}
</style>
