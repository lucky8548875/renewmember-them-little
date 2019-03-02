<template lang="pug">
  #sign-in-button.center-child(v-if="Object.keys($store.state.user).length === 0")
    span.center-child-child(v-if="$store.state.authLoadingStatus == 'LOADING'")
      span.padding
        fa(icon="sync-alt" spin)
    span.center-child-child(v-else)
      //- a.padding(href="#" @click="$store.dispatch('facebookSignIn')")
      a#real-sign.padding(href="#" tabindex=0)
        span Login
        fa.margin-left-small(icon="sign-in-alt")
        div#context.card.padding.flex.column(tabindex=1 style="min-width: 15rem")
          ul.links.remove-list-style.flex.column
            li: a.padding.block(@click="$store.dispatch('facebookSignIn')") Login with Facebook
            li: a.padding.block(@click="$refs.smsModal.show()") Login with SMS
    modal(ref="smsModal" inline-template)
      div
        transition(name='fade' appear)
          #backdrop.fixed-fill(@click="toggle" v-if="visible")
        transition(name='center-scale' appear)
          #modal(v-if="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding SMS Sign In
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form(@submit.prevent="$parent.sendSmsToPhone($event)")
                fieldset
                  legend Enter your Mobile Number
                  div.flex.align-center.justify-center
                    span +63
                    input(type="number" id="phone" name="phone" required placeholder="XXXXXXXXXX" min="9000000000" max="9999999999" step="1")
                    button(type="submit" id="sms-sign-in") Send Code
              form(@submit.prevent="$parent.checkCode($event)")
                fieldset
                  legend Enter the code below
                  div.flex.align-center.justify-center
                    input(type="text" placeholder="XXXXXX" id="code" name="code" required)
                    br
                    button(type="submit") Confirm

            
</template>

<style lang="sass" scoped>
#context
  display: none
  right: 0
  top: 0
  cursor: default
#real-sign:focus #context, #context:focus, #context:hover
  display: flex
  position: absolute

#real-sign
  span
    color: cornflowerblue

  path
    fill: cornflowerblue
</style>

<script>
import Modal from '@/components/reusable/modal'
export default {
  components:{
    'modal': Modal
  },
  methods:{
    sendSmsToPhone(submitEvent){
      var phone = "+63" + submitEvent.target.elements.phone.value
      this.$store.dispatch('smsSignIn',phone)
    },
    checkCode(submitEvent){
      var code = submitEvent.target.elements.code.value
      this.$store.dispatch('smsSignInCheckCode',code)
    }
  }
  
}
</script>
