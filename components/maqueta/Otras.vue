<template>

<div v-if="noticias.length > 0" class="otras">
    <TitulosVue :titulo="'Más noticias'"/>
    <NoticiaSecundariaVue :noticias="noticias" :resultados="resultados" @accion="paginacion"/>
</div>     

</template>

<script>
import axios from 'axios'
import NoticiaSecundariaVue from './NoticiaSecundaria.vue'
import TitulosVue from './Titulos.vue'

export default {
  name: 'index',
  components: {NoticiaSecundariaVue, TitulosVue},
data(){
  return{
    noticias: [],
    pagina: 0,
    resultados: false
  }
}, 
computed:{
 url(){
      return `https://panel.deoaxaca.online/noticias?_sort=id:desc&_start=${this.pagina}&_limit=12`;
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
        this.pagina = (this.pagina + Number(12));
        
        
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