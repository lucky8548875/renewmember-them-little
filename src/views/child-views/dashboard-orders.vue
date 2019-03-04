<template lang="pug">
  .padding-large(style="height: 100%")
    div
      h2 My Orders
    div.margin-y
    
      div(v-for="order in $store.state.myOrders").card.padding.flex.justify-space-between.align-center.margin-bottom-small
        div.flex
          div
            h5 DATE
            br
            span {{order.order_created}}
          div.margin-left-large
            h5 STATUS
            br
            span {{order.order_status}}
        div
          button(@click="$refs.order.show(order)") View Details
      span(v-if="$store.getters.myOrders.length==0") No orders to show.

    modal(ref="order" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-if="visible")
        transition(name='fade')
          #modal(v-if="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Order Details
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              table.wide
                thead
                  tr
                    th Print Size
                    th Filename
                    th Price
                    th Source
                tbody
                  tr(v-for="order in JSON.parse(params.order_list)")
                    td {{order.addon.addon_description}}
                    td {{order.filename}}
                    td {{order.addon.addon_price}}
                    td {{order.addon.addon_source}}
                  tr
                    td(colspan="3") Total Payment upon pickup
                    td {{params.order_total_price}}
              
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {
  components:{
    'modal': Modal
  },
  created () {
    this.$store.dispatch('getUserOrders',this.$store.getters.userId)
  }
}
</script>
