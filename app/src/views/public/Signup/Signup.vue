<template>
    <div class="container signup">
      <div class="signup__back-button">
        <router-link class="signup__back-button--link" to="/"><font-awesome-icon size="2x" :icon="icons.faChevronLeft"/></router-link>
      </div>
      <div class="signup__logo mb2">LOGO</div>
      <p class="subtitle center-text mb2">Para criar sua conta de usuário, insira suas credenciais nos campos abaixo.</p>
      <form class="full-width" @submit="register">
        <input
          class="input full-width mb2"
          v-model="name"
          name="name"
          type="text"
          placeholder="Nome"
          required
        >
        <input
          class="input full-width mb2"
          v-model="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        >
        <input
          class="input full-width mb2"
          v-model="password"
          name="password"
          type="password"
          placeholder="Senha"
          required
        >
        <button type="submit" class="button full-width square mb2">Criar</button>
        <p class="subtitle center-text">Já possui uma conta? <router-link class="link" to="/criar-conta">Entrar</router-link></p>
      </form>
    </div>
</template>

<script>
import actionTypes from '@/commons/constants/action-types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'signup',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      icons: {
        faChevronLeft
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
