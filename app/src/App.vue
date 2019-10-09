<template>
  <div class="app">
    <div v-if="this.$store.state.loading" class="loading">
      <div class="loading__content"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import actionTypes from '@/commons/constants/action-types'
import router from '@/globals/router'

export default {
  async beforeCreate () {
    const tourStatus = await this.$store.dispatch(actionTypes.VERIFY_TOUR_STATUS)

    if (!tourStatus) {
      router.push({ name: 'tour' })
    }
  },
  computed: {
    loadingStatus () {
      console.log(this.$store.loading)
      return this.$store.loading
    }
  }
}
</script>
