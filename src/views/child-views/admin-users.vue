<template lang="pug">
  div.padding.high.light(style="padding-top: 6rem")
    
    //- Contents
    div.card.padding-medium.margin
      div.flex.wide.justify-space-between
        h2 Users
        //- Right
        input(type="search")

      table.wide
        thead
          tr
            th ID
            th Name
            th Phone
            th Change Account Type
        tbody
          tr(v-for="account in $store.getters.allUsers")
            td.item {{ account.account_id }}
            td {{ account.account_name  }}
            td
              span.item(v-if="account.account_contact!='' && account.account_contact!=null") {{ account.account_contact }}
              em.item(v-else) (not set)
            td
              span.switches
                a.switch(@click="$store.dispatch('changeAccountType',{account_id: account.account_id,account_type: 'USER'})" :class="{'active':account.account_type=='USER'}") User
                a.switch(@click="$store.dispatch('changeAccountType',{account_id: account.account_id,account_type: 'MOD'})" :class="{'active':account.account_type=='MOD'}") Moderator
                a.switch(@click="$store.dispatch('changeAccountType',{account_id: account.account_id,account_type: 'ADMIN'})" :class="{'active':account.account_type=='ADMIN'}") Admin
                a.switch(@click="$store.dispatch('changeAccountType',{account_id: account.account_id,account_type: 'BLOCKED'})" :class="{'active':account.account_type=='BLOCKED'}") Blocked
          
</template>

<style lang="sass" scoped>
  a.active
    background-color: cornflowerblue
    color: white
  .item
    color: gray
    font-weight: bold
  .switch
    padding: 0.75rem
    display: inline-block
  .switch:hover
    background-color: #ddd
  .switch.active:hover
    background-color: cornflowerblue
  .switches
    background-color: #eee
    border-radius: 3rem
    display: inline-block
</style>


<script>
import Modal from '@/components/reusable/modal.vue'
export default {

  components: {
    'modal': Modal
  },
  created(){
    this.$store.dispatch('getAllUsers')
  }
}
  
</script>

