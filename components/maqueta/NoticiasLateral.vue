<template lang="pug">
.late
    .lateral
        SlideCuadradoVue
        LoBuscadoVue
</template>
<script>
import SlideCuadradoVue from '../encabezados/SlideCuadrado.vue'
import LoBuscadoVue from './LoBuscado.vue'

export default {

    components:{
        SlideCuadradoVue, LoBuscadoVue
    }
    
}
</script>
<style lang="scss" scoped>
.late{
    position: relative;
}
.lateral{
    position: sticky;
    top: 60px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 0.5rem;
    margin: 0 10px;


}

</style>