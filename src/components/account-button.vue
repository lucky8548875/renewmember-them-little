<template lang="pug">

  a#account-button.padding-x.padding-y-small.flex.align-center.relative(v-if="Object.keys($store.state.user).length != 0" tabindex=0)
    clazy-load(:src="$store.state.user.photoURL")
      img.smallimg.margin-right-small.category_image(:src="$store.state.user.photoURL")
      div.smallimg.margin-right-small.category_image.animated-background(slot="placeholder")
    fa(icon="angle-down" )
    div#context.card.padding.flex.column(tabindex=1 style="min-width: 15rem")
      .padding-x.padding-y-small.flex.align-center.relative
        clazy-load(:src="$store.state.user.photoURL")
          img.smallimg.margin-right.category_image(:src="$store.state.user.photoURL")
          div.smallimg.margin-right.category_image.animated-background(slot="placeholder")
        h3 {{$store.state.account_name}}
      ul.links.remove-list-style.flex.column
        li: a.padding.block(href="/admin" v-if="$store.getters.getAccessLevel >= 2") Admin Console
        each val, index in {'My Account':'/account'}
          li: router-link.padding.block(to=val :class="{'active': $route.path=='"+val+"'}")=index
        li: a.padding.block(href="#" @click="$store.dispatch('signOut'); $router.push('/')") Logout
        
</template>

<style lang="sass" scoped>

.smallimg
  border-radius: 50%
  width: 2rem
  height: 2rem
#context
  display: none
  right: 0
  top: 0
  cursor: default
#account-button:focus #context, #context:focus, #context:hover
  display: flex
  position: absolute
  
</style>

<script>
export default {

}
</script>
