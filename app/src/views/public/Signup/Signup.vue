<template>
    <div class="container signup">
      <div class="signup__back-button">
        <router-link class="signup__back-button--link" to="/"><font-awesome-icon size="2x" :icon="icons.faChevronLeft"/></router-link>
      </div>
      <div class="signup__logo mb2">LOGO</div>
      <p class="subtitle center-text mb2">Para criar sua conta de usuário, insira suas credenciais nos campos abaixo.</p>
      <form class="full-width" @submit="register">
        <div class="input-icon mb2">
          <font-awesome-icon class="input-icon__icon" size="2x" :icon="icons.faUser"/>
          <input
            class="input-icon__input full-width"
            v-model="name"
            name="name"
            type="text"
            placeholder="Nome"
            required
          >
        </div>
        <div class="input-icon mb2">
          <font-awesome-icon class="input-icon__icon" size="2x" :icon="icons.faEnvelope"/>
          <input
            class="input-icon__input full-width"
            v-model="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
          >
        </div>
        <div class="input-icon mb2">
          <font-awesome-icon class="input-icon__icon" size="2x" :icon="icons.faLock"/>
          <input
            class="input-icon__input full-width"
            v-model="password"
            name="password"
            type="password"
            placeholder="Senha"
            required
          >
        </div>
        <button type="submit" class="button full-width square mb2">Criar</button>
        <p class="subtitle center-text">Já possui uma conta? <router-link class="link" to="/cadastrar-se">Entrar</router-link></p>
      </form>
    </div>
</template>

<script>
import actionTypes from '@/commons/constants/action-types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'signup',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      icons: {
        faChevronLeft,
        faUser,
        faEnvelope,
        faLock
      },
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    async register (event) {
      event.preventDefault()

      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      await this.$store.dispatch(actionTypes.CREATE_ACCOUNT, user)
    }
  }
}
</script>
