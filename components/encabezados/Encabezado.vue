<template lang="pug">
.nav
  NuxtLink.nav__logo(to="/") 
    img(src='../../static/logo.svg' alt='DEOAXACA NOTICIAS')
  div.nav__fecha {{'Hoy es: ' + currentDateTime()}}

</template>

<script>
export default {
  methods: {
    currentDateTime() {
      return this.$moment().format("D [de] MMMM [del] YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 4px 20px;

  background-color: $color-principal;
  color: $color-claro;
  font-weight: 700;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "logo logo logo  "
    "logo logo logo  "
    "logo logo logo  "
    "fecha fecha fecha  ";
  &__logo {
    grid-area: logo;
    @include centrar-grid;
    img {
      height: 40px;
      margin: 10px;
    }
  }
  &__fecha {
    grid-area: fecha;
    @include centrar-grid;
  }
  &__busqueda {
    grid-area: busqueda;
    @include centrar-grid;
  }

  input {
    height: 27px;
    border-radius: 8px;
    padding: 0 10px;
    margin: 0 5px;
  }
  button {
    padding: 5px 5px;
    border-radius: 5px;
  }
}
@media (min-width: 768px) {
  .nav {
    grid-template-areas:
      ". logo fecha "
      ". logo fecha "
      ". logo fecha "
      ". logo fecha  ";
  }
}
</style>
