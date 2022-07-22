<template>
  <div class="w-full min-h-screen">
    <div class="w-full h-full py-10">
      <div class="flex flex-col justify-center items-center">
        <img
          v-if="loading == true"
          class="h-20 w-20"
          src="/img/loading.gif"
          alt="Loading"
        />
        <div v-if="loading == false">
          <h1 class="text-4xl font-semibold">{{ getName }}</h1>
          <div class="flex flex-col justify-center items-center py-10">
            <p class="flex-1 text-xl font-semibold">Today</p>
            <div class="flex flex-row py-5">
              <div class="flex flex-col px-5">
                <p class="text-lg font-semibold">C</p>
                <p>{{ item.current && item.current.feelslike_c }}</p>
              </div>
              <div class="flex flex-col px-5">
                <p class="text-lg font-semibold">F</p>

                <p>{{ item.current && item.current.feelslike_f }}</p>
              </div>
              <div class="flex flex-col px-5">
                <p class="text-lg font-semibold">Cloudy</p>

                <p>{{ item.current && item.current.cloud }}</p>
              </div>
            </div>
            <div class="py-5">
              <nuxt-link
                class="bg-blue-500 px-3 py-2 rounded-lg text-white hover:shadow-xl"
                to="/"
                >Go Back to Dashboard</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'weather-info',

  data: () => ({
    item: {},
    loading: false,
  }),

  async mounted() {
    console.log('mounted', this.$router.currentRoute.query.q)
    this.loading = true
    const response = await this.$axios.$get(
      'http://api.weatherapi.com/v1/forecast.json?key=' +
        this.$config.apiKey +
        '&q=' +
        this.$router.currentRoute.query.q +
        '&days=' +
        this.$router.currentRoute.query.days
    )
    this.item = response
    this.loading = false
    console.log('Mounted Data:', this.item)
  },

  computed: {
    getName() {
      return (
        this.item?.location?.name +
        ', ' +
        this.item?.location?.region +
        ', ' +
        this.item?.location?.country
      )
    },
  },
}
</script>

<style></style>
