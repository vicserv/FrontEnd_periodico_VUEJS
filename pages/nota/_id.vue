<template lang="pug">
.nose(@copy="copiar")
  .nota(v-if="noticia.imagen")
    .nota__principal
        .nota__principal__titulo
          h2 {{noticia.titulo}}
        .nota__principal__imagen
          img(:src="'https://panel.deoaxaca.online' + (!noticia.imagen.formats.medium? noticia.imagen.url : noticia.imagen.formats.medium.url)" :alt="noticia.titulo" @contextmenu="hola")
        .nota__principal__cuerpo
          .nota__principal__cuerpo__compartir
            .sticky
              LazyMaquetaCompartir(:titulo="noticia.titulo" :categoria="noticia.categorias[0].titulo || 'DEOAXACA'" :fecha="format_date(noticia.published_at)" @disminuir="fuente_size(1)" @agrandar="fuente_size(0)")
          .markdown(v-html="$md.render(noticia.nota)" :style="`font-size: ${fuente}rem;`")
    LazyMaquetaNoticiasLateral
  LazyMaquetaSecundarias(:direccion="direccion" :titulo="'mas noticias'" :pagina="pagina")
</template>

<script>
export default {
  asyncData(context) {
    const id = context.params.id;
    return context.$axios
      .get(`/noticias/${id}`)
      .then(res => {
        return { noticia: res.data };
      })
      .catch(err => context.error(500));
  },
  head() {
    return {
      title: this.noticia.titulo,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "De Oaxaca noticias -" + this.noticia.titulo
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `https://panel.deoaxaca.online${this.noticia.imagen.url}`
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },

        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.noticia.titulo
        },

        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "De Oaxaca noticias -" + this.noticia.titulo
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `https://panel.deoaxaca.online${this.noticia.imagen.url}`
        }
      ]
    };
  },
  data() {
    return {
      fuente: 1,
      direccion: "/noticias?_sort=id:desc",
      pagina: 0
    };
  },
  methods: {
    format_date(value) {
      if (value) {
        return this.$moment(String(value)).format("DD/MM/YYYY h:mm a", "");
      }
    },
    fuente_size(value) {
      if ((this.fuente < 1.6) & (this.fuente > 0.8)) {
        if (value === 0) {
          this.fuente -= 0.1;
        } else {
          this.fuente += 0.1;
        }
      } else if (this.fuente >= 1.6) {
        this.fuente -= 0.1;
        alert("ES EL TAMAÑO MAXIMO");
      } else if (this.fuente <= 0.8) {
        this.fuente += 0.1;
        alert("ES EL TAMAÑO MINIMO");
      }
    },
    copiar(event) {
      const texto = `\n\nInformación obtenida desde: https://deoaxaca.online${this.$route.fullPath}`;
      try {
        event.clipboardData.setData("text", getSelection() + texto);
        event.preventDefault();
      } catch (error) {
        console.log("no se pudo copiar");
      }
    },
    hola(e) {
      console.log(e);
    }
  },
  async created() {
    try {
      await this.$axios.put(`/noticias/${this.noticia.id}`, {
        vistas: this.noticia.vistas + 1
      });
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.nota {
  width: 85%;
  margin: 0 auto;

  margin: 0 auto;

  &__principal {
    padding: 0 20px;

    &__titulo {
      text-align: center;
      margin-bottom: 20px;
      color: rgb(87, 87, 87);
    }
    &__imagen {
      margin: 0 auto;
      width: 90%;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
  }
}
@media (min-width: 992px) {
  .nota {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr;
    &__principal {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      align-items: center;

      &__imagen {
        margin: 0 auto;
        width: 70%;
        img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }
      }

      &__cuerpo {
        display: grid;
        grid-template-columns: auto 1fr;
        margin: 40px 0;

        &__compartir {
          margin: 0 10px;
          position: relative;
          background-color: rgb(247, 247, 247);
          .sticky {
            position: sticky;
            top: 50px;
          }
        }
      }
    }
  }
}
</style>
