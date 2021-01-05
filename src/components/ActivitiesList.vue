<template>
  <ul>
    <li v-for="activity in getActivities" :key="activity.id">
      <h2>{{ activity.title }}</h2>
      <p>{{ activity.date }}</p>
      <p>{{ activity.description }}</p>
      <p>{{ activity.rating }}</p>
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