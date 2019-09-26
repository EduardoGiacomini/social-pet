import Greetings from '@/views/public/Greetings/Greetings.vue'
import CreateUser from '@/views/public/CreateUser/CreateUser.vue'

export default [
  {
    path: '/',
    name: 'greetings',
    component: Greetings
  },
  {
    path: '/create-user',
    name: 'createUser',
    component: CreateUser
  }
]
