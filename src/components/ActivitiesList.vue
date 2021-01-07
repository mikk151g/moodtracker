<template>
  <ul class="mb-40" v-if="anyActivities">
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
  <div class="flex items-center justify-center h-screen" v-else>
    <h1 class="mx-4 text-center font-bold">
      Du har endnu ikke oprettet en aktivitet.
    </h1>
  </div>
  <router-link to="/addActivity">
    <svg
      role="button"
      class="w-20 h-20 bg-green-800 rounded-full right-4 bottom-4 fixed text-white"
    >
      <use xlink:href="#plusIcon" />
    </svg>
  </router-link>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import TimeAgo from "javascript-time-ago";
// import da from "javascript-time-ago/locale/da";

export default {
  computed: {
    ...mapGetters(["getActivities"]),
    anyActivities() {
      const activities = this.getActivities;
      return activities.length > 0;
    },
    // convertDate(date) {
    //   TimeAgo.addDefaultLocale(da);
    //   const timeAgo = new TimeAgo("da");
    //   timeAgo.format(Date.parse(Date.parse(date).getTime()));
    // },
  },
  methods: {
    ...mapActions(["changePage"]),
  },
};
</script>