<template lang="pug">
.busqueda
    .noti(v-if="noticias.length === 0") 
        LazyMaquetaTitulos(:titulo="'NO SE ENCONTRARON RESULTADOS DE: '+ $route.params.id")
    .noti(v-if="noticias.length > 0")
        LazyMaquetaTitulos(:titulo="'RESULTADOS DE: '+ $route.params.id")
        LazyMaquetaNoticiaSecundaria(:noticias="noticias"  :resultados="resultados" @accion="paginacion")
   
</template>

<script>
export default {
  data() {
    return {
      noticias: [],
      pagina: 0,
      resultados: false,
      urlbusqueda: `/noticias?nota_contains=`
    };
  },
  computed: {
    url() {
      return `${this.urlbusqueda}${this.$route.params.id}&_start=${this.pagina}&_limit=15&_sort=id:desc`;
    }
  },
  created() {
    this.obtenerDatos();
  },
  methods: {
    async obtenerDatos() {
      const respuesta = await this.$axios.get(this.url).catch(res =>
        this.$nuxt.error({
          statusCode: res.status,
          message: "Post not found"
        })
      );
      this.noticias = respuesta.data;
    },

    async paginacion() {
      this.pagina = this.pagina + Number(1);

      await this.$axios
        .get(this.url)
        .then(respuesta => {
          if (respuesta.data.length > 0) {
            respuesta.data.forEach(item => this.noticias.push(item));
          } else {
            this.resultados = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
