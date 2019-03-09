<template lang="pug">
#book
  nav.flex.justify-space-between.margin
    span
      a.padding.inline-block(@click="$router.push('/')") 
        fa(icon="home")
        span.margin-left-small.hide-small Back to Home
    span 
    span 
  div.padding-large
    transition(name="switch-up" mode="out-in" appear)
      h3.margin-bottom-small.will-change.text-center-medium-plus(:key="$route.path") Step {{step}}
    transition(name="switch-up-delayed" mode="out-in" appear)
      h1.text-center-medium-plus.will-change(:key="$route.path") {{title}}

  transition(name="fade" mode="out-in")
    router-view(style="transition-delay: 0.3s")
  
</template>

<script>
export default {
  mounted(){
    console.log('calling loadCurrentUser from Book.vue')
    this.$store.dispatch('loadCurrentUser')
  },
  created () {
    this.$store.dispatch('loadCategories')
    this.$store.dispatch('loadPackages')
    this.$store.dispatch('loadThemes')
    this.$store.dispatch('loadAddons')
    this.$store.dispatch('loadInclusions')
    this.$store.dispatch('loadBlockedDates')
    this.$store.dispatch('loadBlockedDays')
  },
  computed:{
    step(){
      if(this.$route.path.includes('category')) return 1
      if(this.$route.path.includes('package')) return 2
      if(this.$route.path.includes('theme')) return 3
      if(this.$route.path.includes('addon')) return 4
      if(this.$route.path.includes('schedule')) return 5
      if(this.$route.path.includes('summary')) return 6
    },
    title(){
      if(this.$route.path.includes('category')) return 'Select a Category'
      if(this.$route.path.includes('package')) return 'Choose a Package'
      if(this.$route.path.includes('addon')) return 'Choose Addons'
      if(this.$route.path.includes('schedule')) return 'Choose a Schedule'
      if(this.$route.path.includes('summary')) return 'Summary'
      var themecount = this.$store.getters.booking.package.package_themes
      if(this.$route.path.includes('theme')) return 'Choose '+ themecount +' Theme' + (themecount > 1 ? 's' : '')
    }
  }

}
</script>

<style lang="sass">
.continue-button
  background-color: cornflowerblue
  color: white
  padding: 1rem
  max-width: 25rem
  min-width: 15rem
  text-align: center
  font-weight: bold
.continue-button:hover
  background-color: #7aaaff
  color: white
.continue-button:active
  background-color: #7aaaff
  color: white
.continue-button:active
  background-color: #4a78cb
</style>
