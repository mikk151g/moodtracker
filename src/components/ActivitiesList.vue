<template>
  <ul class="mb-40">
    <li
      v-for="activity in getActivities"
      :key="activity.id"
      class="bg-white rounded p-4 m-4 w-auto"
    >
      <h2 class="font-bold">{{ activity.title }}</h2>
      <p class="text-gray-400">{{ activity.date }}</p>
      <p>{{ activity.description }}</p>
      <p>Rating: {{ activity.rating }}</p>
    </li>
  </ul>
  <svg
    class="w-20 h-20 bg-green-800 rounded-full right-4 bottom-4 fixed text-white"
  >
    <use xlink:href="#plusIcon" />
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getActivities"]),
  },
};
</script>