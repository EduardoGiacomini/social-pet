<template>
  <div class="container">
    <div class="mb2">
      <Menu/>
    </div>
    <div class="mb2">
      <h1 class="title">Olá, Eduardo!</h1>
      <p class="subtitle">O que vamos descobrir hoje?</p>
    </div>
    <form class="mb2">
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
    <div class="home">
      <span class="subtitle home__subtitle">Destaques</span>
      <div class="stories">
        <div class="stories__item">
          <div class="stories__item-content">
            <img class="stories__item-content--image" :src="icons.avatar" alt="Storie 1">
            <span class="stories__item-content--title">nome_usuário</span>
          </div>
        </div>
        <div class="stories__item">
          <div class="stories__item-content">
            <img class="stories__item-content--image" :src="icons.avatar" alt="Storie 1">
            <span class="stories__item-content--title">nome_usuário</span>
          </div>
        </div>
        <div class="stories__item">
          <div class="stories__item-content">
            <img class="stories__item-content--image" :src="icons.avatar" alt="Storie 1">
            <span class="stories__item-content--title">nome_usuário</span>
          </div>
        </div>
        <div class="stories__item">
          <div class="stories__item-content">
            <img class="stories__item-content--image" :src="icons.avatar" alt="Storie 1">
            <span class="stories__item-content--title">nome_usuário</span>
          </div>
        </div>
    </div>
    </div>
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
        faSearch,
        avatar: 'https://i.pravatar.cc/75'
      }
    }
  }
}
</script>
