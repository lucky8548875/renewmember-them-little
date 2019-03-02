<template lang="pug">
.summary_container
  fieldset
    legend Schedule
    table
      tr
        td Date:  
        td {{new Date($store.getters.booking.booking_date).toDateString().substr(3,12)}}
      tr
        td Time:
        td {{$store.getters.booking.booking_time}}
      tr
        td Duration:
        td {{$store.getters.booking.package.package_minutes}} minutes
  fieldset
    legend Package Details
    table
      tr
        td(style="border-bottom: none; padding-bottom: 0") {{$store.getters.booking.package.package_name}}
        td(style="border-bottom: none; padding-bottom: 0") {{$store.getters.booking.package.package_price}}
      tr
        td(style="border-bottom: none; text-align: left" colspan="2")
          details
            summary Details
            p(style="margin-top: 1rem" v-html="$store.getters.booking.package.package_description")
  fieldset
    legend Addons
    table
      tr(v-for="addon,index in $store.getters.booking.addons")
        td {{addon.addon_type}} {{addon.addon_description}}
        td {{addon.addon_price == 0 ? 'FREE' : 'P ' + addon.addon_price}}

    //- a(v-else @click="$store.getters.$refs.payment.show()" class="continue_button" style="margin-top: 2rem") Confirm Php ({{$store.getters.booking_total_price}})
  .wide.flex.center-child.padding
    //button.continue-button(@click="$store.dispatch('book'); $router.push('/dashboard')") Confirm (Php {{$store.getters.getBookingTotalPrice}})
    button.continue-button(@click="$refs.pay.show()") Confirm (Php {{ $store.getters.getBookingTotalPrice }})
  
  modal(ref="pay" inline-template)
    div
      transition(name='fade')
        #backdrop.fixed-fill(@click="toggle" v-show="visible")
      transition(name='fade')
        #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
          stepper(steps="2" inline-template)
            div
              div.flex.justify-space-between.align-center.wide
                h2.padding Payment
                a.padding(@click="$parent.toggle"): fa(icon='times')
              hr
              div(style="overflow: hidden")
                transition(name="slide-left" mode="out-in")
                  div(v-if="step==1" key="1")
                    a.block.padding(@click="step=2") Pay thru Bank Deposit
                    a.block.padding(@click="$parent.$parent.startPayment()") Pay with Credit Card
                  div(v-if="step==2" key="2")
                    .padding
                      p For blocking of the date and time schedule we need a FULL PAYMENT to be DEPOSITED TO ANY BRANCH or BANK TRANSFER / ONLINE
                      br
                      p BPI Acct No. : 2859-1133-65
                      p ISLAND ACCOUNT
                      p BPI Acct Name: Emelyn D.Mayuga
                      p Val E. Mayuga / Emelyn D. Mayuga
                      p BDO: 001900082320
                      p Branch: SM Dasmarinas
                      br
                      p Deposit is NON-REDUNDABLE in the case of No Show on the pictorial schedule. Re-Schedule will be allowed as long as we are informed a day before or on the day of the schedule.
                      br
                      button.wide.primary(@click="$store.dispatch('book'); $router.push('/dashboard')") Confirm


</template>

<script>
import Modal from "@/components/reusable/modal.vue";

export default {
	components: {
		modal: Modal
	},
	methods: {
		startPayment() {
			function buildSupportedPaymentMethodData() {
				// Example supported payment methods:
				return [
					{
						supportedMethods: "basic-card",
						data: {
							supportedNetworks: ["visa", "mastercard"],
							supportedTypes: ["debit", "credit"]
						}
					}
				];
			}

			var items = [];
			items.push({
				label: this.$store.getters.booking.package.package_name,
				amount: {
					currency: "PHP",
					value: this.$store.getters.booking.package.package_price
				}
			});

			for (var i = 0; i < this.$store.getters.booking.addons.length; i++) {
				items.push({
					label: this.$store.getters.booking.addons[i].addon_description + (this.$store.getters.booking.addons[i].addon_price == 0
								? " (FREE)":""),
					amount: {
						currency: "PHP",
						value: this.$store.getters.booking.addons[i].addon_price
					}
				});
			}

			var shoppingCartDetails = {
				id: "order-123",
				displayItems: items,
				total: {
					label: "Total",
					amount: {
						currency: "PHP",
						value: this.$store.getters.getBookingTotalPrice
					}
				}
			};

			function buildShoppingCartDetails() {
				return shoppingCartDetails;
			}

			var request = new PaymentRequest(
				buildSupportedPaymentMethodData(),
				buildShoppingCartDetails()
      );
      
        var store = this.$store
        var router = this.$router

			request.show().then(function(paymentResponse) {
        // Here we would process the payment. For this demo, simulate immediate success:
				paymentResponse.complete("success").then(function() {
					// For demo purposes:
          alert("Payment Successful");
          console.log('Payment Successful')
					store.state.booking.payment_method = "CREDIT_CARD";
					store.dispatch("book");
					router.push("/dashboard");
				});
			});
		}
	}
};
</script>


<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'

.summary_container
  padding: 2rem

  p
    line-height: 1.25rem

  fieldset + fieldset
    margin-top: 1rem

  fieldset
    border: none
    border-radius: 0.5rem
    padding: 1rem
    background-color: white
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1)

    legend
      padding: 0 1rem
      position: relative
      top: 1.5rem

    table
      width: 100%

      td:last-child
        text-align: right


</style>
