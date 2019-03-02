<template lang="pug">
#theme
  .themes_container
    a.theme(v-for="theme in $store.getters.themes" :class="{'active':$store.getters.booking.theme_ids.includes(theme.theme_id)}" @click="$store.dispatch('preparetheme',theme.theme_id)")
      clazy-load(:src="theme.theme_image")
        img.category_image(:src="theme.theme_image")
        div.category_image.animated-background(slot="placeholder")

  .bottom_bar
    .selected_themes
      a.s_theme(v-for="item,index in $store.getters.booking.package.package_themes" @click="$store.dispatch('preparetheme',$store.getters.themes.find(theme => theme.theme_id == $store.getters.booking.theme_ids[index]).theme_id)")
        img(v-if="$store.getters.booking.theme_ids[index]!=null" :src="$store.getters.themes.find(theme => theme.theme_id == $store.getters.booking.theme_ids[index]).theme_image")
    
    div.wide.flex.center-child.padding
      router-link.continue-button(v-if="$store.getters.booking.theme_ids.length == $store.getters.booking.package.package_themes" to="/book/addon") Continue
	
</template>

<style lang="sass" scoped>
// .themes_container: a.theme(v-for="theme in $root.getters.themes" :class="{'active':$store.getters.booking.theme_ids.includes(theme.theme_id)}" @click="$store.dispatch('preparetheme',theme.theme_id)"): img(:src="theme.theme_image")
// 	.bottom_bar: .selected_themes: a.s_theme(v-for="item,index in $store.getters.booking.package.package_themes" @click="$store.dispatch('preparetheme',$store.getters.themes.find(theme => theme.theme_id == $store.getters.booking.theme_ids[index]).theme_id)")
//     img(v-if="$store.getters.booking.theme_ids[index]!=null" :src="$store.getters.themes.find(theme => theme.theme_id == $store.getters.booking.theme_ids[index]).theme_image")
//     fa.icon(icon="times" v-if="$store.getters.booking.theme_ids[index]!=null")
//   a.continue_button(v-if="$store.getters.booking.theme_ids.length == $store.getters.booking.package.package_themes")
//   span Continue
@import '../../assets/sass/helpers/responsive'

.themes_container
  padding: 2rem
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))
  gap: 0.5rem
  margin-bottom: 4rem

  @include large
    width: 80%
    margin-left: auto
    margin-right: auto

  .theme
    position: relative
    img
      width: 100%
      border-radius: 0.5rem
            
  .theme.active
    img
      filter: brightness(0.8) sepia(100%) hue-rotate(180deg) saturate(3)

    &::after
      content: "✓"
      font-weight: 900
      position: absolute
      left: 50%
      top: 50%
      transform: translateX(-50%) translateY(-50%)
      font-size: 4rem
      color: white

.bottom_bar
  position: fixed
  bottom: 0px
  background-color: white
  width: 100%
  box-sizing: border-box
  padding: 1rem
  box-shadow: 0 -1rem 5rem rgba(0,0,0,0.1)
  border-radius: 0.5rem 0.5rem 0 0
  display: flex
  flex-direction: column
    
  .selected_themes
    display: flex
    margin-bottom: 0.5rem
    justify-content: center

    .s_theme
      min-width: 4rem
      min-height: 3rem
      max-width: 4rem
      border-radius: 0.5rem
      margin: 0.5rem
      border: 2px dashed #ddd
      position: relative
      overflow: hidden

      img
        width: 100%

      &::after
        content: "✖"
        font-weight: 900
        position: absolute
        left: 70%
        top: 30%
        transform: translateX(-50%) translateY(-50%)
        font-size: 1rem
        color: white


</style>
