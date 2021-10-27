<template>
  <div>
    <app-header />
    <div class="flex justify-between items-center">
      <div class="space-y-4">
        <h1><span class="font-extralight">Peer to peer leren</span><br />via personaliseren</h1>
        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
      </div>
      <img :src="require('../assets/img/phone1.png')" alt="phone" class="w-1/3 h-1/3" />
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
