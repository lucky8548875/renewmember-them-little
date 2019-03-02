<template lang="pug">
  #admin
    nav.fixed.top.wide.flex.justify-space-between.padding-x-small.shadow.z-nav(style="min-height: 5rem")
      //- Left Side
      div.flex.align-center
        //- Hamburger Menu
        .menu.hide-large.center-child
          a.padding.inline-block(href="#" @click="$refs.admindrawer.toggle()")
            fa(icon="bars")
        //- Nav Logo
        .logo.show-medium-plus.center-child.padding-x-medium
          strong Admin Console

        //- Searchbar
        admin-searchbar.margin-right

        //- Navigation Links
        ul.links.remove-list-style.show-large.flex.center-child-child
          li
            router-link.special.padding(to='/admin/dashboard' :class="{'active': $route.path.includes('dashboard')}") Dashboard
          li
            router-link.special.padding(to='/admin/transactions' :class="{'active': $route.path.includes('transactions')}") Transactions
          li
            router-link.special.padding(to='/admin/settings' :class="{'active': $route.path.includes('settings')}" v-if="$store.getters.getAccessLevel >= 3" ) Settings
          li
            router-link.special.padding(to='/admin/reports' :class="{'active': $route.path.includes('reports')}" v-if="$store.getters.getAccessLevel >= 3" ) Reports
              
      
      //- Right Side
      div.flex.center-child
        //- notification-button
        router-link.padding(to="/")
          span.margin-right-small.hide-small Exit Console
          fa(icon="sign-out-alt")

    router-view
</template>

<script>

import NotificationButton from '@/components/notification-button.vue'
import AdminSearchbar from '@/components/admin-searchbar.vue'

export default {
  components: {

    'notification-button': NotificationButton,
    'admin-searchbar': AdminSearchbar
  },
  mounted(){
    console.log('calling loadCurrentUser from Admin.vue')
    this.$store.dispatch('loadCurrentUser')
  }
}
</script>