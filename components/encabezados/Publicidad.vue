<template lang="pug">
.publicidad
    SlidePublicidadVue.carru
    .publicidad__redes
        .publicidad__redes__titulo SIGUENOS
        i.fab.fa-facebook-f
        i.fab.fa-twitter
        i.fab.fa-instagram

</template>

<script>
import SlidePublicidadVue from './SlidePublicidad.vue'

export default {
    components:{
        SlidePublicidadVue
    }
    
}
</script>

<style lang="scss" scoped>

.publicidad{
    display: grid;
    grid-template-columns:  1fr 1fr;
    width: 90%;
    align-items: start;
    margin: 5px auto;
    border-radius: 5px;
    
 


    &__redes{
        display: none;
    }
}

@media  (min-width: 768px){
.publicidad{
    display: grid;
    grid-template-columns:  1fr 1fr;
    
    width: 70rem;
    max-width: 90%;

    &__redes{
        display: block;
        padding: 0 10px;
        text-align: center;

        &__titulo{
            background-color: $color-secundario;
            color: white;
            padding: 8px;
            border-radius: 4px;
        }
    }
}
}
.fa-facebook-f{
    background-color: #1877f2;
}
.fa-twitter{
    background-color: #55acee;
}
.fa-instagram{

    background-color: #e4405f;
}

i{
    
    margin: 8px;
    color: white;
    padding: 8px;
    width: 30px;
    text-align: center;
    border-radius: 4px;
}

</style>