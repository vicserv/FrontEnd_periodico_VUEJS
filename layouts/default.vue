<template lang="pug">
.la
  .layout
    EncabezadoVue
    NavbarVue
    BarraNotaVue
    PublicidadVue
    Nuxt
    FooterVue
</template>

<script>
import BarraNotaVue from '~/components/encabezados/BarraNota.vue'
import EncabezadoVue from '~/components/encabezados/Encabezado.vue'
import FooterVue from '~/components/encabezados/Footer.vue'
import NavbarVue from '~/components/encabezados/Navbar.vue'
import PublicidadVue from '~/components/encabezados/Publicidad.vue'

export default {
  components:{
    BarraNotaVue, EncabezadoVue, NavbarVue, PublicidadVue, FooterVue
  }
  
}
</script>

<style lang="scss" >
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

 
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

@media  (min-width: 1100px){
  html{
    background-image: url(../static/fondo.png);
    background-attachment: fixed;
    background-size: 100%;

    margin-bottom: 50px;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.markdown{
  text-align: justify;
  line-height: 1.5;
  overflow: hidden;
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
