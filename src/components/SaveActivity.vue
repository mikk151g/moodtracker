<template>
  <h1 class="m-4">Hvordan har du det?</h1>
  <form class="m-4">
    <input
      type="text"
      class="w-full h-10 px-2 text-gray-400 rounded-sm border border-gray-300"
      v-model="title"
    />
    <div class="flex justify-between my-12 emojis">
      <input type="radio" name="rating" id="shit" hidden />
      <label for="shit">
        <span class="sr-only">Shit</span>
        <svg
          @click="setRating(1)"
          @keypress.enter="selectRatingWithEnter('shit', 1)"
          tabindex="0"
        >
          <use xlink:href="#1" />
        </svg>
      </label>
      <input type="radio" name="rating" id="notGreat" hidden />
      <label for="notGreat">
        <span class="sr-only">Not great</span>
        <svg
          @click="setRating(2)"
          @keypress.enter="selectRatingWithEnter('notGreat', 2)"
          tabindex="0"
        >
          <use xlink:href="#2" />
        </svg>
      </label>
      <input type="radio" name="rating" id="normal" hidden />
      <label for="normal">
        <span class="sr-only">Normal</span>
        <svg
          @click="setRating(3)"
          @keypress.enter="selectRatingWithEnter('normal', 3)"
          tabindex="0"
        >
          <use xlink:href="#3" />
        </svg>
      </label>
      <input type="radio" name="rating" id="great" hidden />
      <label for="great">
        <span class="sr-only">Great</span>
        <svg
          @click="setRating(4)"
          @keypress.enter="selectRatingWithEnter('great', 4)"
          tabindex="0"
        >
          <use xlink:href="#4" />
        </svg>
      </label>
      <input type="radio" name="rating" id="amazing" hidden />
      <label for="amazing">
        <span class="sr-only">Amazing</span>
        <svg
          @click="setRating(5)"
          @keypress.enter="selectRatingWithEnter('amazing', 5)"
          tabindex="0"
        >
          <use xlink:href="#5" />
        </svg>
      </label>
    </div>
    <h2 class="mb-1 mt-4">Beskrivelse</h2>
    <textarea
      class="w-full h-52 rounded-sm mb-8 border border-gray-300 text-gray-400 px-2 pt-2"
      v-model="description"
    />
    <div class="flex justify-end">
      <button
        @click.prevent="saveActivity"
        class="bg-green-800 rounded text-white px-4 py-2"
      >
        Gem
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
      currentRating: 0,
    };
  },
  computed: {
    ...mapGetters(["generateId"]),
  },
  methods: {
    ...mapActions(["addActivity", "incrementId"]),
    setRating(rating) {
      this.currentRating = rating;
    },
    selectRatingWithEnter(id, rating) {
      document.getElementById(id).checked = true;
      this.setRating(rating);
    },
    saveActivity() {
      if (
        this.title === "" ||
        this.description === "" ||
        this.currentRating === 0
      ) {
        return;
      }
      this.incrementId();
      const id = this.generateId;
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      this.addActivity({
        id: this.id,
        title: this.title,
        date: day + "-" + month + "-" + year,
        description: this.description,
        rating: this.currentRating,
      });

      this.$router.push({ path: "/activities" });
    },
  },
};
</script>

<style scoped>
.emojis svg {
  @apply hover:text-yellow-300 w-14 h-14 text-gray-300;
}

.emojis input + label > svg {
  @apply transition-colors duration-100 ease-in-out;
}

.emojis input:checked + label > svg {
  @apply text-yellow-300;
}
</style>