<template lang="pug">
  #home
    .fb-customerchat( attribution=setup_tool  page_id="746988385642006"  theme_color="#3676e8")
  
    //- Navigation bar
    transition(name="slide-down" appear)
      nav.z-nav.wide.flex.absolute.top.justify-space-between.padding-x-small(style="min-height: 5rem")
        //- Left Side
        div.flex
          //- Hamburger Menu
          .menu.hide-large.center-child
            a.padding.inline-block(href="#" @click="$refs.homedrawer.toggle()")
              fa(icon="bars")
          //- Nav Logo
          .logo.show-medium-plus.center-child.padding-x-medium
            strong Remember Them Little
          //- Navigation Links
          ul.links.remove-list-style.show-large.flex.center-child-child
            each val, index in {'Home':'#home','Services':'#services','Gallery':'#gallery','FAQ':'#faq','Contact':'#contact'}
              li
                a.light-font.padding(href=val :class="{'active': $route.path=='"+val+"'}")=index
        //- Right Side
        div.flex.center-child
          notification-button(v-if="$store.getters.userId!=null")
          account-button(v-if="$store.getters.isAuthenticated")
          sign-in-button
    //- Main View
    main
      transition(name="fade" mode="out-in")
        router-view
    //- Sidebar
    drawer.z-menu(:visible="false" alias="home-drawer" ref="homedrawer").fixed.top
      .padding
        //- Sidebar Links
        ul.links.remove-list-style.flex.column
          each val, index in {'Home':'#home','Services':'#services','Gallery':'#gallery','FAQ':'#faq','Contact':'#contact'}
              li
                a.padding.inline-block(href=val :class="{'active': $route.path=='"+val+"'}")=index
    
</template>

<script>
import Drawer from "@/components/reusable/drawer.vue";
import SignInButton from "@/components/sign-in-button.vue";
import AccountButton from "@/components/account-button.vue";
import NotificationButton from "@/components/notification-button.vue";

export default {
	name: "home",
	components: {
		drawer: Drawer,
		"sign-in-button": SignInButton,
		"account-button": AccountButton,
		"notification-button": NotificationButton
  },
  mounted(){
    console.log('calling loadCurrentUser from Home.vue')
    this.$store.dispatch('loadCurrentUser')
  }
};
</script>

<style lang="sass" scoped>
.light-font
  font-weight: lighter !important
</style>
