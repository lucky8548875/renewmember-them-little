<template lang="pug">
.overview-container
  .logs-container
    h2 Recent Activities
    ul.logs-list
      li.logs-item(v-for="log in logs")
        span.log-text {{log.account_name}} -- {{log.log_description}}
        span.log-date

  .revenues-chart-container
    apexchart(width="500" type="bar" :series="series.revenues" :options="options.revenues")

  .registration-count-container
    h2.registration-count-title Registrations Today ({{registration_count.today}}):
    h3.registration-count-subtitle {{registration_count.count}}

  .online-customers-container
    h2 Online Customers: {{customers.size}}
    ul.online-customers-list
      li.online-customers-item(v-for="customer in customers")
        h3.online-customers-name {{customer.account_name}}
        h4.online-customers-id {{customer.account_id}}

  .bookings-chart-container
    apexchart(width="500" type="line" :series="series.bookings" :options="options.bookings")

  .bookings-approval-container
    h2 Bookings Approval
    ul.bookings-approval-list
      li.bookings-approval-item(v-for="booking in bookings")
        span.bookings-approval-name {{booking.account_name}}
        span.bookings-approval-date {{booking.booking_date}}
        button.bookings-approve-button(v-on:click="approveBooking()") Approve
        button.bookings-reject-button(v-on:click="rejectBooking()") Reject
</template>

<script>
import axios from 'axios'

export default {
	created() {
		this.getLogs();
		this.getRegistrationCount();
		this.getRevenues();
		this.getOnlineCustomers();
		this.getBookingCounts();
		this.getUnapprovedBookings();
	},
	methods: {
		getLogs: function() {
      console.log('called getLogs')
      axios.get(`/_system/php/api/customer/getLogs.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          this.logs = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
		},
		getRevenues: function() {
      console.log('called getRevenues')
      axios.get(`/_system/php/api/customer/getRevenuesMonthly.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          var ops = {
							xaxis: {
								categories: []
							}
						};
						ops.xaxis.categories = response.data.data.months;
						ApexCharts.exec("chartRevenues", "updateOptions", ops, false, true);
						//Update data series
						this.series.revenues[0].data = response.data.data.totals;
        })
        .catch(error => {
          console.log(error)
        })
		},
		getRegistrationCount: function() {
      console.log('called getRegistrationCount')
      axios.get(`/_system/php/api/customer/getRegistrationCountToday.php`)
        .then(response => {
          this.registration_count = response.data.data;
        })
        .catch(error => {
          console.log(error)
        })
		},
		getOnlineCustomers: function() {
      console.log('called getOnlineCustomers')
      axios.get(`/_system/php/api/customer/getAllOnline.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          this.customers = response.data.data;
        })
        .catch(error => {
          console.log(error)
        })
		},
		getBookingCounts: function() {
       console.log('called getBookingCounts')
      axios.get(`/_system/php/api/customer/getBookingCounts.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          var ops = {
							xaxis: {
								categories: []
							}
						};
						ops.xaxis.categories = response.data.data.months;
            ApexCharts.exec("chartBookings", "updateOptions", ops, false, true);
            this.series.bookings[0].data = response.data.data.counts;
        })
        .catch(error => {
          console.log(error)
        })
		
		},
		getUnapprovedBookings: function() {
      console.log('called getUnapprovedBookings')
      axios.get(`/_system/php/api/customer/getUnapprovedBookings.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          this.bookings = response.data.data;
        })
        .catch(error => {
          console.log(error)
        })
		},
		approveBooking: function() {
			console.log("Approved!");
		},
		rejectBooking: function() {
			console.log("Rejected");
		}
	},
	data() {
		return {
			logs: "",
			registration_count: "",
			customers: "",
			bookings: "",
			options: {
				revenues: {
					chart: {
						id: "chartRevenues"
					},
					title: {
						text: "Monthly Revenues"
					}
				},
				bookings: {
					chart: {
						id: "chartBookings"
					},
					title: {
						text: "Monthly Bookings"
					}
				}
			},
			series: {
				revenues: [
					{
						name: "Total Revenue",
						data: []
					}
				],
				bookings: [
					{
						name: "Number of Bookings",
						data: []
					}
				]
			}
		};
	}
};
</script>

<style lang="sass" scoped>
.overview-container
  background-color: #eee
  display: grid
  grid-template-columns: auto auto auto
  grid-gap: 1rem
  justify-content: center
  align-content: center
  width: 100%
  padding: 1rem

  div
    display: flex
    align-items: center
    justify-content: center
    border-radius: 0.5rem
    
    background-color: white

  .logs-container
    grid-row-start: 1
    grid-row-end: 3
    overflow-y: auto
    overflow-x: hidden
    // max-width: 500px
    // max-height: 700px
    padding: 1rem

    .logs-list
      list-style-type: none

  .revenues-chart-container
    // max-width: 500px
    // max-height: 350px

  .registration-count-container
    flex-direction: column
    padding: 1rem
    // max-width: 500px
    // max-height: 350px
    padding: 1rem

    .registration-count-title
      margin-bottom: 1rem

  .online-customers-container
    flex-direction: column
    padding: 1rem
    overflow-y: auto
    overflow-x: hidden
    // max-width: 500px
    // max-height: 350px
    padding: 1rem

    .online-customers-list
      list-style-type: none

  .bookings-chart-container
    max-width: 500px
    max-height: 350px   

  .bookings-approval-container
    grid-column-start: 1
    grid-column-end: 4
    overflow-y: auto
    overflow-x: hidden
    // max-width: 1500px
    // max-height: 200px
    flex-direction: column
    padding: 1rem

    .bookings-approval-list
      list-style-type: none
      display: flex
      flex-direction: column

      .bookings-approval-item
        display: flex
        flex-direction: row
        margin: 1rem
        padding: 1rem

        span
          margin-left: 1rem
          margin-right: 1rem

</style>
