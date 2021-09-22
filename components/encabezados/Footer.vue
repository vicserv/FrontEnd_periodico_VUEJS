<template lang="pug">
.footer
    .oaxaca DE OAXACA  
      span.texto-chico &copy {{currentDateTime()}}
    .texto-chico Desarrollado Por: vidi.server@gmail.com
    
</template>

<script>
export default {
  methods: {
    currentDateTime() {
      return this.$moment().format("YYYY");
    }
  }
};
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
.texto-chico {
  margin-top: 2px;
  font-size: 0.7rem;
  color: rgb(245, 214, 214);
}
</style>
