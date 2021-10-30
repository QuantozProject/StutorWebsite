<template>
  <div>
    <app-header />
    <div class="flex flex-grow justify-between items-center">
      <div class="space-y-6">
        <h1 class="text-3xl sm:text-4xl md:text-5xl">
          <span class="font-extralight">Peer to peer leren</span>
          <br />via personaliseren
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
        <div class="md:inline-flex md:space-x-4">
          <a href="#" class="block w-40">
            <img :src="require('../assets/img/appstore-btn.png')" alt="Download on AppStore" />
          </a>
          <a href="#" class="block w-40">
            <img :src="require('../assets/img/playstore-btn.png')" alt="Download on PlayStore" />
          </a>
        </div>
      </div>
      <img :src="require('../assets/img/phone.png')" alt="phone" class="w-64 hidden lg:block" />
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/general/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>
