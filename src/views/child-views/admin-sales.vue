<template>
	<div class="padding-large" style="padding-top:7rem">
		<div class="group block">
			<a
				href="#"
				class="special padding"
				:class="{'active':calendarMode=='Day'}"
				@click="calendarModeDay()"
			>Day</a>
			<a
				href="#"
				class="special padding"
				:class="{'active':calendarMode=='Week'}"
				@click="calendarModeWeek()"
			>Week</a>
			<a
				href="#"
				class="special padding"
				:class="{'active':calendarMode=='Month'}"
				@click="calendarModeMonth()"
			>Month</a>
			<a
				href="#"
				class="special padding"
				:class="{'active':calendarMode=='Year'}"
				@click="calendarModeYear()"
			>Year</a>
		</div>

		<br>
		<br>

		<input
			v-if="calendarMode=='Day'"
			type="date"
			v-model="searchbar"
			@change="searchMode()"
			style="background-color: #eee"
		>

		<div class="table-container">
			<table cellspacing=0 class="wide" v-if="calendarMode=='Day'">
				<thead>
					<tr>
						<th>
							<span>Date</span>
						</th>
						<th>
							<span>Account</span>
						</th>
						<th>
							<span>Total</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="sale in sales">
						<td>
							<span>{{sale.booking_date}}</span>
						</td>
						<td>
							<span>{{sale.account_name}}</span>
						</td>
						<td>
							<span>{{sale.bookings_total}}</span>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing=0 class="wide" v-if="calendarMode=='Week'">
				<thead>
					<tr>
						<th>
							<span>Week Start</span>
						</th>
						<th>
							<span>Week End</span>
						</th>
						<th>
							<span>Total</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="sale in sales">
						<td>
							<span>{{sale.weekstart}}</span>
						</td>
						<td>
							<span>{{sale.weekend}}</span>
						</td>
						<td>
							<span>{{sale.bookings_total}}</span>
						</td>
					</tr>
				</tbody>
			</table>

			<table cellspacing=0 class="wide" v-if="calendarMode=='Month'">
				<thead>
					<tr>
						<th>
							<span>Month Start</span>
						</th>
						<th>
							<span>Month End</span>
						</th>
						<th>
							<span>Total</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="sale in sales">
						<td>
							<span>{{sale.monthstart}}</span>
						</td>
						<td>
							<span>{{sale.monthend}}</span>
						</td>
						<td>
							<span>{{sale.bookings_total}}</span>
						</td>
					</tr>
				</tbody>
			</table>
			<table cellspacing=0 class="wide" v-if="calendarMode=='Year'">
				<thead>
					<tr>
						<th>
							<span>Year</span>
						</th>
						<th>
							<span>Total</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="sale in sales">
						<td>
							<span>{{sale.salesyear}}</span>
						</td>
						<td>
							<span>{{sale.bookings_total}}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- <template v-if="pageCount>1"> -->
		<template>
			<paginate
				class="paginator"
				style="display: flex;
            list-style-type: none;"
				:page-count="pageCount"
				:page-range="2"
				:margin-pages="2"
				:click-handler="goToPage"
				:prev-text="'Prev'"
				:next-text="'Next'"
				:container-class="'className'"
				:page-class="'page-item'"
			></paginate>
		</template>
	</div>
</template>

<style lang="sass" scoped>
.special
	border-radius: 0
.special.active
	background-color: transparent
	border-bottom: 2px solid #1a73e8

.table-container
	background-color: #e8f0fe
	min-height: 20rem
	border-radius: 0.25rem
	overflow: hidden
	
	table
		text-align: left

thead
	background-color: #1a73e8

	th, th > span
		padding: 0.5rem
		color: white

</style>


<script>
import axios from "axios";

export default {
	data() {
		return {
			salesReportsByDate: "",
			calendarMode: "Day",
			sales: [],
			pageNum: 0,
			pageCount: 0,
			searchbar: "",
			totalprice: 0
		};
	},
	mounted() {
		this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		this.getPageCount();
	},
	methods: {
		goToPage(pageNum) {
			console.log(pageNum);
			this.pageNum = pageNum;
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		calendarModeDay() {
			this.calendarMode = "Day";
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		calendarModeWeek() {
			this.calendarMode = "Week";
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		calendarModeMonth() {
			this.calendarMode = "Month";
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		calendarModeYear() {
			this.calendarMode = "Year";
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		searchMode() {
			console.log('called searchMode')
			this.getPageNumber(this.pageNum, this.calendarMode, this.searchbar);
		},
		getSalesReportsByDate(){
      axios.post('/_system/php/api/salesreport/getByDate.php',)
        .then(
          response => {

             if (response.data.success)
              this.salesReportsByDate = response.data.data;
            else
              console.error(response.data);
          }).catch(
          error => {
            console.log(error);
          });
    },
		getAllSales() {
			console.log("tinawag kita");

			var formData = new FormData();
			formData.append("account_id", this.$store.getters.userId);
			//formData.append('pageNum', this.pageNum)
			axios
				.post("/_system/php/api/salesreport/getAll.php", formData)
				.then(response => {
					if (response.data.success) {
						this.sales = response.data.data;
						console.log("tagumpay");
					} else console.error("bigo" + response.data);
				})
				.catch(error => {
					console.log(error);
				});
		},
		getPageCount() {
			var formData = new FormData();
			formData.append("account_id", this.$store.getters.userId);
			axios
				.post("/_system/php/api/salesreport/getPageCount.php", formData)
				.then(response => {
					if (response.data.success) this.pageCount = response.data.data;
					else console.error(response.data);
				})
				.catch(error => {
					console.log(error);
				});
		},
		getPageNumber(pageNum, calendarMode, searchbar) {
			console.log('Called GetPageNumber, value: ' + searchbar)
			var formData = new FormData();
			formData.append("account_id", this.$store.getters.userId);
			formData.append("pageNum", pageNum);
			formData.append("calendar_mode", calendarMode);
			formData.append("searchbar", searchbar);
			axios
				.post("/_system/php/api/salesreport/getByPage.php", formData)
				.then(response => {
					console.log(response)
					if (response.data.success) this.sales = response.data.data;
					else console.error(response.data);
				})
				.catch(error => {
					console.error(error);
				});
		}
	}
};
</script>

