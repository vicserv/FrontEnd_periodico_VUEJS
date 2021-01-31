<template lang="pug">
.busqueda
    .noti(v-if="noticias.length === 0") 
        TitulosVue(:titulo="'NO SE ENCONTRARON RESULTADOS DE: '+ $route.params.id")
    .noti(v-if="noticias.length > 0")
        TitulosVue(:titulo="'RESULTADOS DE: '+ $route.params.id")
        NoticiaSecundariaVue(:noticias="noticias"  :resultados="resultados" @accion="paginacion")
   
</template>

<script>
import NoticiaSecundariaVue from '~/components/maqueta/NoticiaSecundaria.vue'
import TitulosVue from '~/components/maqueta/Titulos.vue'
import axios from 'axios'

export default {
    components:{
        TitulosVue, NoticiaSecundariaVue
    },
    data(){
  return{
    noticias: [],
    pagina: 0,
    resultados: false,
    urlbusqueda: `https://panel.deoaxaca.online/noticias?titulo_contains=`
  }
},
computed:{
 url(){
      return `${this.urlbusqueda}${this.$route.params.id}&_start=${this.pagina}&_limit=3`;
    }
},
created(){
    this.obtenerDatos();
},
methods:{
    async obtenerDatos(){
      const respuesta = await axios.get(this.url);
      this.noticias = respuesta.data;
    },
    
       paginacion() {
        setTimeout(() => {
        this.pagina = (this.pagina + Number(3));
        
        
         axios
          .get(this.url)
          .then(respuesta => {
            if (respuesta.data.length > 0) {
              
              respuesta.data.forEach(item => this.noticias.push(item));
              
            } else {
              this.resultados = true;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, 200);
    }
  },
    
}
</script>

<style lang="scss" scoped>

</style>