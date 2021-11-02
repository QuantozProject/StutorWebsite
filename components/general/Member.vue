<template>
  <div class="space-y-2">
    <div class="relative">
      <img
        :src="require(`~/assets/img/team-pictures/${picture}`)"
        :alt="memberName"
        class="rounded-xl"
      />
      <div
        class="
          absolute
          flex
          justify-center
          items-center
          opacity-0
          hover:opacity-80
          inset-0
          bg-primary-default
          rounded-xl
          transition
          duration-150
          ease-in-out
        "
      >
        <a :href="linkedIn" target="_blank" class="text-white text-4xl">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>
    <h2>{{ memberName }}</h2>
    <span>{{ role }}</span>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      required: true,
      type: String,
    },
    memberName: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
    },
    linkedIn: {
      required: true,
      type: String,
    },
  },
};
</script>
