<template>
    <div class="container signup">
      <Form @register="register" :icons="icons" :user="user" />
    </div>
</template>

<script>
import actionTypes from '@/commons/constants/action-types'
import { faChevronLeft, faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Form from './components/Form'

export default {
  name: 'signup',
  components: {
    Form
  },
  data () {
    return {
      icons: {
        faChevronLeft,
        faUser,
        faEnvelope,
        faLock
      },
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      await this.$store.dispatch(actionTypes.CREATE_ACCOUNT, this.user)
    }
  }
}
</script>
