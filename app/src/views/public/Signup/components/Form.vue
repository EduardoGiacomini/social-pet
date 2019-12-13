<template>
  <form class="full-width" @submit.prevent="$emit('register')">
    <back-button :icon="icons.faChevronLeft"/>
    <logo/>
    <name-text-field :icon="icons.faUser" v-model="user"/>
    <email-text-field :icon="icons.faEnvelope" v-model="user"/>
    <password-text-field :icon="icons.faLock" v-model="user"/>
    <actions/>
  </form>
</template>

<script>
import BackButton from './BackButton'
import Logo from './Logo'
import NameTextField from './NameTextField'
import EmailTextField from './EmailTextField'
import PasswordTextField from './PasswordTextField'
import Actions from './Actions'

export default {
  name: 'form',
  components: {
    BackButton,
    Logo,
    NameTextField,
    EmailTextField,
    PasswordTextField,
    Actions
  },
  props: {
    icons: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
