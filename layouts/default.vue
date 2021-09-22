<template lang="pug">
.la
  .layout
    LazyEncabezadosEncabezado
    LazyEncabezadosNavbar
    LazyEncabezadosBarraNota
    LazyEncabezadosPublicidad
    Nuxt
    LazyEncabezadosFooter
</template>

<script></script>

<style lang="scss">
@media (min-width: 1100px) {
  html {
    background-image: url(../static/fondo.png);
    background-attachment: fixed;
    background-size: 100%;
  }
}
</style>
