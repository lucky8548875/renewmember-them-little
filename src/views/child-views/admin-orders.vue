<template lang="pug">
  div.padding
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Orders

      //- Right
      div
        a.padding(@click="active='all'" :class="{'active':active=='all'}") All
        a.padding(@click="active='for_pickup'" :class="{'active':active=='for_pickup'}") For Pickup
        a.padding(@click="active='released'" :class="{'active':active=='released'}") Released
    
    //- Contents
    table.wide
      tr(v-for="order in filteredOrders")
        td
          h3 Order # {{ order.order_id }} ({{ order.order_status }})
          span by {{ $store.getters.allUsers.find(account => account.account_id == order.account_id).account_name }}
        td
          button.float-right(@click='$refs.order.show(order)') View

    modal(ref="order" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
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
                
                  
              div.flex.wide
                button.flex-grow(v-if="params.order_status == 'PROCESSING'" @click="$store.dispatch('cancelOrder',params.order_id)") Cancel Request
                button.flex-grow.margin-left-small(v-if="params.order_status == 'PROCESSING'" @click="$store.dispatch('notifyForPickup',{order_id: params.order_id,account_id: params.account_id}); visible=false") For Pickup
                button.flex-grow.margin-left-small(v-if="params.order_status == 'READY FOR PICKUP'" @click="$store.dispatch('markAsReleased',{order_id: params.order_id,account_id: params.account_id}); visible=false") Mark as Released
      
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
import Switcher from '@/components/reusable/switcher.vue'
export default {
  mounted(){
    this.$store.dispatch("getAllOrders");
    this.$store.dispatch("getAllUsers");
  },
  components: {
    'modal': Modal,
  },
  data(){
    return {
			active: "all"
		};
  },
  computed: {
		filteredOrders() {
			var orders = this.$store.getters.allOrders;
			if (this.active == "all") {
				return orders;
			} else if (this.active == "for_pickup") {
				return orders.filter(
					order => order.order_status == "READY FOR PICKUP"
				);
			} else if (this.active == "released") {
				return orders.filter(function(order) {
					if (order.order_status != "RELEASED") {
						return false;
					}
					var created = new Date(order.order_created);
					var now = new Date();
					var milihours = now - created;
					var hour = milihours / 3.6e6;
					return hour > 24;
				});
			}
		}
	}
}
  
</script>
