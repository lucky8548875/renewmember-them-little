<template lang="pug">
#schedule
	.calendar_container
		calendar(ref="calendar")
		div.slots_wrapper
			h4.h4.margin Slots Available
			div.slots_container.margin(v-if="slots.length > 0 && $store.state.booking.booking_date!='' ")
				span(
					@click="$store.commit('setBookingTime',slot)"
					class="slot"
					:class="{'active':$store.getters.booking.booking_time==slot}"
					v-for="slot in slots") {{slot}}
	.wide.flex.center-child.padding
		router-link.continue-button(to='/book/summary') Continue
	
</template>

<script>
import axios from "axios";
import Calendar from "@/components/calendar.vue";
export default {
	components: {
		calendar: Calendar
	},
	data() {
		return {
			slots: ""
		};
	},
	computed: {
		computedSlots() {
				console.log('call computed slots')
				var date = this.$store.getters.booking.booking_date;
				var duration = this.$store.getters.booking.package.package_minutes;
				console.log('date: ' + date + ' duration: ' + duration)
				var formData = new FormData();
				formData.append("booking_date", date);
				formData.append("package_minutes", duration);
				axios
					.post('/_system/php/api/booking/getOpenSlots.php', formData)
					.then(response => {
						if (response.data.success) {
							console.log(response)
							this.slots = response.data.data
							return response.data.data;
							
						} else {
							console.error(response);
						}
					})
					.catch(error => {
						console.log(error);
					});
					console.log('test')
		}
	},
	watch: {
		computedSlots(){
			console.log('watch')
			this.slots = this.computedSlots
		}
	}
};
</script>
<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'

.calendar_container
	@include medium-plus
		display: flex
		justify-content: center
		padding-left: 5vw
		padding-right: 5vw
		> *
			flex-grow: 1
	@include large
		padding-left: 15vw
		padding-right: 15vw

.slots_container
	display: grid
	grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr))
	gap: 0.5rem

	.slot
		padding: 0.8rem 1.2rem
		background-color: #eee
		display: inline-block
		border-radius: 2rem
		font-weight: bold
		text-align: center
		cursor: pointer

	.slot.active
		background-color: cornflowerblue
		color: white

	.slot.inactive
		opacity: 0.5
		cursor: not-allowed
</style>
