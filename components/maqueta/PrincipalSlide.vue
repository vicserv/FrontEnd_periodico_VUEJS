<template lang="pug">
client-only
  Slider(animation='normal'  :interval='7000' :speed='1000' height='100%' :stopOnHover='true' :indicators='false')
    Slider-item( 
        v-for="(item, index) in principales"
        :key="index"
        :style="{'background-image': `url(https://panel.deoaxaca.online${!item.imagen.formats.small? item.imagen.url : item.imagen.formats.small.url})`}"
)
      router-link.tarjeta__titulo(:to="'/nota/'+ item.slug") {{item.titulo}}
      .tarjeta__fecha
        .tarjeta__fecha__dia {{dia(item.published_at)}}
        .tarjeta__fecha__mes {{mes(item.published_at)}}
      .tarjeta__categoria {{item.categorias[0] ? item.categorias[0].titulo :'OTRAS'}}

</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
export default {
  components: {
    Slider,
    SliderItem,
  },
  props: ["principales"],
  data() {
    return {};
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },
    dia(value) {
      if (value) {
        return this.$moment(String(value)).format("DD", "");
      }
    },
    mes(value) {
      if (value) {
        return this.$moment(String(value)).format("MM/YY", "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  z-index: 0;
}
.slider-item {
  background-size: cover;
}
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 5px;

  &__fecha {
    @include botones;
    right: 5px;
    top: 5px;
    &__dia {
      font-size: 1.5rem;
    }
    &__mes {
      font-size: 0.8rem;
    }
  }
  &__categoria {
    @include botones;
    left: 5px;
    top: 5px;
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
  }
}
.slider:hover .tarjeta__titulo {
  top: 0;
  transition: 0.5s;
  padding-top: 60px;
}
.slider:hover {
  transform: scale(1.02);
  transition: 0.5s;
  transform: scale(1.04);
}

a {
  text-decoration: none;
  color: white;
}
</style>
