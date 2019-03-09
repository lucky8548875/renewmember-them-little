<template>
	<div class="slidestrip-container">
		<div class="pictext-image-container" ref="imageContainer" v-on:scroll="trackScroll()">
			<div>
				<img
					class="pictext-image-picture"
					v-for="(pictext, index) in pictexts"
					v-bind:src="pictext.image"
					v-bind:ref="'pictextImage' + index"
				>
			</div>
		</div>
		<div class="pictext-text-container">
			<h2 class="pictext-text-title">{{pictexts[currentlyShown].title}}</h2>
			<p class="pictext-text-subtitle">{{pictexts[currentlyShown].subtitle}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ["content"],
	data: function() {
		return {
			pictexts: this.content,
			scrollPosition: 0,
			currentlyShown: 0
		};
	},
	watch: {
		scrollPosition: function() {
			var imageRef = this.$refs["pictextImage" + this.currentlyShown][0];
			var imagePosition = imageRef.offsetLeft;
			if (this.scrollPosition >= imagePosition + 800) {
				this.currentlyShown++;
			} else if (this.scrollPosition <= imagePosition - 800) {
				this.currentlyShown--;
			}
		}
	},
	methods: {
		trackScroll: function() {
			this.scrollPosition = this.$refs.imageContainer.scrollLeft;
		}
	}
};
</script>

<style lang="sass" scoped>
.slidestrip-container
	max-width: 800px
	max-height: 500px
	position: relative

	.pictext-image-container 
		max-width: 800px
		max-height: 500px
		display: flex
		flex-direction: row
		flex-wrap: nowrap
		overflow-x: auto
		overflow-y: hidden

		> div
			display: flex
			flex-direction: row
			flex-wrap: nowrap
	
			.pictext-image-picture
				width: 800px
					height: 500px
		
	
	.pictext-text-container
		position: absolute
		left: 30px
		bottom: 30px

		.pictext-text-title

		.pictext-text-subtitle
</style>
