<template lang="pug">
  .category_container
    a.category(v-for="category in $store.getters.categories" @click="$store.commit('setSelectedCategoryId',category.category_id); $router.push('/book/package')" :class="{'active':$store.getters.selectedCategoryId==category.category_id}" v-if="category.category_active")
      clazy-load(:src="category.category_image")
        img.category_image(:src="category.category_image")
        div.category_image.animated-background(slot="placeholder")
      h3(style="font-weight: bold").category_title {{ category.category_name }}
      p.category_description {{category.category_description}}
</template>

<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'

.category_container
  display: inline-flex
  overflow-x: auto
  padding: 1rem 2rem 2rem
  box-sizing: border-box
  max-width: 100%

  @include medium-plus
    width: calc(100% - 0.5rem)
    justify-content: center
    margin-left: 0.5rem

  .category
    position: relative
    min-width: 14rem
    max-width: 14rem
    min-height: 18rem
    background-color: white
    border-radius: 0.5rem
    margin-right: 1rem
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.1)
    text-align: left
    transition: 0.2s background-color
    transition: background-color 0.2s, transform 0.2s
      

  .category::after
    content: ""
    display: block
    position: absolute
    right: -2rem
    width: 2rem
    height: 1px

  .category:active,.category.active
    background-color: cornflowerblue
    box-shadow: 0 1rem 2rem transparentize(cornflowerblue,0.5)
    color: white

    &:active
      background-color: darken(cornflowerblue,10)
      transform: scale(0.9)

    h3, p
      color: white

  .category_description, .category_title
      color: white

  h3.category_title
    color: #333
    margin-top: 2rem
    margin-left: 2rem
    margin-right: 2rem
    margin-bottom: 0.5rem

  p.category_description
    margin-left: 2rem
    margin-right: 2rem
    margin-bottom: 2rem
    font-size: 0.9rem
    color: #aaa

  .category_image
    width: 100%
    height: 8rem
    background-color: #eee
    border-radius: 0.5rem 0.5rem 0 0


</style>
