<template>
  <div class="flex justify-between items-center">
    <h2>Stutor</h2>
    <nav>
      <ul class="flex space-x-16">
        <li v-for="nav in navigation" :key="nav.id" :class="{ 'text-primary-default font-bold': isActive(nav.route) }">
          <nuxt-link :to="nav.route">
            {{ nav.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigation: [
      { id: 0, route: '/', name: 'Home' },
      { id: 1, route: '/about-us', name: 'About us' },
    ],
  }),
  methods: {
    isActive(route) {
      return route === this.$route.path;
    },
  },
};
</script>
