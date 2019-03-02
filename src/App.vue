<template lang="pug">
  #app
    transition(name="fade" mode="out-in")
      router-view
    preloader
    
</template>

<style lang="sass">
@import './assets/sass/proxima'
@import './assets/sass/style'
</style>

<script>
import Preloader from '@/components/preloader.vue'
export default {
  components:{
    'preloader': Preloader
  }
}
</script>


