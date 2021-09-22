<template lang="pug">
.late
    .lateral
        LazyEncabezadosSlideCuadrado
        LazyMaquetaLoBuscado
</template>

<style lang="scss" scoped>
.late {
  position: relative;
}
.lateral {
  position: sticky;
  top: 70px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;

  margin: auto 10px;
}
</style>
