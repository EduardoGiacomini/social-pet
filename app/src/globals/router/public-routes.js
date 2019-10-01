import Greetings from '@/views/public/Greetings/Greetings.vue'
import CreateUser from '@/views/public/CreateUser/CreateUser.vue'
import Tour from '@/views/public/Tour/Tour.vue'

export default [
  {
    path: '/',
    name: 'greetings',
    component: Greetings
  },
  {
    path: '/tutorial',
    name: 'tour',
    component: Tour
  },
  {
    path: '/create-user',
    name: 'createUser',
    component: CreateUser
  }
]
