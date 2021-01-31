<template lang="pug">
.contenedor
  router-link.buscado(v-for='(item, index) in noticias' :key='index' :to="'/nota/'+ item.slug")
    .buscado__cuerpo
      .buscado__cuerpo__titulo {{item.titulo}}
        .buscado__cuerpo__fecha {{format_date(item.published_at)}}

</div>



</template>

<script>
import axios from 'axios'
import moment from 'moment'
import moment_timezone from 'moment-timezone'
export default {
  data(){
    return{
    noticias: [],
    pagina: 0
    }
  },
  
  computed:{
    url(){
      return `https://panel.deoaxaca.online/noticias?_sort=vistas:desc&_limit=3&_start=${this.pagina}`;
    }
  },
  created(){
    this.obtenerDatos();
  },
  methods:{
      format_date(value){
     if (value) {
       return moment(String(value)).tz('America/Mexico_City').format('DD/MM/YY h a', '')
      }
  },
    async obtenerDatos(){
      const respuesta = await axios.get(this.url);
      this.noticias = respuesta.data;
    }
    }
  }
</script>

<style lang="scss" scoped>

.buscado{
    
    text-decoration: none;
    color: white;

    
    &__cuerpo{
        background-color: $color-secundario;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        &__fecha{
            margin: 5px 0;
            font-size: 0.8rem;
        }
        
    }
    
}
.borde{
  border-bottom: 5px ridge #1C6EA4;
}
.degradado:hover{ 
  background: #193c66e5;
  color: rgb(255, 255, 255);
  transition: 1s; 
}
</style>