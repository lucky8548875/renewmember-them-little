<template lang="pug">
div
  transition(name='fade')
    #backdrop.fixed-fill(@click="toggle" v-show="shown")
  transition(name='slide-right')
    #drawer.fixed.high.left(v-show="shown")
      slot
</template>

<style lang="sass" scoped>
#backdrop
  background-color: rgba(0,0,0,0.2)
#drawer
  background-color: white  
  border-right: 1px solid #eee
</style>

<script>
export default {
	props: ["visible", "alias"],
	data() {
		return {
			shown: this.visible
		};
	},
	methods: {
		toggle() {
			this.shown = !this.shown;
		}
	}
};
</script>
