<template lang="pug">
  div.padding
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Bookings

      //- Right
      div
        a.padding(@click="active='all'" :class="{'active':active=='all'}") Bookings
        a.padding(@click="active='paid'" :class="{'active':active=='paid'}") Paid
        a.padding(@click="active='overdue'" :class="{'active':active=='overdue'}") Overdue
    
    //- Contents
    table.wide
      tr(v-for="booking in filteredBookings")
        td
          h3 {{booking.account_name}}
          h5 {{booking.booking_status}}
        td
          button.float-right(@click='$refs.booking.show(booking)') View

    modal(ref="booking" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Booking Details
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              table.wide
                tr
                  td Booked on
                  td {{params.booking_created}}
                tr
                  td Schedule
                  td {{params.booking_date}}, {{params.booking_time}}
                tr
                  td Status
                  td {{params.booking_status}}
                tr(v-if="params.payment_method=='BANK_DEPOSIT'")
                  td Deposit Slip
                  td: img(:src="params.booking_deposit_slip")
                tr(v-else="params.payment_method=='CREDIT_CARD'")
                  td Payment Method
                  td Credit Card
              div.flex.wide
                button.flex-growBooking(@click="$store.dispatch('cancelBooking',params.booking_id); visible=false" v-if="params.booking_status!='COMPLETED'") Cancel Booking
                button.flex-grow.margin-left-small.primary(@click="$store.dispatch('approveBooking',params.booking_id); visible=false" v-if=`params.booking_status=='AWAITING_CONFIRMATION' || params.booking_status=='AWAITING_PAYMENT'`) Approve Booking
                button.flex-grow.margin-left-small.primary(v-if="params.booking_status=='BOOKED'" @click="$store.dispatch('markAsCompleted',params.booking_id); visible=false") Mark as Done
              form.margin-top
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
                          td(v-html="$parent.catchParse(params.package).package_description")
                        tr
                          td Duration
                          td {{ $parent.catchParse(params.package).package_minutes }} mins
                        tr
                          td Addons
                          td
                            ul
                              li(v-for="addon in $parent.catchParse(params.package).package_addons")
                                span {{ addon.addon_description }}
                                span {{ addon.addon_type }}
                                span {{ addon.addon_price }}
                        tr
                          td Themes
                          td
                            .grid.grid-auto
                              img(v-for="themeid in $parent.catchParse(params.booking_themes)" :src="$store.getters.themes.find(theme => theme.theme_id == themeid).theme_image" style="width: 100%; border-radius: 0.5rem")
                        tr
                          td Total Price
                          td {{ params.booking_total_price }}
      

                  fieldset
                    details
                      summary Reschedule
                      div.flex.align-center
                      input(type="date" v-model="$parent.reschedule_date")
                      select(v-model="$parent.reschedule_slot")
                        option(v-for="slot in $parent.reschedule_slots") {{ slot }}
                      button(@click.prevent="toggle(); $parent.reschedule()") Reschedule
</template>

<script>
import axios from "axios";
import Modal from "@/components/reusable/modal.vue";
import Switcher from "@/components/reusable/switcher.vue";
export default {
	components: {
		modal: Modal,
		switcher: Switcher
	},
	mounted() {
		this.$store.dispatch("getAllBookings");
	},
	data() {
		return {
			active: "all",
			reschedule_date: "",
			reschedule_slot: "",
			reschedule_slots: []
		};
	},
	watch: {
		reschedule_date() {
			var formData = new FormData();
			formData.append("booking_date", this.reschedule_date);
			console.log(this.$refs.booking.params.package);
			formData.append(
				"package_minutes",
				JSON.parse(this.$refs.booking.params.package).package_minutes
			);
			axios
				.post(`/_system/php/api/booking/getOpenSlots.php`, formData)
				.then(response => {
					if (response.data.success) {
						this.reschedule_slots = response.data.data;
					} else {
						console.error(response);
						return [];
					}
				})
				.catch(error => {
					console.log(error);
					return [];
				});
		}
	},
	methods: {
    catchParse(thing) {
			try {
				return JSON.parse(thing.replace(/\n/g, "<br>"));
			} catch {
				console.error("catchParse: Error - can't parse " + thing);
			}
		},
		reschedule() {
			var formData = new FormData();
			formData.append("booking_id", this.$refs.booking.params.booking_id);
			formData.append("booking_date", this.reschedule_date);
			formData.append("booking_time", this.reschedule_slot);
			axios
				.post(`/_system/php/api/booking/reschedule.php`, formData)
				.then(response => {
					if (response.data.success) {
						this.$store.dispatch("getAllBookings");
					} else {
						console.error(response);
						return [];
					}
				})
				.catch(error => {
					console.log(error);
					return [];
				});
		}
	},
	computed: {
		filteredBookings() {
			var bookings = this.$store.getters.allBookings;
			if (this.active == "all") {
				return bookings;
			} else if (this.active == "paid") {
				return bookings.filter(
					booking => booking.booking_status == "AWAITING_CONFIRMATION"
				);
			} else if (this.active == "overdue") {
				return bookings.filter(function(booking) {
					if (booking.booking_status != "AWAITING_PAYMENT") {
						return false;
					}
					var created = new Date(booking.booking_created);
					var now = new Date();
					var milihours = now - created;
					var hour = milihours / 3.6e6;
					return hour > 24;
				});
			}
		}
	}
};
</script>
