<template>
  <div class="app">
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
  }
}
</script>
