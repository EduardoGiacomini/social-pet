<template>
  <div class="app">
    <Loading v-if="loadingStatus"/>
    <router-view/>
  </div>
</template>

<script>
import actionTypes from '@/commons/constants/action-types'
import router from '@/globals/router'

import Loading from '@/commons/components/Loading.vue'

export default {
  components: {
    Loading
  },
  async beforeCreate () {
    const tourStatus = await this.$store.dispatch(actionTypes.VERIFY_TOUR_STATUS)

    if (!tourStatus) {
      router.push({ name: 'tour' })
    }
  },
  computed: {
    loadingStatus () {
      return this.$store.state.loading
    }
  }
}
</script>
