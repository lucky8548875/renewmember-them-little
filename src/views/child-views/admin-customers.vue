<template>
	<div class="padding-large profiling" style="padding-top: 7rem">
		<h1>Customer Statistics</h1>

		<!-- Vue App -->
		<div class="profiling-charts-container">
			<div class="age-chart-container">
				<apexchart width="500" type="bar" :series="series.ages" :options="options.ages"></apexchart>
			</div>
			<div class="gender-chart-container">
				<apexchart width="500" type="pie" :series="series.genders" :options="options.genders"></apexchart>
			</div>
			<div class="location-chart-container">
				<apexchart width="500" type="bar" :series="series.locations" :options="options.locations"></apexchart>
			</div>
		</div>
	</div>
</template>

<style lang="sass">
.profiling-charts-container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  margin-left: 1em
  margin-right: 1em
  margin-bottom: 1em

  > div
    background-color: lightgray;
    border-radius: 25px
    margin: 1em
    padding: 1em 
</style>

<script>
import axios from "axios";

export default {
	data() {
    return {
		options: {
			ages: {
				chart: {
					id: "chartAge"
				},
				title: {
					text: "Age Distribution"
				}
			},
			genders: {
				chart: {
					id: "chartGender"
				},
				title: {
					text: "Gender Distribution"
				}
			},
			locations: {
				chart: {
					id: "chartLocation"
				},
				title: {
					text: "Location Distribution"
				}
			}
		},
		series: {
			ages: [
				{
					name: "# of Customers",
					data: []
				}
			],
			genders: [],
			locations: [
				{
					name: "# of Customers",
					data: []
				}
			]
		}
  }
  },
	created: function() {
		this.getAgeCounts();
		this.getGenderCounts();
		this.getLocationCounts();
	},
	mounted: function() {
		this.getCalendarBookingsByDate(this.singledate);
	},
	watch: {
		singledate: function() {
			this.getCalendarBookingsByDate(this.singledate);
		}
	},
	methods: {
		getAgeCounts: function() {
			axios
				.get(`/_system/php/api/customer/getAgeCounts.php`)
				.then(response => {
					if (response.data.success) {
						//Update categories
						//like srsly 3 statements needed just to do a simple thing >:(
						var ops = {
							xaxis: {
								categories: []
							}
						};
						ops.xaxis.categories = response.data.data.age_ranges;
						ApexCharts.exec("chartAge", "updateOptions", ops, false, true);
						//Update data series
						this.series.ages[0].data = response.data.data.counts;
					} else {
						console.error(response.data.message);
					}
				})
				.catch(error => {
					console.error(error);
				});
		},
		getGenderCounts: function() {
			axios
				.get(`/_system/php/api/customer/getGenderCounts.php`)
				.then(response => {
					if (response.data.success) {
						//Update categories
						//like srsly 3 statements needed just to do a simple thing >:(
						var ops = {
							labels: []
						};
						ops.labels = response.data.data.genders;
						ApexCharts.exec("chartGender", "updateOptions", ops, false, true);

						//Update data series
						this.series.genders = response.data.data.counts;
					} else {
						console.error(response.data.message);
					}
				})
				.catch(error => {
					console.error(error);
				});
		},
		getLocationCounts: function() {
			axios
				.get(`/_system/php/api/customer/getLocationCounts.php`)
				.then(response => {
					if (response.data.success) {
						//Update categories
						//like srsly 3 statements needed just to do a simple thing >:(
						var ops = {
							xaxis: {
								categories: []
							}
						};
						ops.xaxis.categories = response.data.data.locations;
						ApexCharts.exec("chartLocation", "updateOptions", ops, false, true);
						//Update data series
						this.series.locations[0].data = response.data.data.counts;
					} else {
						console.error(response.data.message);
					}
				})
				.catch(response => {
					console.error(response);
				});
		}
  }
};
</script>
