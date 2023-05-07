<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'

export interface SelectOption {
  label: string
  value: string
}

interface Props {
  error?: string
  label: string
  modelValue: string | string[] | null
  name: string
  options: SelectOption[]
  required?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  error: undefined,
  label: undefined,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', p: string | string[] | null): void
}>()

const picked = computed({
  get: () => props.modelValue,
  set: (value: string | string[] | null) => {
    if (props.modelValue === value) return

    if (props.modelValue === value) {
      emit('update:modelValue', '')
      return
    }

    emit('update:modelValue', value)
  }
})

const uiSelect = ref<HTMLElement>()
const isVisibleOptions = ref(false)
const selection = computed(() => {
  return props.options.find((option) => option.value === picked.value)
})

watch(picked, hideOptions)
onClickOutside(uiSelect, () => {
  hideOptions()
})

function hideOptions() {
  isVisibleOptions.value = false
}

function toggleOptionsVisibility() {
  isVisibleOptions.value = !isVisibleOptions.value
}
</script>

<template>
  <UiField :error="error" :label="label" :name="name" :required="required">
    <div ref="uiSelect" class="ui-select">
      <label
        :class="{
          'has-errors': false,
          'no-border-bottom': isVisibleOptions,
          'is-disabled': props.disabled
        }"
        :for="name"
        class="selection"
      >
        <template v-if="!isVisibleOptions || props.disabled">
          <div class="select-label" @click="toggleOptionsVisibility">
            <slot v-if="selection" :selection="selection" name="selection">
              <UiSelectOption :label="selection.label" :value="selection.value" />
            </slot>

            <slot v-else name="placeholder"> Please select </slot>
          </div>

          <div v-if="!selection" class="icon-holder" @click="toggleOptionsVisibility">
            <UiIconChevronDown class="icon-size-sm" />
          </div>
        </template>
      </label>

      <transition>
        <div v-if="isVisibleOptions" class="options">
          <slot name="optionsHeader" />
          <slot name="options">
            <label
              v-for="option in props.options"
              :key="option.value"
              :class="{
                selected: option.value === picked
              }"
              class="select-option"
              @click="picked = option.value ?? null"
            >
              <slot :option="option" name="option">
                <UiSelectOption v-bind="option" />
              </slot>

              <UiIconCheck v-if="option.value === picked" class="icon-size-sm" />
            </label>
          </slot>
        </div>
      </transition>
    </div>
  </UiField>
</template>

<style lang="scss" scoped>
.ui-select {
  position: relative;

  min-height: 3rem;
}

label.has-errors {
  border-color: #f00;
}

.selection {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;

  height: 46px;

  /* Brand Colors/Moviebox Highlight/50% */

  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.select-label {
  padding: 10px 14px;
  width: calc(100% - px(36));
}

.search-label {
  display: flex;
  flex-grow: 1;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  background: #ffffff;
  cursor: default;
}

.options {
  position: absolute;
  z-index: 999;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(100, 100, 100, 0.1);
  border: 1px transparent solid;
  overflow-y: scroll;
  max-height: px(220);
}

.select-option {
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  background: #fff;
  width: 97%;
}

.select-option:hover {
  background: #eee;
}

.select-option.selected {
  background: #effbfa;
}

.no-border-bottom {
  border-bottom: transparent;
}

.icon-holder {
  padding: 0.5rem;
  position: absolute;
  right: 0;
  background: #ffffff;
  margin-right: px(4);
  max-width: px(40);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
  margin-top: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  margin-top: -1rem;
}

.select-label {
  cursor: pointer;
}

.is-disabled {
  opacity: 0.5;
  .select-label {
    cursor: not-allowed;
  }
}
</style>
