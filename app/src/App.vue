<template>
  <router-view/>
</template>

<script>
import router from '@/globals/router'

export default {
  beforeCreate () {
    const tourCompleted = localStorage.tourCompleted

    if (!tourCompleted) {
      router.push({ name: 'tour' })
    }
  }
}
</script>
