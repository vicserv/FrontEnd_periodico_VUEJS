<template lang="pug">
.nose
  .nota(v-if="noticia.imagen")
    .nota__principal
        .nota__principal__titulo
          h2 {{noticia.titulo}}
        .nota__principal__imagen
          img(:src="'https://panel.deoaxaca.online' + (!noticia.imagen.formats.small? noticia.imagen.url : noticia.imagen.formats.small.url)")
        .nota__principal__cuerpo
          .nota__principal__cuerpo__compartir
            .sticky
              CompartirVue(:titulo="noticia.titulo" :fecha="format_date(noticia.published_at)" @disminuir="fuente_size(1)" @agrandar="fuente_size(0)")
          .markdown(v-html="$md.render(noticia.nota)" :style="`font-size: ${fuente}rem;`")
    NoticiasLateralVue
  OtrasVue
</template>

<script>
import markdown from 'markdown-it'
import axios from 'axios'
import moment from 'moment'
import moment_timezone from 'moment-timezone'
import TitulosVue from '~/components/maqueta/Titulos.vue'
import CompartirVue from '~/components/maqueta/Compartir.vue'
import OtrasVue from '~/components/maqueta/Otras.vue'
import NoticiasLateralVue from '~/components/maqueta/NoticiasLateral.vue'

export default {
  asyncData(context){
    const id = context.params.id
    return context.$axios
      .get(`https://panel.deoaxaca.online/noticias/${id}`)
      .then((res) => {
        return{ fetchData: res.data}
      })
  },
    head(){
      return{
        title: this.fetchData.titulo,
           meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'DE OAXACA.ONLINE -' + this.fetchData.titulo,
      },
      { hid: 'og:image', property: 'og:image', content: 'https://panel.deoaxaca.online' + (!this.fetchData.imagen.formats.small? this.fetchData.imagen.formats.thumbnail.url : this.fetchData.imagen.formats.small.url) }
      
    ],
      }
      

  },
    components:{
      TitulosVue, CompartirVue, OtrasVue, NoticiasLateralVue
    },
     data() {
    return{
      noticia: [],
      fuente: 1,
    }
  },
  methods: { 
      format_date(value){
         if (value) {
           return moment(String(value)).tz('America/Mexico_City').format('DD/MM/YYYY h:mm a', '')
          }
      },
      fuente_size(value){
        if(this.fuente < 1.6 & this.fuente > 0.8){
          if(value === 0){
          this.fuente -= 0.1
        }else{
          this.fuente += 0.1
        }
        }else if(this.fuente >= 1.6){
          this.fuente -= 0.1
          alert('ES EL TAMAÑO MAXIMO')
        }else if(this.fuente <= 0.8){
          this.fuente += 0.1
          alert('ES EL TAMAÑO MINIMO')
        }
        
      }
   },
    async created(){
      try {
        const res = await axios.get(`https://panel.deoaxaca.online/noticias/${this.$route.params.id}`) /* AQUI SE HACE LA PETICION GET */
        
        this.noticia = res.data;
        
        await axios.put(`https://panel.deoaxaca.online/noticias/${this.noticia.id}`, {
        vistas: this.noticia.vistas + 1})
      } catch (error) {
        console.log(error)
      }
      
    }

    
}
</script>


<style lang="scss" scoped>

.nota{
  width: 85%;
  margin: 0 auto;
     
     margin: 0 auto;

    &__principal{

      padding: 0 20px;
     
      
      &__titulo{
          text-align: center;
          margin-bottom: 20px;
          color: rgb(87, 87, 87);
       }

      &__imagen{
         margin: 0 auto;
         width: 90%;
      img{
        width: 100%;
        height: auto;
        border-radius: 10px;
        }}
    }

      
}
@media  (min-width: 992px){
.nota{
    display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 3fr 1fr;
    &__principal{
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      align-items: center;

                &__cuerpo{
        display: grid;
        grid-template-columns: auto 1fr;
        margin: 40px 0;

      &__compartir{
        margin: 0 10px;
        position: relative;
        background-color: rgb(247, 247, 247);
        .sticky{

        position:sticky;
        top: 50px;
        }
      }
      }

    }


}
}


</style>