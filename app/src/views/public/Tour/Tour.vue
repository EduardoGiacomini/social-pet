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
      <button class="button__link" @click="setTourCompleted">Pular</button>
    </div>
    <div class="tour__content">
      <img class="tour__content--icon" :alt="tour[activeStage].iconAlt" :src="tour[activeStage].icon">
      <div>
        <h1 class="title center-text">{{tour[activeStage].title}}</h1>
        <p class="subtitle center-text">{{tour[activeStage].subtitle}}</p>
      </div>
    </div>
    <div class="tour__menu-bottom">
      <div class="step ml2">
        <span v-if="activeStage === 0" class="step__stage step__stage--active"></span>
        <span v-else class="step__stage"></span>
        <span v-if="activeStage === 1" class="step__stage step__stage--active"></span>
        <span v-else class="step__stage"></span>
        <span v-if="activeStage === 2" class="step__stage step__stage--active"></span>
        <span v-else class="step__stage"></span>
      </div>
      <button class="button button--prox" @click="advanceStage">Próximo</button>
    </div>
  </div>
</template>

<script>
import router from '@/globals/router'
import state from '@/commons/store'
import mutationTypes from '@/commons/constants/mutation-types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Tour1Icon from '@/assets/icons/tour-1.svg'
import Tour2Icon from '@/assets/icons/tour-2.svg'
import Tour3Icon from '@/assets/icons/tour-3.svg'

export default {
  name: 'tour',
  components: {
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
    goBackStage () {
      this.activeStage -= 1
    },
    advanceStage () {
      if (this.lastActiveStage()) {
        this.setTourCompleted()
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
    setTourCompleted () {
      localStorage.tourCompleted = true
      state.commit(mutationTypes.SET_TOUR_COMPLETED)
      router.push({ name: 'greetings' })
    }
  }
}
</script>
