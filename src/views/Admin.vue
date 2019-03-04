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

    drawer.z-menu(:visible="false" alias="admin-drawer" ref="admindrawer").fixed.top.padding
      //- Sidebar Links
      stepper(steps="4" inline-template)
        div
          ul.links.remove-list-style.flex.column(v-if="step==1")
            li: a.padding.inline-block(@click="step=2" :class="{'active': $route.path=='dashboard'}") Dashboard
            li: a.padding.inline-block(@click="step=3" :class="{'active': $route.path=='transactions'}") Transactions
            li: a.padding.inline-block(@click="step=4" :class="{'active': $route.path=='settings'}") Settings
            li: a.padding.inline-block(@click="step=5" :class="{'active': $route.path=='reports'}") Reports
          ul.links.remove-list-style.flex.column(v-else-if="step==2")
            li: a.padding.inline-block(@click="step=1") Back
            li: router-link.padding.inline-block(to="/admin/dashboard/calendar" :class="{'active': $route.path=='dashboard'}") Calendar
            li: router-link.padding.inline-block(to="/admin/dashboard/summary" :class="{'active': $route.path=='transactions'}") Summary
          ul.links.remove-list-style.flex.column(v-else-if="step==3")
            li: a.padding.inline-block(@click="step=1") Back
            li: router-link.padding.inline-block(to="/admin/transactions/bookings" :class="{'active': $route.path=='bookings'}") Bookings
            li: router-link.padding.inline-block(to="/admin/transactions/orders" :class="{'active': $route.path=='orders'}") Orders
          ul.links.remove-list-style.flex.column(v-else-if="step==4")
            li: a.padding.inline-block(@click="step=1") Back
            li: router-link.padding.inline-block(to="/admin/settings/categories" :class="{'active': $route.path=='categories'}") Categories
            li: router-link.padding.inline-block(to="/admin/settings/packages" :class="{'active': $route.path=='packages'}") Packages
            li: router-link.padding.inline-block(to="/admin/settings/addons" :class="{'active': $route.path=='addons'}") Addons
            li: router-link.padding.inline-block(to="/admin/settings/themes" :class="{'active': $route.path=='themes'}") Themes
            li: router-link.padding.inline-block(to="/admin/settings/users" :class="{'active': $route.path=='users'}") Manage Users
            li: router-link.padding.inline-block(to="/admin/settings/site" :class="{'active': $route.path=='site'}") More Settings
          ul.links.remove-list-style.flex.column(v-else-if="step==5")
            li: a.padding.inline-block(@click="step=1") Back
            li: router-link.padding.inline-block(to="/admin/reports/sales" :class="{'active': $route.path=='sales'}") Sales
            li: router-link.padding.inline-block(to="/admin/reports/customers" :class="{'active': $route.path=='customers'}") Customers
</template>

<script>

import NotificationButton from '@/components/notification-button.vue'
import AdminSearchbar from '@/components/admin-searchbar.vue'
import Drawer from "@/components/reusable/drawer.vue";
import Stepper from "@/components/reusable/stepper.vue";
	
export default {
  components: {
		stepper: Stepper,
    drawer: Drawer,
    'notification-button': NotificationButton,
    'admin-searchbar': AdminSearchbar
  },
  mounted(){
    console.log('calling loadCurrentUser from Admin.vue')
    this.$store.dispatch('loadCurrentUser')
  }
}
</script>