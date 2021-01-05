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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getActivities"]),
  },
};
</script>