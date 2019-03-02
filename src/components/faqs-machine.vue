<template>
	<div class="faqs-machine-container">
		<center>
			<input
				class="faqs-search"
				type="search"
				placeholder="Enter text to search for question..."
				v-model="query"
			>
			<ul class="faqs-list">
				<li class="faqs-item" v-for="(faq, index) in filteredFaqs" v-bind:key="index">
					<div class="faqs-question" v-on:click="toggleFAQ(index)">{{faq.question}}</div>
					<transition name="slide-vertical" tag="p">
						<div class="faqs-answer" v-show="visibles[index]">{{faq.answer}}</div>
					</transition>
				</li>
			</ul>
		</center>
	</div>
</template>

<style lang="sass" scoped>
.faqs-machine-container

  .faqs-search 
    max-width: 600px
    height: 40px
    margin-bottom: 1em
    width: 100%
    background-color: #eee
    border-radius: 1rem
      
  .faqs-list
    width: 100%
    height: auto
    display: flex
    flex-direction: column
    list-style-type: none
    max-width: 600px
    max-height: 500px
    font-family: 'Courier New'
    overflow-x: hidden
    overflow-y: auto
    border-radius: 10px

    .faqs-item

      .faqs-question 
        background-color: cornflowerblue
        width: 100%
        height: auto
        padding: 10px 40px 10px 8px
        color: #fff

      .faqs-answer 
        background-color: aliceblue
        width: 100%
        height: auto
        padding: 10px 40px 10px 8px
  
      .slide-vertical-enter-active.faqs-answer, .slide-vertical-leave-active.faqs-answer 
        transition: all .3s ease-in-out
        opacity: 100
        height: 60px   
      
      .slide-vertical-enter.faqs-answer, .slide-vertical-leave-to.faqs-answer 
        opacity: 0
        height: 0px
</style>


<script>
export default {
	props: ["content"],
	data: function() {
		return {
			faqs: this.content,
			filteredFaqs: this.content,
			visibles: {},
			query: ""
		};
	},
	beforeMount: function() {
		var obj = {};
		for (var i = 0; i < this.faqs.length; i++) {
			obj[i] = false;
		}
		this.visibles = obj;
	},
	watch: {
		query: function() {
			this.filterFAQs();
		}
	},
	methods: {
		toggleFAQ: function(index) {
			this.visibles[index] = !this.visibles[index];
			console.log(this.visibles[index]);
		},
		filterFAQs: function() {
			this.filteredFaqs = this.faqs.filter(this.checkIfIncludes);
		},
		checkIfIncludes: function(faq) {
			return (
				faq.question.includes(this.query) || faq.answer.includes(this.query)
			);
		}
	}
};
</script>