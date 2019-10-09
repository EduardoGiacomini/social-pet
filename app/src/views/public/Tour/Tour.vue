<template>
  <div class="tour">
    <div class="tour__menu-top">
      <font-awesome-icon
        size="2x"
        v-if="activeStage > 0"
        :icon="icons.faChevronLeft"
        @click="goBackStage"
      />
      <div v-else></div>
      <button class="button__link" @click="setTourCompletedSatus">Pular</button>
    </div>
    <transition name="fade" mode="out-in">
      <TourContent v-if="activeStage === 0" :tour="tour[activeStage]" :key="tour[activeStage].title"/>
      <TourContent v-if="activeStage === 1" :tour="tour[activeStage]" :key="tour[activeStage].title"/>
      <TourContent v-if="activeStage === 2" :tour="tour[activeStage]" :key="tour[activeStage].title"/>
    </transition>
    <div class="tour__menu-bottom">
      <div class="step ml2">
        <span :class="activeStage === 0 ? 'step__stage step__stage--active' : 'step__stage'" @click="changeStage(0)"></span>
        <span :class="activeStage === 1 ? 'step__stage step__stage--active' : 'step__stage'" @click="changeStage(1)"></span>
        <span :class="activeStage === 2 ? 'step__stage step__stage--active' : 'step__stage'" @click="changeStage(2)"></span>
      </div>
      <button class="button button--prox" @click="advanceStage">Próximo</button>
    </div>
  </div>
</template>

<script>
import router from '@/globals/router'
import TourContent from './TourContent'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Tour1Icon from '@/assets/icons/tour-1.svg'
import Tour2Icon from '@/assets/icons/tour-2.svg'
import Tour3Icon from '@/assets/icons/tour-3.svg'

export default {
  name: 'tour',
  components: {
    TourContent,
    FontAwesomeIcon
  },
  data () {
    return {
      icons: {
        faChevronLeft
      },
      activeStage: 0,
      tour: [
        {
          icon: Tour1Icon,
          iconAlt: 'Homem com seu gato sentados em um sofá',
          title: 'Mostre o que o seu amiguinho pode fazer',
          subtitle: 'Seja morder os seus chinelos, correr atrás do rabo ou dormir o dia todo, qualquer coisa está valendo.'
        },
        {
          icon: Tour2Icon,
          iconAlt: 'Homem observando um gato nas redes sociais',
          title: 'Curta postagens de seus amigos',
          subtitle: 'Curta e conheça pessoas e seus pets próximos de você.'
        },
        {
          icon: Tour3Icon,
          iconAlt: 'Mulher brincando com seu amigo imaginário',
          title: 'Deixe os momentos mais especiais',
          subtitle: 'Compartilhe os bons momentos de brincadeiras ou passeios no parque.'
        }
      ]
    }
  },
  methods: {
    changeStage (stage) {
      this.activeStage = stage
    },
    goBackStage () {
      this.activeStage -= 1
    },
    advanceStage () {
      if (this.lastActiveStage()) {
        this.setTourCompletedSatus()
      } else {
        this.activeStage += 1
      }
    },
    lastActiveStage () {
      if ((this.activeStage + 1) === this.tour.length) {
        return true
      }
      return false
    },
    setTourCompletedSatus () {
      localStorage.tourStatus = true
      router.push({ name: 'greetings' })
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
