<template lang="pug">
.compartir
    .periodista Redaccion / {{categoria.toUpperCase()}}
    .fecha {{fecha}}
    .titulo COMPARTIR NOTA
    LazyMaquetaShares(:titulo="titulo" :categoria="categoria")
    .titulo TAMAÑO DEL TEXTO
    .size
        button(@click='boton(1)' aria-label="aumentar")
            i.fas.fa-minus.fuente
        button(@click='boton(0)' aria-label="disminuir")
            i.fas.fa-plus.fuete
</template>

<script>
export default {
  props: {
    titulo: String,
    fecha: String,
    categoria: String
  },
  methods: {
    boton(para) {
      if (para === 1) {
        this.$emit("agrandar");
      } else {
        this.$emit("disminuir");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.titulo {
  background-color: $color-secundario;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin: 10px 0;
}
.periodista {
  font-weight: 700;
  margin: 10px 0;
}
.size {
  text-align: center;
  button {
    margin: 0 10px;
    background-color: rgb(28, 105, 168);
    border-radius: 5px;
    color: white;
    border-style: none;
    padding: 10px;
    cursor: pointer;
  }
}
.compartir {
  padding: 10px;
  height: 100%;
}
</style>
