<template lang="pug">

.menu(:class="open ? 'bloque': ''") 
    NuxtLink.menu__logo(to="/")
        img(src='../../static/logo.svg' )
    .menu__opciones(@click="toggle")
        NuxtLink.item(v-for="(item, index) in categoria" :key="index" :to="'/categoria/' + item.titulo" ) {{item.titulo}}

    
    .menu__busqueda
        form.buscar(v-on:submit.prevent)
            input(placeholder="BUSCAR NOTICIAS" v-model="text" )
            button(@click="this.buscar")
                i.fas.fa-search
    .menu__hamburguesa
        a.toggle(@click="toggle")
            i.fas.fa-bars
        
</template>


<script>
import axios from 'axios'
export default {
data(){
    return{
        open: false,
        categoria: [],
        text:'',
    }
},
methods:{
    toggle(){
        this.open = !this.open;
    },
    buscar() {
        if(this.text === ''){
            alert("INGRESA UN TEXTO PARA BUSCAR UNA NOTICIA")
        }else{
            this.$router.push(`/busqueda/${this.text}`);
            this.text = "";
            this.open = false;
        }
            
    },
},
async created(){
    try {
      const res = await axios.get('https://panel.deoaxaca.online/categorias') /* AQUI SE HACE LA PETICION GET */
      this.categoria = res.data;
      
      } catch (error) {
          console.log(error)
      }
    }

    
}
</script>

<style lang="scss" scoped>



.menu{
    background-color: $color-secundario;
    position: sticky;
    top: 0;
   
    z-index: 100;
    display: grid;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    grid-template-columns: 1fr auto ;
    grid-template-rows: 1fr;
    grid-gap: 5px;
    grid-template-areas: "logo     hamburguesa";
    height: auto;
    transition: transform .15s;



    &__logo{
        grid-area: logo;
        img{
            height: 1rem;
        }
    }

    &__opciones{
        grid-area: opciones;
        display: none;
      
        padding:8px 0px;
        .item{
            margin: 8px 10px;
            text-decoration: none;
            color: $color-claro;
            text-transform: uppercase;
            font-weight: 700;
            display: block;
            outline: none;
            
            
        }
        .item:hover{
            opacity: 0.5;
        }
    }
    &__busqueda{
        grid-area: busqueda;
        display: none;
        .buscar{
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;

            input{
                border-radius: 5px 0px 0px 5px;
                height: 33px;
                outline: none;
                padding: 8px 0px 8px 16px;
                font-size: 12px;
                float: left;
                border: solid 1px #e9e9e9;
                
            }
            button{
                border: none;
                border-radius: 0px 10px 10px 0px;
                height: 33px;
                outline: none;
                color: $color-claro;
                background-color:  rgb(240, 61, 61);
                border: solid 1px rgb(240, 61, 61);
                box-shadow: none;
                border:none;
                
                width: 50px;
                cursor: pointer;
                
                
            }
        }
    }
    &__hamburguesa{
        grid-area: hamburguesa;
        a{
            cursor: pointer;
        }
        i{
            background-color: rgb(240, 61, 61);
            padding: 10px;
            margin: 0px 10px;
            border-radius: 5px;
            color: white;
            outline: none;
            
        }
    }
}



.bloque{
grid-template-columns: 1fr auto ;
grid-template-rows: 1fr 1fr auto;
grid-template-areas: "logo     hamburguesa"
                     "busqueda busqueda"
                     "opciones opciones";
    .menu__busqueda, .menu__opciones{
        display: block;
    }
}


@media  (min-width: 768px){
.menu{
    grid-template-columns: auto 1fr auto ;
    grid-template-rows: 1fr;
    grid-template-areas: "logo opciones busqueda";

    &__opciones{
        display: block;
        .item{
            display: inline;
        }
    }
    &__hamburguesa{
        display: none;
    }
    &__busqueda{
        display: block;
    }
}


}  
.nuxt-link-active.item{
    color:#ccceec
 }
.menu__logo:hover{
    opacity: 50%;
}

</style>

