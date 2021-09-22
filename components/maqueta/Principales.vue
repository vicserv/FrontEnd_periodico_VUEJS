<template lang="pug">
.noticias(v-if="principales.length")
    LazyMaquetaTitulos(:titulo="titulo")
    LazyMaquetaCuerpoNoticias(:principales="principales")
</template>

<script>
export default {
  props: {
    direccion: String,
    titulo: String
  },
  data() {
    return {
      principales: [],
      pagina: 7
    };
  },

  async created() {
    const principales = await this.$axios
      .get(`${this.direccion}&_start=0&_limit=7`)
      .catch(res =>
        this.$nuxt.error({ statusCode: res.status, message: "Post not found" })
      );
    this.principales = principales.data;
  }
};
</script>
