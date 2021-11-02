<template>
  <div>
    <app-header />
    <div class="flex flex-grow justify-between items-center">
      <div class="space-y-6 animate-fade-in-down">
        <h1 class="text-3xl sm:text-4xl md:text-5xl">
          <span class="font-extralight">Peer to peer leren</span>
          <br />via personaliseren
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
        <div class="md:inline-flex md:space-x-4">
          <download-button
            v-for="btn in downloadButtons"
            :key="btn.id"
            :image="btn.image"
            @clicked="expandPopup = true"
          />
        </div>
      </div>
      <div class="flex space-x-8 justify-items-end lg:justify-between">
        <img
          :src="require('../assets/img/phone.png')"
          alt="phone"
          class="w-60 hidden lg:block 2xl:mb-32 animate-fade-in-down-mob"
        />
        <img
          :src="require('../assets/img/phone.png')"
          alt="phone"
          class="w-1/4 lg:w-60 hidden 2xl:block mt-32 animate-fade-in-top-mob"
        />
      </div>
    </div>
    <popup
      :title="popup.title"
      :subText="popup.subText"
      :expanded="expandPopup"
      @close="expandPopup = false"
    />
  </div>
</template>

<script>
import AppHeader from '~/components/general/AppHeader';
import DownloadButton from '~/components/general/DownloadButton';
import Popup from '~/components/general/Popup';

export default {
  components: {
    AppHeader,
    DownloadButton,
    Popup,
  },
  data: () => ({
    downloadButtons: [
      {
        id: 0,
        image: require('../assets/img/appstore-btn.png'),
      },
      {
        id: 1,
        image: require('../assets/img/playstore-btn.png'),
      },
    ],
    popup: {
      title: 'Hey there!',
      subText:
        'The Stutor app is not published yet, please try again later or contact the team for more information.',
    },
    expandPopup: false,
  }),
};
</script>
