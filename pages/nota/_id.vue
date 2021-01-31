<template lang="pug">
.contenedor
  .nota(v-if="noticia.imagen")
      .nota__principal
          .nota__principal__titulo
            h2 {{noticia.titulo}}
          .nota__principal__imagen
            img(:src="'https://panel.deoaxaca.online' + noticia.imagen.url ")
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
        content: this.fetchData.titulo
      },
      { hid: 'og:image', property: 'og:image', content: 'https://panel.deoaxaca.online' + this.fetchData.imagen.url }
      
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


<style lang="scss">
.nota{
    width: 85%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;

    &__principal{
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
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
        }
      }
      &__cuerpo{
        display: grid;
        grid-template-columns: 1fr;
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
@media  (min-width: 992px){
.nota{
      display: grid;
    grid-template-columns: 3fr 1fr;
    &__principal{
      &__cuerpo{
        display: grid;
        grid-template-columns: auto 1fr;
      }
    }
}
}
.markdown{
  text-align: justify;
  line-height: 1.5;

  p{
    margin: 1rem 0;
  }
  img{
    max-width: 90%;
    margin: auto;
    display: block;
    padding: 8px;
  }
  iframe{
  display: block;
  width:100%;
  padding: 0 auto;
  margin: 10px auto;
  
  }
  h1, h2, h3, h4, h5{
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  color: rgb(2, 2, 58);
  margin: 1rem 0;
    }
  
  blockquote {
  display:block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 0 0 20px;
  position: relative;
  
  /*Font*/
  font-family: Georgia, serif;

  line-height: 1.2;
  color: #666;
  text-align: justify;
  
  /*Borders - (Optional)*/
  border-left: 15px solid $color-secundario;
  border-right: 2px solid $color-principal;
  
  /*Box Shadow - (Optional)*/
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;
}
blockquote::before{
  content: "\201C"; /*Unicode for Left Double Quote*/
  
  /*Font*/
  font-family: Georgia, serif;
  font-size: 60px;
  font-weight: bold;
  color: #999;
  
  /*Positioning*/
  position: absolute;
  left: 10px;
  top:5px;
}
a {
  color: red;
  text-decoration: none;
  font-weight: 600;
}

blockquote em{
  font-style: italic;
}
a:hover{
  opacity: 50%;
  text-decoration: none;
  font-weight: 600;
}
  
}
</style>