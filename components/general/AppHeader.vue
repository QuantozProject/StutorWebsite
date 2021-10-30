<template>
  <div class="flex justify-between items-center">
    <h2>Stutor</h2>
    <nav class="hidden md:block">
      <ul class="flex space-x-16">
        <li v-for="nav in navigation" :key="nav.id" :class="{ 'text-primary-default font-bold': isActive(nav.route) }">
          <nuxt-link :to="nav.route">
            {{ nav.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <button class="w-10 h-10 rounded-lg text-white bg-primary-default md:hidden" @click="expand()">X</button>
    <div v-if="menuExpanded" class="absolute w-full p-4 mt-24 rounded-lg shadow-sm">
      Menu
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigation: [
      { id: 0, route: '/', name: 'Home' },
      { id: 1, route: '/about-us', name: 'About us' },
    ],
    menuExpanded: false,
  }),
  methods: {
    isActive(route) {
      return route === this.$route.path;
    },
    expand() {
      this.menuExpanded = !this.menuExpanded;
    }
  },
};
</script>
