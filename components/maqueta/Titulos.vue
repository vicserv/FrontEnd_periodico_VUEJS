<template lang="pug">
.titulo {{titulo}}   
</template>
<script>
export default {
    props:{
        titulo: String
    }
}
</script>
<style lang="scss" scoped>
.titulo{
    width: 85%;
    margin: 0 auto;
    background-color: $color-secundario;
    padding: 10px;
    color: white;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;

}
</style>