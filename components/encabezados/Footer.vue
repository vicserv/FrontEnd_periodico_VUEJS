<template lang="pug">
.footer
    .oaxaca DE OAXACA
    .texto-chico {{'Copyright: ' + currentDateTime()}}
</template>

<script>
import moment from 'moment';
export default {

 methods: {
    currentDateTime() {
    moment.locale("es") 
      return moment().format('YYYY', );
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $color-secundario;
  padding: 5px;
  color: white;
  text-align: center;
  font-weight: 600;

}
.texto-chico{
    margin-top: 2px;
  font-size: 0.7rem;
}
</style>