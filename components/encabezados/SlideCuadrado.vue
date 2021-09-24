<template lang="pug">
  .hola
      VueSlickCarousel.carousel(v-bind="settings" v-if="imagenes.length" )
          div.carousel__item( v-for="(item, index) in imagenes" :key="index")
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
        speed: 3000,
        autoplaySpeed: 7000,
        cssEase: "linear",
        fade: true,
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
      .get("/cuadrados/")
      .then((res) => (this.imagenes = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__imagen {
    width: 100%;

    height: auto;
    background-size: contain;
  }
}
.slick-slider {
  margin: 0 auto;
  max-width: 80vw; // El más ancho que irá en un sitio web receptivo
}
@media (min-width: 768px) {
  .slick-slider {
    max-width: 25vw; // El más ancho que irá en un sitio web receptivo
  }
}

@media (min-width: 992px) {
  .slick-slider {
    max-width: 20vw; // El más ancho que irá en un sitio web receptivo
  }
}
</style>
