<template>
  <v-btn
    large
    elevation="0"
    class="mt-2 white--text rounded-pill"
    :loading="loading"
    :disabled="disabled"
    :width="width"
    @click="
      $emit('action');
    "
    :class="disabled ? 'gradient-grey':classColor"
  >
    <slot name="title">
      <span :class="uppercase ? 'text-uppercase' : ''">{{ title }}</span></slot>
  </v-btn>
</template>

<script>
export default {
  name: "GradientButton",
  data() {
    return {};
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "85%"
    },
    icon: {
      type: String,
      default: null
    },
    classColor: {
      type: String,
      default: "gradient-green"
    },
    href: {},
    background: {
      type: String,
      default: ""
    },
    uppercase: {
      type: Boolean,
      default: true
    }
  }
};
</script>
