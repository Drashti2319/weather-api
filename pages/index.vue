<template>
  <div class="container mx-auto flex flex-row mt-20 ml-30">
    <div
      class="container mx-auto w-1/2 justify-center items-center flex flex-row gap-8 mt-40 mb-0"
    >
      <div
        class="w-full h-full flex flex-col justify-center items-center space-y-10"
      >
        <h1 class="text-6xl font-semibold">Dashboard</h1>
        <!-- ** -->
        <input
          v-model="q"
          label="City"
          placeholder="Enter City Name"
          class="border border-black focus:border-blue-500"
        />
        <button
          class="bg-blue-500 px-3 py-2 rounded-lg text-white hover:shadow-xl"
          @click="getWeatherApi"
        >
          Weather Info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Dashboard',
  data: () => ({
    item: [],
    q: '',
    days: '7',
  }),
  methods: {
    async getWeatherApi() {
      this.$router.push('/weather-info?q=' + this.q + '&days=' + this.days)
    },
  },
}
</script>
