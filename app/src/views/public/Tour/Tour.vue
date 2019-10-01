<template>
  <div>
    <div class="top">
      <font-awesome-icon :icon="icons.faChevronLeft" size="2x"/>
      <router-link class="button__skip" to="/">Pular</router-link>
    </div>
    <div class="center-box width">
      <img class="img" alt="Alt text" src="@/assets/icons/tour-1.svg">
      <div class="mb4">
        <h1 class="title center-text">Compartilhe momentos inesquecíveis ao lado do seu pet</h1>
        <p class="subtitle center-text">Curta e compartilhe momentos vivenciados ao lado do seu pet com amigos e familiares.</p>
      </div>
    </div>
    <div class="bottom">
      <div class="step ml2">
        <span class="step__stage"></span>
        <span class="step__stage"></span>
        <span class="step__stage"></span>
      </div>
      <button class="button button--prox">Próximo</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
      tour: [
        {
          active: true,
          step: 1,
          img: 'tour-1.svg',
          title: 'Mostre o que o seu amiguinho pode fazer',
          subtitle: 'Seja morder os seus chinelos, correr atrás do rabo ou dormir o dia todo, qualquer coisa está valendo.'
        },
        {
          active: false,
          step: 2,
          img: 'tour-2.svg',
          title: 'Curta postagens de seus amigos',
          subtitle: 'Curta e conheça pessoas e seus pets próximos de você.'
        },
        {
          active: false,
          step: 3,
          img: 'tour-3.svg',
          title: 'Deixe os momentos mais especiais',
          subtitle: 'Compartilhe os bons momentos de brincadeiras ou passeios no parque.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
  }
  .width {
    width: 80%;
  }

  .img {
    display: block;
    width: 80%;
    margin: 0 auto 3rem auto;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
