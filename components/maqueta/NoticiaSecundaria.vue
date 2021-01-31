<template lang="pug">
.secundarias
    .secundarias__noticias
        TarjetaNoticiaVue.secundarias__noticias__nota(
                    v-for="(item, index) in noticias" :key="index" 
                    :titulo="item.titulo"
                    :categoria="item.categorias[0].titulo"
                    :imagen="item.imagen.url"
                    :fecha="item.published_at"
                    :url="item.slug")
        .secundarias__noticias__botoncarga
            a(@click='boton' v-if='!resultados') Ver mas
            p.mt-4(v-if='resultados') Llegaste al final

    
    NoticiasLateralVue
        
    
</template>
<script>
import TarjetaNoticiaVue from './TarjetaNoticia.vue'
import NoticiasLateralVue from './NoticiasLateral.vue'

export default {
    
    components:{
        TarjetaNoticiaVue,NoticiasLateralVue
    },
    props:{
        noticias: {},
        resultados: Boolean,
    },
    methods:{
          boton(){
            this.$emit('accion')
        }
  }
    
    
}
</script>
<style lang="scss" scoped>
.secundarias{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    width: 85%;
    margin: 10px auto;
    margin-bottom: 40px;
   
    &__noticias{
        display: grid;
        grid-template-rows: 1fr 1fr ;
        grid-gap: 1.5rem;
        
        &__nota{
            min-height: 150px;   
        }

        &__botoncarga{
        grid-column-start: 1;
        grid-column-end: -1;
        text-align: center;
        margin-bottom: 20px;

            a{
            margin: 0 auto;
            background-color: $color-secundario;
            color: white;
            padding: 8px;
            border-radius: 5px;
            cursor: pointer;
            }

            a:hover{
                background-color: $color-principal;
            }    
        }
    }
}
@media (orientation: landscape) {
.secundarias{
    grid-template-columns: 1fr;
    &__noticias{
        display: grid;
        grid-template-columns:1fr 1fr;
    }
    &__lateral{
        display: none;
    }
}    
}
@media  (min-width: 768px){
.secundarias{
    grid-template-columns: 2fr 1fr;
    &__noticias{
        display: grid;
        grid-template-columns:1fr 1fr ;
    }
    &__lateral{
        display: block;
    }
}}

@media  (min-width: 992px){
.secundarias{
    grid-template-columns: 3fr 1fr;
    &__noticias{
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
    }
    &__lateral{
        display: block;
    }   
}}
</style>