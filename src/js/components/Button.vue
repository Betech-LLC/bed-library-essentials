<template>
  <button class="btn" @click="onClick" :disabled="disabled">
    <slot>
      <span v-if="loading && !icon" class="button-icon"></span>
      <span v-if="icon" class="button-icon"></span>
      <span class="button-label">{{ label || "&nbsp;" }}</span>
      <span v-if="badge" class="button-badge">{{ badge }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: false,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    badge: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    disabled() {
      return this.$attrs.disabled || this.loading;
    },
  },
};
</script>
