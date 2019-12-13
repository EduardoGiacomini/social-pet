<template>
  <div class="input-icon mb2">
    <font-awesome-icon class="input-icon__icon" size="2x" :icon="icon"/>
      <input
        class="input-icon__input full-width"
        v-model="value.name"
        name="name"
        type="text"
        placeholder="Nome"
        autocomplete="username"
        required
      />
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'name-text-field',
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
