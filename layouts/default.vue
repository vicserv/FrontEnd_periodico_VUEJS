<template lang="pug">
.la
  .layout
    EncabezadoVue
    NavbarVue
    BarraNotaVue
    PublicidadVue
    Nuxt
    FooterVue
</template>

<script>
import BarraNotaVue from '~/components/encabezados/BarraNota.vue'
import EncabezadoVue from '~/components/encabezados/Encabezado.vue'
import FooterVue from '~/components/encabezados/Footer.vue'
import NavbarVue from '~/components/encabezados/Navbar.vue'
import PublicidadVue from '~/components/encabezados/Publicidad.vue'

export default {
  components:{
    BarraNotaVue, EncabezadoVue, NavbarVue, PublicidadVue, FooterVue
  }
  
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@media  (min-width: 1100px){
  html{
    background-image: url(../static/fondo.png);
    background-attachment: fixed;
    background-size: 100%;

    margin-bottom: 50px;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
