<template>
  <div class="text-center">
    <v-btn
      class="mt-2 rounded-pill"
      outlined
      :large="large"
      :color="color"
      :loading="loading"
      :width="width"
      :disabled="disabled"
      :href="href"
      @click="action"
    >
      <template v-if="icon && icon.startsWith('img/')">
        <img class="icon" :src="icon" />
      </template>
      <template v-else-if="icon">
        <v-icon class="pr-2">{{ icon }}</v-icon>
      </template>
      <pre class="buttonTitle">{{ title }}</pre>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "OutlineButton",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "85%"
    },
    large: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "#51B748"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {},
    to: {}
  },
  methods: {
    action() {
      if (this.to) {
        this.$router.push({ name: this.to });
      } else {
        this.$emit("action");
      }
    },
  },
};
</script>

<style scoped>
.rounded-pill {
  border: 2px solid;
}

.buttonTitle {
  font-family: "Roboto";
}
</style>
