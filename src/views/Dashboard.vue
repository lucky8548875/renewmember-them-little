<template lang="pug">
  #dashboard.light
    transition(name="slide-down" appear)
      nav.fixed.top.wide.flex.align-center.justify-space-between.padding-x-small.shadow.z-nav(style="min-height: 5rem; will-change: transform")
        //- Left
        div.flex
          //- Hamburger Menu
          .menu.hide-large.center-child
            a.padding.inline-block(href="#" @click="$refs.dashboarddrawer.toggle()")
              fa(icon="bars")
              
          //- Back to Home button
          .menu.show-large.center-child
            router-link.padding.inline-block(to="/")
              fa(icon="arrow-left").margin-right
              span Back to Home
          div.center-child
            span.padding
              strong My Dashboard
        //- Right
        div.center-child
          notification-button
          account-button
    

    //- Sidebar-Main Container
    
    div.flex.high(style="padding-top: 5rem")
      
      //- Sidebar
      transition(name="slide-right" appear)
        aside.shadow.show-large.padding-top.padding-right(style="min-width: 15rem; will-change: transform")
          ul.remove-list-style
            li
              router-link.special(to="/dashboard/bookings" :class="{'active': $route.path=='/dashboard'||$route.path=='/dashboard/bookings'}" style="border-radius: 0 2rem 2rem 0").padding.inline-block.wide
                fa(icon="book" fixed-width).margin-right
                span Bookings
            li
              router-link.special(to="/dashboard/orders" :class="{'active': $route.path=='/dashboard/orders'}" style="border-radius: 0 2rem 2rem 0").padding.inline-block.wide
                fa(icon="shopping-cart" fixed-width).margin-right
                span Orders
      main.wide
        transition(name="fade" mode="out-in")
          router-view

      drawer.z-menu(:visible="false" alias="home-drawer" ref="dashboarddrawer").fixed.top.padding
        //- Sidebar Links
        ul.links.remove-list-style.flex.column
          each val, index in {'My Bookings':'/dashboard/bookings','My Orders':'/dashboard/orders'}
              li
                router-link.padding.inline-block(to=val :class="{'active': $route.path=='"+val+"'}")=index
      
</template>

<script>
import AccountButton from '@/components/account-button.vue'
import NotificationButton from '@/components/notification-button.vue'
import Drawer from "@/components/reusable/drawer.vue";


export default {
  components: {
    'drawer': Drawer,
    'account-button': AccountButton,
    'notification-button': NotificationButton,
  },
  mounted(){
    console.log('calling loadCurrentUser from Dashboard.vue')
    this.$store.dispatch('loadCurrentUser')
  }
}
</script>
