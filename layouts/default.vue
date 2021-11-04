<template>
  <div class="h-screen absolute inset-0">
    <div class="overflow-y-auto h-full">
      <img :src="require('../assets/img/wave.svg')" class="absolute bottom-0 right-0" />
      <nuxt
        class="
          flex flex-col flex-grow
          md:container
          mx-auto
          h-full
          px-12
          md:px-24
          3xl:px-44
          py-16
          relative
        "
      />
    </div>
  </div>
</template>
