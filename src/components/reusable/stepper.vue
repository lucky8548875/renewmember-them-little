<script>
export default {
	props: ["steps"],

	data: function() {
		return {
			step: 1
		};
	},

	methods: {
		next: function() {
			if (this.step < this.steps) {
				this.step++;
			}
		},

		previous: function() {
			if (this.step > 1) {
				this.step--;
			}
		}
	}
};
</script>

