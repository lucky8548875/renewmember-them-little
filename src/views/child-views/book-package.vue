<template lang="pug">
#package
  //- .cover_image.z-under
  //-   img(:src="$store.getters.categories.find(category => category.category_id == $store.getters.selectedCategoryId).category_image")
  .packages_container.padding-top-large
    .package(v-for="packagex in $store.getters.packages.filter(packagex => packagex.category_id==$store.getters.selectedCategoryId && packagex.package_active)" :style="{'border': (packagex.package_promo ? '2px solid #ffb712': '0')}")
      h3(style="font-weight: bold").package_name.margin-bottom {{packagex.package_name}}
      h4(style="font-weight: bold").package_price.margin-bottom Php {{packagex.package_price}}
      p.package_description.margin-bottom(v-html="packagex.package_description.replace(new RegExp('\\n', 'g'), '<br>')")
      a(class="choose_package" @click="choosePackage(packagex)").text-center Choose Package
      div.promonote(v-if="packagex.package_promo") Promo!
  
</template>

<script>
export default {
	methods: {
		choosePackage(packagex) {
			this.$store.dispatch("setBookingPackage", packagex);

			var addonArray = [];
			for (var x in this.$store.getters.inclusions) {
				if (this.$store.getters.inclusions[x].package_id == packagex.package_id) {
          console.log("Compatible addon: " + this.$store.getters.inclusions[x].addon_id)
          var fetched_addon = this.getAddon(this.$store.getters.inclusions[x].addon_id);
          console.log("Found: " + fetched_addon.addon_description)
					var free_addon = {
						addon_id: fetched_addon.addon_id,
						addon_type: fetched_addon.addon_type,
						addon_description: fetched_addon.addon_description,
						addon_price: 0,
						addon_source: "PACKAGE" // 'AVAILED'
					};

					addonArray.push(free_addon);
				}
			}
			this.$store.commit('setBookingAddons', addonArray)

			this.$router.push("/book/theme");
    },
    
    getAddon(addon_id){
      return this.$store.getters.addons.find(addon => addon.addon_id == addon_id)
    }
	}
};
</script>


<style lang="sass" scoped>
  @import '../../assets/sass/helpers/responsive'
  
  .cover_image
    position: fixed
    top: 0
    width: 100%
    img
        width: 100%

  .packages_container
    position: absolute
    top: 10rem
    width: 80%
    left: 50%
    transform: translateX(-50%)

    @include large
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))
      grid-gap: 0.5rem
      justify-items: center

  .package
    background-color: white
    border-radius: 0.5rem
    margin-bottom: 1rem
    box-shadow: 0 1rem 2rem rgba(0,0,0,0.1)
    padding: 2rem
    box-sizing: border-box
    display: flex
    flex-direction: column
    position: relative
    max-width: 30rem

  .promonote
    background-color: #ffb712
    position: absolute
    left: 50%
    top: -1rem
    padding: 0.5rem 1rem
    font-weight: bold
    border-radius: 2rem
    color: white
    transform: translateX(-50%)

  .package_name
    color: #444
    margin: 0

  .package_price
    color: #aaa
    margin-top: 0.5rem

  .package_description
    padding-left: 0rem
    list-style-type: none

  .package_description li:before
    content: '✓'
    margin-right: 1rem
    color: #aaa

  .choose_package
    width: 100%
    padding: 0.75rem 1rem
    margin-top: 0.5rem
    border-radius: 2rem
    border: none
    background-color: cornflowerblue
    color: white
    font-size: 1rem
    box-shadow: 0 0.5rem 2rem transparentize(cornflowerblue, 0.5)
    margin-top: auto
    transition: background-color 0.2s, transform 0.2s

    &:hover
      background-color: lighten(cornflowerblue,10)
      color: white
    &:active
      background-color: darken(cornflowerblue,10)
      transform: scale(0.9)

</style>
