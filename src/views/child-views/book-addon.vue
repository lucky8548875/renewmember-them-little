<template lang="pug">
#addon
  .addon_container
    table.addon_table
      tr(v-for="addon,index in $store.getters.booking.addons")
        td {{addon.addon_type}}
        td {{addon.addon_description}}
        td {{addon.addon_price == 0 ? 'FREE' : 'P' + addon.addon_price}}
        td
          a(v-if="addon.addon_price != 0 && addon.addon_description!='Upgraded to 12x16'" href="#" @click="$store.commit('spliceBookingAddon',index)")
            fa(icon="times") 
          a(v-if="addon.addon_price == 0 && addon.addon_type == 'PRINT' && addon.addon_description == '8x10'" href="#" @click="$store.commit('upgradePrint',index)")
            span Upgrade
          a(v-if="addon.addon_price == 250 && addon.addon_type == 'PRINT' && addon.addon_description == 'Upgraded to 12x16'" href="#" @click="$store.commit('unupgradePrint',index)")
            fa(icon="times") 
    br
    .addon_buttons_container
      button.margin-small(style="text-align: left;" v-show="checkLimit(addon)" v-for="addon in $store.getters.addons" @click="addAddon(addon)")
        fa(icon="plus")
        span.margin-left-small {{addon.addon_type}} - {{addon.addon_description}} (Php {{addon.addon_price}})
  .wide.flex.center-child.padding
    router-link.continue-button(to="/book/schedule") Continue
</template>

<script>
export default {
	methods: {
		checkLimit(addon) {
			var count = this.$store.getters.booking.addons.filter(
				inclusion => inclusion.addon_id == addon.addon_id
			).length;
			return count < addon.addon_max;
		},
		addAddon(addon) {
			if (this.checkLimit(addon)) {
				var availed_addon = {
					addon_id: addon.addon_id,
					addon_type: addon.addon_type,
					addon_description: addon.addon_description,
					addon_price: addon.addon_price,
					addon_source: "BOOKING" // 'AVAILED'
				};
				this.$store.commit('addBookingAddon',availed_addon);
			}
		}
	}
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'


.addon_container
  padding: 2rem

  @include large
    display: flex
    width: 70%
    margin-left: auto
    margin-right: auto

  .addon_table
    padding: 2rem
    width: 100%
    box-shadow: 0 1rem 5rem rgba(0,0,0,0.1)
    border-radius: 0.5rem

    @include large
      margin-right: 1rem
      width: 50%

  .addon_buttons_container
      display: flex
      flex-direction: column
</style>
