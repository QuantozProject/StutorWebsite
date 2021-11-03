<template>
  <div>
    <app-header />
    <div
      class="
        absolute
        inset-x-0 inset-y-44
        sm:inset-x-12
        md:inset-x-24
        3xl:inset-x-44
        bottom-0
        bg-white
        rounded-t-large
        bg-opacity-90
        p-12
        md:p-16
        overflow-y-auto
        space-y-12
      "
    >
      <div class="flex justify-between items-start gap-22 xl:gap-44 animate-fade-in-down-mob">
        <div class="space-y-6">
          <h1 class="text-3xl">About Stutor</h1>
          <p>{{ about }}</p>
        </div>
        <img
          :src="require('~/assets/img/about-us-draw.svg')"
          alt="About us"
          class="w-1/3 hidden md:block"
        />
      </div>
      <div class="animate-fade-in-top-mob">
        <h1 class="text-3xl">The Team</h1>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-6
            gap-8
            my-6
          "
        >
          <member
            v-for="member in team"
            :key="member.id"
            :memberName="member.name"
            :role="member.role"
            :picture="member.pic"
            :linkedIn="member.linkedIn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/general/AppHeader';
import Member from '~/components/general/Member';

export default {
  components: {
    AppHeader,
    Member,
  },
  data: () => ({
    about:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
    partners:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    team: [
      {
        id: 0,
        name: 'Maurits Arissen',
        pic: 'maurits.jpeg',
        linkedIn: 'https://www.linkedin.com/in/maurits-arissen-abb09b16b/',
        role: 'Software Developer | Back-end',
      },
      {
        id: 1,
        name: 'Erlend Van Der Burg',
        pic: 'erlend.jpeg',
        linkedIn: 'https://www.linkedin.com/in/erlend-van-der-burg-002820198/',
        role: 'Accountant, Compliance, Finance',
      },
      {
        id: 2,
        name: 'Lucas Felicio',
        pic: 'lucas.jpeg',
        linkedIn: 'https://www.linkedin.com/in/lucas-goncalves-felicio-b80794136/',
        role: 'Creative Business, Blockchain Ecosystem development',
      },
      {
        id: 3,
        name: 'Daan Franssen',
        pic: 'daan.jpeg',
        linkedIn: 'https://www.linkedin.com/in/daan-franssen/',
        role: 'Accountant, Compliance, Finance, Scrum Master',
      },
      {
        id: 4,
        name: 'Martijn van de Kraats',
        pic: 'placeholder.jpeg',
        linkedIn: 'https://www.linkedin.com/in/martijn-van-de-kraats-171970193/',
        role: 'Blockchain Ecosystem development, Product Owner, ',
      },
      {
        id: 5,
        name: 'Bart van Tongeren',
        pic: 'bart.jpeg',
        linkedIn: 'https://www.linkedin.com/in/bart-van-tongeren-168214b4/',
        role: 'Software Developer | Front-end',
      },
    ],
  }),
};
</script>
