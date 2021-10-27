<template>
  <div class="flex justify-between items-center">
    <h2>Stutor</h2>
    <nav>
      <ul class="flex space-x-16">
        <li v-for="nav in navigation" :key="nav.id" class="text-primary-default font-bold">
          <nuxt-link :to="nav.link">
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
      { id: 0, link: '/', name: 'Home' },
      { id: 1, link: '/', name: 'About us' },
      { id: 2, link: '/', name: 'Contact' },
    ],
  }),
};
</script>
