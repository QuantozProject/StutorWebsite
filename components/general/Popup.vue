<template>
  <div
    v-if="expanded"
    class="inset-0 flex justify-center items-center absolute bg-black bg-opacity-50"
  >
    <div
      class="
        relative
        max-w-lg
        flex-grow
        p-8
        space-y-4
        rounded-lg
        shadow-xl
        animate-expand-small-big
        bg-white
      "
    >
      <h1>{{ title }}</h1>
      <p>{{ subText }}</p>
      <button class="btn btn-primary" @click="$emit('close')">Got it!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    subText: {
      required: true,
      type: String,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
