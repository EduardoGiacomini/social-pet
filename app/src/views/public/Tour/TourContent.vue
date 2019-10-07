<template>
  <div class="tour__content">
    <img class="tour__content--icon" :alt="tour.iconAlt" :src="tour.icon">
    <div>
      <h1 class="title center-text">{{tour.title}}</h1>
      <p class="subtitle center-text">{{tour.subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tour: Object
  }
}
</script>
