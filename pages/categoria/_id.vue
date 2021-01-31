<template lang="pug">
NoticiasVue(:direccion="direccion" :titulo="'LO ULTIMO'")
  
</template>

<script>
import NoticiasVue from '~/components/maqueta/Noticias.vue'


export default {
  components: {
    NoticiasVue
  },
   data(){
      return{
          direccion: `https://panel.deoaxaca.online/noticias?_sort=id:desc&categorias.titulo_eq=${this.$route.params.id}`
      }
  }
  
}
</script>

<style lang="scss" scoped>



 

</style>