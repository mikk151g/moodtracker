<template>
  <ul>
    <li
      v-for="activity in getActivities"
      :key="activity.id"
      class="bg-white rounded p-4 m-4"
    >
      <h2 class="font-bold">{{ activity.title }}</h2>
      <p class="text-gray-400">{{ activity.date }}</p>
      <p>{{ activity.description }}</p>
      <p>Rating: {{ activity.rating }}</p>
    </li>
  </ul>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="text-green-800 w-28 bottom-0 right-0 fixed"
  >
    <path
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clip-rule="evenodd"
    />
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