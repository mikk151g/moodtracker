<template>
  <h1 class="m-4">Hvordan har du det?</h1>
  <form action="submit" class="m-4" @submit.prevent="changePage">
    <input
      type="text"
      class="w-full h-10 px-2 text-gray-400 rounded-sm border border-gray-300"
    />
    <div class="flex justify-between my-12 emojis">
      <input type="radio" name="rating" id="shit" hidden />
      <label for="shit">
        <span class="sr-only">Shit</span>
        <svg>
          <use xlink:href="#1" />
        </svg>
      </label>
      <input type="radio" name="rating" id="notGreat" hidden />
      <label for="notGreat">
        <span class="sr-only">Not great</span>
        <svg>
          <use xlink:href="#2" />
        </svg>
      </label>
      <input type="radio" name="rating" id="normal" hidden />
      <label for="normal">
        <span class="sr-only">Normal</span>
        <svg>
          <use xlink:href="#3" />
        </svg>
      </label>
      <input type="radio" name="rating" id="great" hidden />
      <label for="great">
        <span class="sr-only">Great</span>
        <svg>
          <use xlink:href="#4" />
        </svg>
      </label>
      <input type="radio" name="rating" id="amazing" hidden />
      <label for="amazing">
        <span class="sr-only">Amazing</span>
        <svg>
          <use xlink:href="#5" />
        </svg>
      </label>
    </div>
    <h2 class="mb-1 mt-4">Beskrivelse</h2>
    <textarea
      type="text"
      class="w-full h-52 rounded-sm mb-8 border border-gray-300 text-gray-400 px-2 pt-2"
    />
    <div class="flex justify-end">
      <button type="submit" class="bg-green-800 rounded text-white px-4 py-2">
        Gem
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["changePage"]),
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