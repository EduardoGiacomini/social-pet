<template>
  <div>
    <div class="step">
      <span class="step-stage"></span>
      <span class="step-stage"></span>
      <span class="step-stage step-stage--active"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tour',
  data () {
    return {
      tour: [
        {
          active: true,
          step: 1,
          img: 'caminho.svg',
          title: 'Mostre o que o seu amiguinho pode fazer',
          subtitle: 'Seja morder os seus chinelos, correr atrás do rabo ou dormir o dia todo, qualquer coisa está valendo.'
        },
        {
          active: false,
          step: 2,
          img: 'caminho.svg',
          title: 'Curta postagens de seus amigos',
          subtitle: 'Curta e conheça pessoas e seus pets próximos de você.'
        },
        {
          active: false,
          step: 3,
          img: 'caminho.svg',
          title: 'Deixe os momentos mais especiais',
          subtitle: 'Compartilhe os bons momentos de brincadeiras ou passeios no parque.'
        }
      ]
    }
  }
}
</script>
