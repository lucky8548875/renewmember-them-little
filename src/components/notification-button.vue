<template lang="pug">
div(v-if='$store.getters.isAuthenticated')
  a#notification-button.padding(tabindex=1)
    fa(icon="bell")
    div#unread(v-if="!$store.getters.notifications.every(notification => notification.isRead == 1)"): span {{$store.getters.notifications.filter(notification => notification.isRead == 0).length}}
    div#context.card.flex.column(tabindex=1)
      ul.links.remove-list-style
        div(v-for="notification in $store.getters.notifications")
          li(:class="{'notification-unread':!notification.isRead}")
            a.padding.wide.inline-block(@click="$store.dispatch('markAsRead',notification.notification_id); $refs.notification.show(notification)" style="border-radius: 0")
              strong.padding-bottom-small {{notification.notification_message}}
              h4 {{notification.created}}

  modal(ref="notification" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center-medium-plus.flex.column.five-large.seven-medium.twelve-small.max-high.fixed-fill-small
            div.flex.justify-space-between.align-center.wide
              h2.padding Notification
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              h4 {{params.created}}
              br
              span {{params.notification_message}}


</template>

<script>
import Modal from '@/components/reusable/modal.vue'

export default {
  mounted () {
    console.log('NBxx: Checking if has userId..')
    if(this.$store.getters.userId!=null){
      console.log('Yes, User id is ' + this.$store.getters.userId)
      console.log('calling loadNotifications from mounted() NB')
      this.$store.dispatch('loadNotifications')
    }
    else{
      console.log('Not authenticated as of the moment')
    }
  },
  components: {
    'modal': Modal,
  },

}
</script>


<style lang="sass" scoped>
#notification-button
  position: relative

  #unread
    position: absolute
    top: 0.25rem
    right: 0.3rem
    background-color: cornflowerblue
    width: 1.25rem
    height: 1.25rem
    display: flex
    border-radius: 50%
    border: 2px solid white
    span
      margin: auto
      color: white
      font-size: 0.9rem
  strong
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    height: 1.2rem
    width: 100%
    display: inline-block
    -webkit-line-clamp: 1
  
#context
  display: none
  right: 0
  top: 100%
  cursor: default
  min-width: 17rem
  overflow: hidden
  max-width: 100%
  max-height: 70vh
  overflow-y: auto
#notification-button:focus #context, #context:focus, #context:hover
  display: flex
  position: absolute

a
  border-radius: none

.notification-unread
    background-color: transparentize(cornflowerblue,0.9)
    strong, h4
        color: darken(cornflowerblue,15) !important
    strong
        font-weight: 900 !important

    &:hover
        background-color: transparentize(cornflowerblue,0.7)
        a
            background-color: transparent
</style>
