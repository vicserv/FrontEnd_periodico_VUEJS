<template lang="pug">
.title(v-if="show.titulo")
    router-link.show(:to="'/nota/'+ show.slug") {{`${show.titulo}`}}
</template>

<script>
export default {
  data() {
    return {
      show: {},
      noticias: [],
      pagina: 0
    };
  },
  computed: {
    url() {
      return `/noticias?_sort=id:desc&_limit=6&_start=${this.pagina}`;
    }
  },
  created() {
    this.count();
    this.obtenerDatos();
  },

  methods: {
    count() {
      let i = 0;
      setInterval(() => {
        this.show = this.noticias[i];
        i++;
        i === this.noticias.length ? (i = 0) : i;
      }, 3000);
    },
    async obtenerDatos() {
      const respuesta = await this.$axios.get(this.url);
      this.noticias = respuesta.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-align: left;
  right: 0;
}
.show {
  text-decoration: none;
  color: white;
}
</style>
