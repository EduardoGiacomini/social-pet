<template>
  <div class="app">
    <router-view/>
  </div>
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
