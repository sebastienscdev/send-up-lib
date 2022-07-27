<template>
  <img :src="src" :width="width" />
</template>

<script>
/**
 * Used for custom icons defined in config.json
 */
export default {
  name: "IconSvg",
  props: {
    src: String,
    width: {
      type: String,
      default: "32px"
    }
  },
};
</script>
