<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
    <div class="share-network-list">
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{backgroundColor: network.color}"
        :url="sharing.url"
        :title="sharing.title"
        :quote="sharing.quote"
        :hashtags="sharing.hashtags"
        :twitterUser="sharing.twitterUser"
      >
        <i :class="network.icon" class="hola"></i>

      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        titulo: String
    },
  data () {
    return {
      sharing: {
        url: `https://deoaxaca.online${this.$route.fullPath}`,
        title: `${this.titulo}`,
        description: `${this.titulo}`,
        quote: `${this.titulo}`,
        hashtags: 'deoaxaca #vite #javascript',
        twitterUser: 'deoaxaca'
      },
      networks: [
        { network: 'facebook', name: 'FACEBOOK', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'whatsapp', name: 'WHATSAPP', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
        { network: 'twitter', name: 'TWITTER', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
    
        
      ]
    }
  }
}
</script>

<style scoped>

  .share-network-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }
  a[class^="share-network-"] {
    flex: none;
    color: #FFFFFF;
    background-color: #333;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 10px 0;
  }
  a[class^="share-network-"] .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
  }
  a[class^="share-network-"] span {
    padding: 0 10px;
    flex: 1 1 0%;
    font-weight: 500;
  }
  a{
      text-decoration: none;
  }

  .hola:hover{
      opacity: 50%;
  }
</style>