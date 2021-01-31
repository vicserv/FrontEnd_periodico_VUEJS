<template lang="pug">
.cuerpo 
    
    PrincipalSlideVue.cuerpo__nota(:principales="principales")
    TarjetaNoticiasVue.cuerpo__nota(v-for="(item, index) in principales" :key="index" 
                    :titulo="item.titulo"
                    :categoria="item.categorias[0].titulo"
                    :imagen="item.imagen.url"
                    :fecha="item.published_at"
                    :url="item.slug")


</template>

<script>
import PrincipalSlideVue from './PrincipalSlide.vue'
import TarjetaNoticiasVue from './TarjetaNoticia'

export default {
    components:{
        TarjetaNoticiasVue, PrincipalSlideVue
    },
    props:{
        principales: {},
        noticias: []

    }
    
}
</script>
<style lang="scss" scoped>

.cuerpo{
    width: 85%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr ;
                         
    grid-gap: 1.5rem;
    &__nota{
        min-height: 220px;

        color: white;
    }
  

    
}

@media  (min-width: 768px){
.cuerpo{
        display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    
    grid-template-areas: "primera primera segunda"
                         "primera primera segunda"
                         "quinta sexta septima "
                         ". . . ";

    &__nota:nth-child(1){
        grid-area: primera;
    }
    &__nota:nth-child(2){
        grid-area: segunda;
    }
    &__nota{
        min-height: 150px;
    }

}

}

@media  (min-width: 992px){
.cuerpo{
        display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
    grid-template-areas: "primera primera segunda tercera"
                         "primera primera segunda cuarta"
                         "quinta sexta septima octava";

    &__nota:nth-child(1){
        grid-area: primera;
    }
    &__nota:nth-child(2){
        grid-area: segunda;
    }
    &__nota{
        min-height: 150px;
    }

}
}


</style>