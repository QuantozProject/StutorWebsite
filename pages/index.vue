<template>
  <div>
    <app-header />
    <div class="flex flex-grow justify-between items-center">
      <div class="space-y-6">
        <h1 class="text-2xl sm:text-3xl">
          <span class="font-extralight">Peer to peer leren</span>
          <br />via personaliseren
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
        <div class="sm:inline-flex sm:space-x-4">
          <a href="#" class="block w-44">
            <img :src="require('../assets/img/appstore-btn.png')" alt="Download on AppStore" />
          </a>
          <a href="#" class="block w-44">
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
