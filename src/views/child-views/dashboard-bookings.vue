<template lang="pug">
div
  .padding-large(style="height: 100%")
    div.flex.justify-space-between.align-center
      h2 My Bookings
      button.primary.padding(@click="$router.push('/book')")
        fa(icon="plus")
        span.margin-left-small New Booking
    div.margin-y

      div.card.padding.flex.justify-space-between.align-center.margin-bottom-small(v-for="booking in $store.getters.myBookings")
        div.flex
          div
            h5 DATE
            br
            span {{booking.booking_date}}
          div.margin-left-large
            h5 STATUS
            br
            transition(name="switch-up" mode="out-in")
              span(:key="booking.booking_status") {{booking.booking_status}}
        div
          button(@click=`logg('trying to show..'); $refs.booking.show(booking);logg('should be shown'); `) View
          button.margin-left-small.primary(@click=`$refs.orderPrints.show(booking)` v-if="booking.booking_status=='COMPLETED'") Order Prints

  
  
      span(v-if="$store.getters.myBookings.length==0") No bookings to show.
  modal(ref="booking" inline-template)
    form(@submit.prevent="")
      transition(name='fade' appear)
        #backdrop.fixed-fill(@click="toggle" v-if="visible")
      transition(name='center-scale' appear)
        #modal(v-if="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
          div.flex.justify-space-between.align-center.wide
            h2.padding Booking Details
            a.padding(@click="toggle"): fa(icon='times')
          hr
          div.padding.overflow-auto
            table.wide
              tr
                td Schedule
                td {{params.booking_date}} | {{params.booking_time}}
              tr
                td Status
                td {{params.booking_status}}
              tr
                td Total Price
                td {{params.booking_total_price}}
              tr
                td Payment Slip
                td
                  fileupload(v-on:saveUrl="$parent.imageUrl = $event" ref="fileupload" v-if="params.booking_status=='AWAITING_PAYMENT'" url="" required=true)
                  img(:src="params.booking_deposit_slip" v-else)
            form()
                fieldset
                  details
                    summary Themes
                    br
                    .grid.grid-auto
                      img(v-for="themeid in $parent.catchParse(params.booking_themes)" :src="$store.getters.themes.find(theme => theme.theme_id == themeid).theme_image" style="width: 100%; border-radius: 0.5rem")
            form(@submit.prevent="$parent.submitPayment(params.booking_id); visible=false" novalidate="false")
              fieldset
                details
                  summary Package Details
                  br
                  table.wide
                    tr
                      td Package Name
                      td {{ $parent.catchParse(params.package).package_name }}
                    tr
                      td Package Description
                      td(v-html="$parent.catchParse(params.package)['package_description']")
                    tr
                      td Duration
                      td {{ $parent.catchParse(params.package)['package_minutes'] }}
                    tr
                      td Addons
                      td
                        ul
                          li(v-for="addon in $parent.catchParse(params.booking_addons)")
                            span {{addon.addon_type}} : {{addon.addon_description}} (P {{addon.addon_price}})
    
                br
                div.flex
                  button.flex-grow(type="submit" v-if="params.booking_status=='AWAITING_PAYMENT' && $parent.imageUrl!=''" ) Submit Payment

  modal(ref="orderPrints" inline-template)
    form(@submit.prevent="")
      transition(name='fade' appear)
        #backdrop.fixed-fill(@click="toggle" v-if="visible")
      transition(name='center-scale' appear)
        #modal(v-if="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
          div.flex.justify-space-between.align-center.wide
            h2.padding Order Prints
            a.padding(@click="toggle"): fa(icon='times')
          hr
          div.padding.overflow-auto
            form(@submit.prevent="$store.dispatch('placeOrder',$event); visible=false")
              input(type="hidden" name="booking_id" :value="params.booking_id")
              input(type="hidden" id="total" name="total" :value="$parent.getTotalPrice(params.booking_addons)")
              table.wide
                tr(v-for="addon,index in $parent.catchParse(params.booking_addons)" v-if="addon.addon_type=='PRINT' && !((addon.addon_source=='PACKAGE' || addon.addon_source=='BOOKING') && params.booking_addons_isordered == 1)")
                  td
                    span.bold {{addon.addon_description}} Print
                    br
                    span ({{addon.addon_source == 'PACKAGE' ? 'Free from Package' : addon.addon_source == 'BOOKING' ? 'Addon' : 'P' + addon.addon_price }})
                  td
                    input(type="text" :addon="JSON.stringify(addon)" placeholder="Filename of Photo" style="padding-left: 1rem" :name="'addon' + index")
                    
              br
              .flex
                select(ref="selectedPrint")
                  option(v-for="printAddon in $store.getters.addons.filter(addon => addon.addon_type=='PRINT')" :value="JSON.stringify(printAddon)") {{ printAddon.addon_description }}
                button(@click.prevent="params.booking_addons = $parent.catchParse(params.booking_addons); params.booking_addons.push($parent.catchParse($refs.selectedPrint.value)); params.booking_addons = JSON.stringify(params.booking_addons)") Add more prints
              span Total: Php {{$parent.getTotalPrice(params.booking_addons)}}
              button(class="wide primary justify-center" type="submit") Place Order

</template>

<script>
import Modal from "@/components/reusable/modal.vue";

export default {
  data(){
    return{
      imageUrl: ""
    }
  },
	components: {
		modal: Modal
	},
	created() {
		this.$store.dispatch("getUserBookings", this.$store.getters.userId);
		this.$store.dispatch("loadThemes");
		this.$store.dispatch("loadAddons");
	},
	methods: {
		catchParse(thing) {
			try {
				return JSON.parse(thing.replace(/\n/g, "<br>"));
			} catch {
				console.error("catchParse: Error - can't parse " + thing);
			}
		},
		logg(text) {
			console.log(text);
		},
		submitPayment(booking_id) {
			console.log("Called Submit Payment");
			console.log("imageurl:" + this.imageUrl);
			var formdata = new FormData();
			formdata.append("booking_id", booking_id);
			formdata.append("deposit_slip", this.imageUrl);
			this.$store.dispatch("submitPayment", formdata);
		},
		getTotalPrice(params) {
			var array = this.catchParse(params)
				.filter(
					addon =>
						addon.addon_source != "BOOKING" && addon.addon_source != "PACKAGE"
				)
				.map(addon => addon.addon_price);
			var x = 0;
			array.forEach(element => {
				x += element;
			});
			return x;
		}
	},
};
</script>
