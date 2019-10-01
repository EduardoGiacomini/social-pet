<template>
  <div>
    <div class="hero__box">
      <img class="hero__icon" alt="Social Pet Hero" src="@/assets/icons/hero.svg">
    </div>
    <div class="container">
      <div class="mb4">
        <h1 class="title move-in-right center-text">Compartilhe momentos inesquecíveis ao lado do seu pet</h1>
        <p class="subtitle move-in-left center-text">Curta e compartilhe momentos vivenciados ao lado do seu pet com amigos e familiares.</p>
      </div>
      <div class="move-in-top">
        <router-link class="button full-width mb2" to="/">Entrar</router-link>
        <router-link class="button full-width mb2" to="/tutorial">Tutorial</router-link>
        <p class="subtitle center-text">Não tem uma conta? <router-link class="link" to="/create-user">Cadastre-se</router-link></p>
      </div>
    </div>
  </div>
</template>
