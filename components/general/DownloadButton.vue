<template>
  <button class="block w-40" @click="$emit('clicked')">
    <img :src="image" alt="Download app on store" />
  </button>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String,
    },
  },
};
</script>
