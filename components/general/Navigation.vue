<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      :class="{ 'text-primary-default font-bold': isActive(item.route) }"
    >
      <nuxt-link :to="item.route">
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  methods: {
    isActive(route) {
      return route === this.$route.path;
    },
  },
};
</script>
