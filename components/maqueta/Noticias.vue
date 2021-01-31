<template lang="pug">
.noticias
    TitulosVue(:titulo="titulo")
    CuerpoNoticiasVue(:principales="principales")
    .secundarias(v-if="noticias.length > 0")
        TitulosVue(:titulo="'MÁS NOTICIAS'")
        NoticiaSecundariaVue(:noticias="noticias" :resultados="resultados" @accion="paginacion")
</template>

<script>
import axios from 'axios'
import TitulosVue from './Titulos.vue'
import CuerpoNoticiasVue from '~/components/maqueta/CuerpoNoticias.vue';
import NoticiaSecundariaVue from './NoticiaSecundaria.vue';

export default {
    components:{
        TitulosVue, CuerpoNoticiasVue, NoticiaSecundariaVue
    },
    
     props:{
    direccion: String,
    titulo: String
    },

    data(){
        return{
    noticias: [],
    principales: [],
    pagina: 7,
    resultados: false
    }
    },

    computed:{
 url(){
      return `${this.direccion}&_start=${this.pagina}&_limit=9`;
    }
},
created(){
  this.noticiasEncabezado();
  this.obtenerDatos();
  
},
methods:{
    async noticiasEncabezado(){
      const respuesta = await axios.get(`${this.direccion}&_start=0&_limit=7`);
      this.principales = respuesta.data;
      
      },
    async obtenerDatos(){
      const respuesta = await axios.get(this.url);
      this.noticias = respuesta.data;
    },
    
       paginacion() {
        setTimeout(() => {
        this.pagina = (this.pagina + Number(9));
        
        
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

<style lang="scss">

</style>