<template>
  <div class="h-screen absolute inset-0">
    <img :src="require('../assets/img/wave.svg')" class="absolute bottom-0 right-0" />
    <nuxt
      class="
        flex flex-col flex-grow
        h-full
        px-12
        md:px-24
        3xl:px-44
        py-16
        relative
        overflow-y-scroll
        mobile-scroll
      "
    />
  </div>
</template>

<style scoped>
.mobile-scroll {
  -webkit-overflow-scrolling: touch;
}
</style>
