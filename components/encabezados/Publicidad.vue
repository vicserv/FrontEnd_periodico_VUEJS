<template lang="pug">
.publicidad
    LazyEncabezadosSlidePublicidad.carru
    .publicidad__redes
        .publicidad__redes__titulo SIGUENOS
        .publicidad__redes__iconos
            a(href="https://www.facebook.com/deoaxacadiario" target="_blank" rel="noopener noreferrer" aria-label="facebook")
              i.fab.fa-facebook-f 
            a(href="https://www.facebook.com/deoaxacadiario" target="_blank" rel="noopener noreferrer"  aria-label="facebook")
              i.fab.fa-twitter 
            a(href="https://www.facebook.com/deoaxacadiario" target="_blank" rel="noopener noreferrer"  aria-label="facebook")
              i.fab.fa-instagram

</template>

<style lang="scss" scoped>
.publicidad {
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;

  margin: 5px auto;
  border-radius: 5px;
  .carru {
    width: 100%;
  }
  &__redes {
    display: none;
  }
}

@media (min-width: 768px) {
  .publicidad {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;

    height: 100%;
    max-width: 85%;

    &__redes {
      height: 100%;
      display: block;
      text-align: center;
      width: 100%;

      &__titulo {
        background-color: $color-secundario;
        color: white;
        border-radius: 4px;
        padding: 0.5rem;
        height: 2rem;
      }

      &__iconos {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 3px 0;
        align-items: center;
        height: 50%;
      }
    }
  }
}
.fa-facebook-f {
  background-color: #1877f2;
}
.fa-twitter {
  background-color: #55acee;
}
.fa-instagram {
  background-color: #e4405f;
}

i {
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 4px;
  font-size: 2rem;
  padding: 5px;
}
</style>
