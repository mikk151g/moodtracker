<template>
  <h1 class="m-4">Hvordan har du det?</h1>
  <form action="submit" class="m-4">
    <input
      type="text"
      class="w-full h-10 px-2 text-gray-400 rounded-sm border border-gray-300"
    />
    <h2 class="mb-1 mt-4">Beskrivelse</h2>
    <textarea
      type="text"
      class="w-full h-52 rounded-sm mb-8 border border-gray-300 text-gray-400 px-2 pt-2"
    />
    <button type="submit" class="bg-green-800 rounded text-white px-4 py-2">
      Gem
    </button>
  </form>
</template>