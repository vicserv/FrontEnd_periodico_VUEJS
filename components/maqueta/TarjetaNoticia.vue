<template lang="pug">

.tarjeta(:lazy-background="`https://panel.deoaxaca.online${imagen}`")
    router-link.tarjeta__titulo(:to="'/nota/'+ url")
      p {{titulo}}
    .tarjeta__fecha 
        .tarjeta__fecha__dia {{dia(fecha)}}
        .tarjeta__fecha__mes {{mes(fecha)}}
    .tarjeta__categoria {{categoria || 'OTRAS'}}
</template>
<script>
export default {
  props: {
    titulo: String,
    categoria: String,
    imagen: String,
    fecha: String,
    url: String
  },
  methods: {
    dia(value) {
      if (value) {
        return this.$moment(String(value)).format("DD", "");
      }
    },
    mes(value) {
      if (value) {
        return this.$moment(String(value)).format("MM/YY", "");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin botones {
  display: inline-block;
  position: absolute;
  background-color: $color-secundario;

  border-radius: 5px;
  padding: 6px;
  font-weight: 600;
  text-align: center;
}
.tarjeta {
  position: relative;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  color: white;

  &__fecha {
    @include botones;
    right: -5px;
    top: -5px;
    &__dia {
      font-size: 1.5rem;
    }
    &__mes {
      font-size: 0.8rem;
    }
  }
  &__categoria {
    @include botones;
    left: -5px;
    top: -5px;
    text-transform: uppercase;
  }

  &__titulo {
    position: absolute;
    text-align: center;
    padding: 10px;
    width: 100%;
    bottom: 0;
    top: auto;
    font-weight: 600;
    background-color: rgba(24, 22, 22, 0.63);
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.tarjeta:hover .tarjeta__titulo {
  top: 0;
  transition: 0.5s;
  padding-top: 50px;
}
.tarjeta:hover {
  transition: 0.5s;
  transform: scale(1.04);
}

a {
  text-decoration: none;
  color: white;
}
p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
