<template>
  <div class="flex justify-between items-center">
    <h2>Stutor</h2>
    <nav class="hidden md:block">
      <navigation :items="navigation" class="flex space-x-16" />
    </nav>
    <button class="w-10 h-10 rounded-lg text-white bg-primary-default md:hidden" @click="expand()">
      <font-awesome-icon icon="bars" />
    </button>
    <div
      v-if="menuExpanded"
      class="absolute md:hidden inset-x-12 top-32 p-4 rounded-lg shadow-lg bg-white"
    >
      <navigation :items="navigation" class="space-y-2" />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/general/Navigation';

export default {
  components: {
    Navigation,
  },
  data: () => ({
    navigation: [
      { id: 0, route: '/', name: 'Home' },
      { id: 1, route: '/about-us', name: 'About us' },
    ],
    menuExpanded: false,
  }),
  methods: {
    expand() {
      this.menuExpanded = !this.menuExpanded;
    },
  },
};
</script>
