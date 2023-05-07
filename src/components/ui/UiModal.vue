<script lang="ts" setup>
import UiIcon from './UiIcon.vue'

const props = withDefaults(
  defineProps<{
    title: string
    isSidebar?: boolean
    subtitle?: string
  }>(),
  {
    variant: 'success',
    subtitle: undefined,
    maxHeightMargin: 40,
    isOverflow: true
  }
)

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="ui-modal">
    <header class="modal-header">
      <span>
        <h3 class="title">
          {{ props.title }}
        </h3>

        <p class="modal-sub-title">
          {{ props.subtitle }}
        </p>
      </span>

      <button @click="emit('close')">
        <UiIcon name="Close" class="close-icon" />
      </button>
    </header>

    <div class="modal-main">
      <slot />
    </div>
    <div v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-modal {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 450px;
  height: 100vh;
  background: #fff;
  color: #000;
  transition: all 0.5s ease;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  padding: 24px;
  z-index: 3;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
  p {
    margin-top: 4px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6a6a6a;
  }
  button {
    border: transparent;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
}

.modal-main {
  padding-top: 32px;
}

.footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 1.5rem;
  border-top: 2px solid var(--color-gray-50);

  button {
    margin-bottom: 0;
  }
}

.close-icon {
  height: 1.5rem;
  width: 1.5rem;
  fill: #000;
}
</style>
