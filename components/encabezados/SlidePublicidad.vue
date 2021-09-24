<template lang="pug">
  .contenido
    VueSlickCarousel.carousel(v-bind="settings" v-if="imagenes.length" )
        div.carousel__item( v-for="(item, index) in imagenes" :key="index" )
            a(:href="item.url || null" target="_blank" rel="noopener noreferrer")
              img.carousel__imagen(:src="'https://panel.deoaxaca.online' + item.imagen.url " alt="publicidad") 
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      imagenes: [],
      sliderValue: 0,
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
  async created() {
    await this.$axios
      .get(`/publicidads/`)
      .then((res) => (this.imagenes = res.data))
      .catch((res) => (this.imagenes = []));
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  margin: 10 0;

  &__imagen {
    width: 100%;
    height: auto;
    background-size: contain;
  }
}
.slick-slider {
  max-width: 87vw; // El más ancho que irá en un sitio web receptivo
  margin: 0;
}
@media (min-width: 768px) {
  .slick-slider {
    max-width: 60vw; // El más ancho que irá en un sitio web receptivo
  }
}
</style>
