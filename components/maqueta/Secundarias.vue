<template lang="pug">
.secundarias(v-if="noticias.length")
    LazyMaquetaTitulos(:titulo="titulo")
    LazyMaquetaNoticiaSecundaria(:noticias="noticias" :resultados="resultados" @accion="paginacion")
</template>

<script>
export default {
  props: {
    direccion: String,
    titulo: String,
    pagina: Number
  },
  data() {
    return {
      noticias: [],

      resultados: false
    };
  },

  async created() {
    const noticias = await this.$axios
      .get(`${this.direccion}&_start=${this.pagina}&_limit=15`);
    this.noticias = noticias.data;
  },
  methods: {
    async paginacion() {
      this.pagina = this.pagina + Number(15);

      await this.$axios
        .get(`${this.direccion}&_start=${this.pagina}&_limit=12`)
        .then(respuesta => {
          if (respuesta.data.length > 0) {
            respuesta.data.forEach(item => this.noticias.push(item));
          } else {
            this.resultados = true;
          }
        });
    }
  }
};
</script>
