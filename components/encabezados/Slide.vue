<template lang="pug">
.title(v-if="show.name")
    span {{`${show.name.slice(0, 18)}-${Math.round(show.main.temp - 273.15)} ºC `}}
    img(:src="'https://openweathermap.org/img/wn/'+ show.weather[0].icon + '@2x.png'" style="height: 1rem; ") 
</template>

<script>
import axios from 'axios'
export default {
data() {
    return{
    show: {},
    clima: [],
    }
   
},
methods:{
      count() {
      let i = 0;
      setInterval(() => {
        this.show = this.clima[i];
        i++;
        i === this.clima.length ? (i = 0) : i;
      }, 3000);
    }
},
async created() {
    
        try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/find?lat=17.05&lon=-96.72&cnt=45&appid=ff924bb4ff1f001f04bd640f8a7efa47') /* AQUI SE HACE LA PETICION GET */
        this.clima = res.data.list;
        this.count();
        
      } catch (error) {
        console.log(error)
      }
  },

}

</script>

<style lang="scss" scoped>
.title{
    padding: 4px 8px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    
    
    text-align:left;
    right: 0;
}
</style>