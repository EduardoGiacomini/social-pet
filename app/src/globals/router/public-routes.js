import Greetings from '@/views/public/Greetings/Greetings.vue'
import Signup from '@/views/public/Signup/Signup.vue'
import Tour from '@/views/public/Tour/Tour.vue'

// Todo: criar rota privada
import Home from '@/views/private/Home/Home.vue'

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
    path: '/criar-conta',
    name: 'signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]
