<template>
  <div class="container">
    <Menu/>
    <div class="mb2">
      <h1 class="title">Olá Eduardo!</h1>
      <p class="subtitle">O que vamos descobrir hoje?</p>
    </div>
    <form>
      <div class="input-icon">
        <font-awesome-icon class="input-icon__icon" size="2x" :icon="icons.faSearch"/>
        <input
          class="input-icon__input full-width"
          type="text"
          name="search"
          placeholder="Pesquisar"
        >
      </div>
    </form>
  </div>
</template>

<script>
import Menu from '@/commons/components/Menu.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Menu,
    FontAwesomeIcon
  },
  data () {
    return {
      icons: {
        faSearch
      }
    }
  }
}
</script>
