<template>
    <div class="container signup">
      <div class="signup__back-button">
        <router-link class="signup__back-button--link" to="/"><font-awesome-icon size="2x" :icon="icons.faChevronLeft"/></router-link>
      </div>
      <div class="signup__logo mb2">LOGO</div>
      <p class="subtitle center-text mb2">Para criar sua conta de usuário, insira suas credenciais nos campos abaixo.</p>
      <form>
        <input class="input full-width mb2" type="text" placeholder="Nome" required>
        <input class="input full-width mb2" type="email" placeholder="E-mail" required>
        <input class="input full-width mb2" type="password" placeholder="Senha" required>
        <button type="submit" class="button full-width square mb2">Criar</button>
        <p class="subtitle center-text">Já possui uma conta? <router-link class="link" to="/criar-conta">Entrar</router-link></p>
      </form>
    </div>
</template>

<script>
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
      }
    }
  }
}
</script>
