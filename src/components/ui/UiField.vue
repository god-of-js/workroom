<script lang="ts" setup>
interface Props {
  error?: string
  label: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  label: undefined
})
</script>

<template>
  <div class="ui-field">
    <label v-if="label" :for="name" class="ui-label">
      {{ label }}
    </label>
    <div class="ui-control">
      <slot />
      <p v-if="props.error" class="error">{{ props.error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-label {
  text-transform: uppercase;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 4px;
}
</style>
