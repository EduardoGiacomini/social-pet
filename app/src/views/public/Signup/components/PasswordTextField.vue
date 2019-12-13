<template>
  <div class="input-icon mb2">
    <font-awesome-icon class="input-icon__icon" size="2x" :icon="icon"/>
    <input
      class="input-icon__input full-width"
      v-model="value.password"
      name="password"
      type="password"
      placeholder="Senha"
      minlength="6"
      autocomplete="current-password"
      required
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'password-text-field',
  components: { FontAwesomeIcon },
  props: {
    icon: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  }
}
</script>
