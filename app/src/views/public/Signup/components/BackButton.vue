<template>
  <div class="signup__back-button">
    <router-link class="signup__back-button--link" to="/"><font-awesome-icon size="2x" :icon="icon"/></router-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'back-button',
  components: { FontAwesomeIcon },
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
}
</script>
