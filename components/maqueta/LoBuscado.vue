<template lang="pug">
.contenedor
  .lobuscado TOP DE LA SEMANA
  router-link.buscado(v-for='(item, index) in noticias' :key='index' :to="'/nota/'+ item.slug")
    .buscado__cuerpo
      .buscado__cuerpo__titulo {{item.titulo}}
      .buscado__cuerpo__fecha Publicado el: {{format_date(item.published_at)}}

</template>

<script>
export default {
  data() {
    return {
      noticias: [],
      pagina: 0,
      momento: ""
    };
  },

  computed: {
    url() {
      return `/noticias?published_at_gte=`;
    }
  },
  created() {
    this.obtenerDatos();
  },
  methods: {
    format_date(value) {
      if (value) {
        return this.$moment(String(value)).format("DD/MM/YY h a", "");
      }
    },

    async obtenerDatos() {
      const respuesta = await this.$axios.get(
        `${this.url}${this.$moment()
          .subtract(1, "week")
          .format(
            "YYYY-MM-DDTHH:mm:ss.ssss\\Z"
          )}&_sort=vistas:desc&_limit=3&_start=0`
      );
      this.noticias = respuesta.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.contenedor {
  margin: auto 0;
}
.buscado {
  width: 100vw;
  text-decoration: none;
  color: white;

  &__cuerpo {
    background-color: $color-secundario;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    height: 100px;
    &__titulo {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__fecha {
      margin: 10px 0;
      font-size: 0.8rem;
    }
  }
  &__cuerpo:hover {
    background: $color-principal;
    color: rgb(255, 255, 255);
    transition: 1s;
  }
}
.borde {
  border-bottom: 5px ridge #1c6ea4;
}
.degradado:hover {
  background: #193c66e5;
  color: rgb(255, 255, 255);
  transition: 1s;
}
.lobuscado {
  text-align: center;
  background-color: $color-secundario;
  color: white;
  padding: 10px 5px;
  border-radius: 5px;
}
</style>
