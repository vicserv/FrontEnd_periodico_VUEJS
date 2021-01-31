<template lang="pug">
.barra
    .barra__noticias
        .barra__noticias__titulo 
            i.fas.fa-circle CLIMA
        SlideVue
    .barra__elclima
        .barra__noticias__titulo
            i.fas.fa-circle ULTIMO
        SlideNotaVue
</template>

<script>
import SlideVue from '../encabezados/Slide.vue'
import SlideNotaVue from './SlideNota.vue'

export default {
    components:{
        SlideVue, SlideNotaVue
    }
    
}
</script>

<style lang="scss" scoped>
.barra{
    display: grid;
    width: 90%;
    margin: 0px auto;
    height: 40px;
    background-color: $color-secundario;
    border-radius: 0 0 10px 10px;
    grid-template-rows: 1fr;
    color:white;
    margin-top: 8px;
    padding: 8px;
    border-color: #333333;
    align-content: center; 
  

    &__noticias{
        display: grid;
        grid-template-columns: auto 1fr;

        &__titulo{
            color:white;
            background-color: #333333;
            padding: 4px 8px;
            margin-right: 4px;
            border-radius: 0 0 0 5px;
            font-weight: 700;
            transition: all 0.5s easy;
            
            i::before{
                margin-right: 4px;
                animation-name: pulse;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            }
            @keyframes pulse {
                from {
		    color: $color-secundario;
	        }
	        to {
	        	
                color: $color-claro;
	        }
            }
            
        }
        &__noticia{
            color:white;
             
    
            
        }
    }

    &__elclima{
        display: none;
        grid-template-columns: auto 1fr;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;

        &__titulo{
            color:yellow;
        }
        &__clima{
            color:white;
            
        }
    }
    
}

@media  (min-width: 768px){
    .barra{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    &__elclima{
        display: grid;
    }
    }
    
}

</style>