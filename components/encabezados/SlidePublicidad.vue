<template lang="pug">
client-only
    .hola
        VueSlickCarousel.carousel(v-bind="settings" v-if="imagenes.length" )
            div.carousel__item( v-for="(item, index) in imagenes" :key="index" )
                img.carousel__imagen(:src="'https://panel.deoaxaca.online' + item.imagen.url ") 
</template>

<script>
import axios from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
     data() {
      return {
        imagenes: [],
        sliderValue: 0,
        settings: {
  "arrows": false,
  "dots": false,
  "infinite": true,
  "slidesToShow": 1,
  "slidesToScroll": 1,
  "autoplay": true,
  "speed": 5000,
  "autoplaySpeed": 7000,
  "cssEase": "linear",
 
}
      }},
   components:{
     VueSlickCarousel
   },
    async created(){
      try {
        const res = await axios.get('https://panel.deoaxaca.online/publicidads/') /* AQUI SE HACE LA PETICION GET */
        this.imagenes = res.data;
      
      } catch (error) {
        console.log(error)
      }
    },
}
</script>

<style lang="scss" scoped>
.carousel{
    &__imagen{
        width: 100%;
        height: auto;
        background-size:contain;
    
        
        
    }
}
.slick-slider {
max-width: 87vw; // El más ancho que irá en un sitio web receptivo
}
@media  (min-width: 768px){
.slick-slider {
max-width: 60vw; // El más ancho que irá en un sitio web receptivo
}
}


</style>