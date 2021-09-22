<template lang="pug">
.contenido
  LazyMaquetaPrincipales(:direccion="direccion" :titulo="'LO ULTIMO'")
  LazyMaquetaSecundarias(:direccion="direccion" :titulo="'mas noticias'" :pagina="pagina")
  
</template>

<script>
export default {
  data() {
    return {
      direccion: `/noticias?_sort=id:desc&categorias.titulo_eq=${this.$route.params.id}`,
      pagina: 7
    };
  }
};
</script>

<style lang="scss" scoped></style>
