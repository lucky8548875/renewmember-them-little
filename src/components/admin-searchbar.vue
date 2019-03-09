<template>
	<!-- <div class="admin-searchbar-container">
		<div class="admin-searchbar-query">
			<input class="admin-searchbar-textfield" type="text" placeholder="Search..." v-model="query">
			<i class="fas fa-search"></i>
		</div>
		<div class="results-dropdown-container card">
			<ul class="admin-searchbar-matchlist">
				<ul class="matchlist-group-container padding" v-show="matches.accounts != null">
					<h3 class="matchlist-group-heading margin-small margin-left" style="font-weight: bold">Accounts</h3>
					<li
						class="matchlist-item-container padding"
						v-for="match in matches.accounts"
						v-on:click="viewAccount(match.account_id)"
						v-bind:key="match.account_id"
					>
						<h4 class="matchlist-item-text">ID: {{match.account_id}}</h4>
						<h5 class="matchlist-item-subtext">{{match.account_name}}</h5>
					</li>
				</ul>
				<ul class="matchlist-group-container" v-show="matches.bookings != null">
					<h3 class="matchlist-group-heading margin-small margin-left" style="font-weight: bold">Bookings</h3>
					<li
						class="matchlist-item-container padding"
						v-for="match,index in matches.bookings"
						v-on:click="viewBooking(match.booking_id)"
						v-bind:key="match.booking_id"
					>
						<h4 class="matchlist-item-text">ID: {{match.booking_id}}</h4>
						<h5 class="matchlist-item-subtext">{{match.account_name}}&nbsp:&nbsp{{match.booking_date}}</h5>
					</li>
				</ul>
			</ul>
			<div
				class="see-results-container"
				v-show="matches.length != 0"
				v-on:click="toggleSeeAll()"
			>{{textForSeeResults}}</div>
		</div>
		<div class="record-modal-container" v-show="showModal">
			<div class="field-value-container" v-for="(value, key) in record">
				<label class="field-label" v-bind:for="key">{{key}}:</label>
				<input class="value-input" v-bind:id="key" type="text" v-bind:value="value" readonly>
			</div>
		</div>
	</div>-->
	<div class="admin-searchbar-container">
		<div class="admin-searchbar-query">
			<input
				class="admin-searchbar-textfield"
				v-bind:type="inputType"
				placeholder="Search..."
				v-model="query"
			>
			<fa icon="search" v-show="inputType == 'text'" v-on:click="adminSearch()"></fa>
			
				<fa style=" position: absolute; right: 6px; cursor: pointer" v-bind:icon="inputIcon" v-on:click="toggleInputType()"></fa>
			
		</div>
		<div class="results-dropdown-container">
			<ul class="admin-searchbar-matchlist">
				<ul class="matchlist-group-container" v-show="matches.accounts != null">
					<h3 class="matchlist-group-heading">Accounts</h3>
					<li
						class="matchlist-item-container"
						v-for="match in matches.accounts"
						v-on:click="viewAccount(match.account_id)"
					>
						<h4 class="matchlist-item-text">ID: {{match.account_id}}</h4>
						<h5 class="matchlist-item-subtext">{{match.account_name}}</h5>
					</li>
				</ul>
				<ul class="matchlist-group-container" v-show="matches.bookings != null">
					<h3 class="matchlist-group-heading">Bookings</h3>
					<li
						class="matchlist-item-container"
						v-for="match in matches.bookings"
						v-on:click="viewBooking(match.booking_id)"
					>
						<h4 class="matchlist-item-text">ID: {{match.booking_id}}</h4>
						<h5 class="matchlist-item-subtext">{{match.account_name}}&nbsp:&nbsp{{match.booking_date}}</h5>
					</li>
				</ul>
				<ul class="matchlist-group-container" v-show="matches.orders != null">
					<h3 class="matchlist-group-heading">Orders</h3>
					<li
						class="matchlist-item-container"
						v-for="match in matches.orders"
						v-on:click="viewOrder(match.order_id)"
					>
						<h4 class="matchlist-item-text">ID: {{match.order_id}}</h4>
						<h5 class="matchlist-item-subtext">{{match.account_name}}&nbsp:&nbsp{{match.order_created}}</h5>
					</li>
				</ul>
			</ul>
			<div
				class="see-results-container"
				v-show="matches.length != 0"
				v-on:click="toggleSeeAll()"
			>{{textForSeeResults}}</div>
		</div>
		<div class="record-modal-container" v-show="showModal">
			<fa icon="times" v-on:click="closeModal()"></fa>
			<div class="record-details-container">
				<div class="field-value-container" v-for="(value, key) in record">
					<label class="field-label" v-bind:for="key">
						{{key.toLowerCase()
						.split('_')
						.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
						.join(' ')
						}}:
					</label>
					<input class="value-input" v-bind:id="key" type="text" v-bind:value="value" readonly>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data: function() {
		return {
			query: "",
			record: "",
			matches: [],
			showModal: false,
			seeAll: false,
			textForSeeResults: "See all results",
			inputType: "text",
			inputIcon: "calendar"
		};
	},
	methods: {
		viewAccount: function(account_id) {
			axios
				.get(`/_system/php/api/account/get.php?account_id=${account_id}`)
				.then(response => {
					if (response.data.success) {
						this.record = response.data.data;
						this.showModal = true;
					} else {
						console.error(response.data.message);
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		viewBooking: function(booking_id) {
			axios
				.get(`/_system/php/api/booking/get.php?booking_id=${booking_id}`)
				.then(
					response => {
						if (response.data.success) {
							this.record = response.data.data;
							this.showModal = true;
						} else {
							console.error(response.data.message);
						}
					},
					response => {
						console.error(response);
					}
				)
				.catch(error => {
					console.log(error);
				});
		},
		viewOrder: function(order_id) {
			axios
				.get(`/_system/php/api/orders/get.php?order_id=${order_id}`)
				.then(
					response => {
						if (response.data.success) {
							this.record = response.data.data;
							this.showModal = true;
						} else {
							console.error(response.data.message);
						}
					},
					response => {
						console.error(response);
					}
				)
				.catch(error => {
					console.log(error);
				});
		},
		toggleSeeAll: function() {
			this.seeAll = !this.seeAll;
			if (this.seeAll) this.textForSeeResults = "See limited results...";
			else {
				this.textForSeeResults = "See all results...";
			}
			this.adminSearch();
		},
		adminSearch: function() {
			var toExecute = "adminSearchWithLimit";
			if (this.seeAll) {
				toExecute = "adminSearch";
			}
			axios
				.get(`/_system/php/functions/${toExecute}.php?query=${this.query}`)
				.then(response => {
					if (response.data.success) {
						this.matches = response.data.data;
					} else {
						console.error(response.data.message);
						console.log(
							`/_system/php/functions/${toExecute}.php?query=${this.query}`
						);
					}
				})
				.catch(error => {
					console.error(error);
				});
		},
		toggleInputType: function() {
			this.query = "";
			if (this.inputType == "text") {
				this.inputType = "date";
				this.inputIcon = "font";
			} else if (this.inputType == "date") {
				this.inputType = "text";
				this.inputIcon = "calendar";
			}
		},
		closeModal: function() {
			this.showModal = false;
		}
	},
	watch: {
		query: function() {
			console.log(this.query)
			this.adminSearch();
		}
	}
};
</script>

<style lang="sass" scoped>


.admin-searchbar-container
    color: gray
    border-radius: 2rem

    .admin-searchbar-query
        position: relative
        display: flex
        align-items: center
        min-width: 250px
        min-height: 40px

        .admin-searchbar-textfield
            position: absolute
            border-radius: 2rem
            background-color: transparent
            border-width: 0px
            margin: 0
            padding: 1rem
            border-width: 0px
            width: 90%

        .admin-searchbar-textfield::-webkit-inner-spin-button
            display: none
            -webkit-appearance: none

        .fa-search
            position: absolute
            right: 32px
            color: lightgray

        .fa-font
            position: absolute
            right: 6px
            color: lightgray
            cursor: pointer

        .fa-calendar
            position: absolute
            right: 6px
            color: lightgray
            cursor: pointer
            
    .results-dropdown-container
        position: absolute
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        min-width: 212px
        max-height: 500px

        .admin-searchbar-matchlist
            background-color: gray
            list-style-type: none
            overflow-x: hidden
            overflow-y: auto
            width: 100%

            .matchlist-group-container
                list-style-type: none
                margin: 2px 0 2px 0
                padding: 2px 0 2px 0

                .matchlist-group-heading
                    margin-left: 3px

                .matchlist-item-container
                    padding: 5px
                    white-space: nowrap
                    text-overflow: ellipsis

                .matchlist-item-container:hover
                    background-color: aquamarine

        .see-results-container
            background-color: blue
            color: white
            text-align: center
            width: 100%

        .see-results-container:hover
            background-color: white
            color: blue

    .record-modal-container
        position: fixed
        top: 50%
        left: 50%
        transform:  translate(-50%, -50%)
        display: flex
        align-items: center
        justify-content: center
        background-color: cadetblue
        padding: 1em

        .fa-times
            position: fixed
            top: 1em
            right: 1em
            font-size: 25px

        .record-details-container
            display: flex
            justify-content: flex-start
            flex-flow: column wrap
            overflow: auto
            min-width: 500px
            min-height: 300px
            max-width: 600px
            max-height: 400px
            margin-top: 2em

            .field-value-container
                display: flex
                align-items: center
                justify-content: center
                flex-direction: row
                max-width: 400px
                max-height: 50px
                margin: 10px

                .field-label
                    width: 50%
                    height: 30px
                    display: flex
                    align-items: center

                .value-input
                    width: 50%
                    height: 30px

</style>


/*
// .admin-searchbar-container {
// 	background-color: #eee;
// 	color: gray;
// 	border-radius: 2rem;
// 	border: 2px solid #eee;
// }
// .admin-searchbar-container:focus-within {
// 	border: 2px solid #ddd !important;
// }
// .admin-searchbar-query {
// 	position: relative;
// 	display: flex;
// 	align-items: center;
// 	min-width: 250px;
// 	min-height: 40px;
// }
// .admin-searchbar-textfield {
// 	position: absolute;
// 	border-radius: 2rem;
// 	background-color: transparent;
// 	border-width: 0px;
// 	margin: 0;
// 	padding: 1rem;
// 	border-width: 0px;
// }
// .admin-searchbar-container .fa-search {
// 	position: absolute;
// 	right: 8px;
// 	color: lightgray;
// }
// .results-dropdown-container {
// 	position: absolute;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	min-width: 212px;
// 	max-height: 500px;
// 	border-radius: 0.5rem;
// 	background-color: white;
// }
// .admin-searchbar-matchlist {
// 	list-style-type: none;
// 	overflow-x: hidden;
// 	overflow-y: auto;
// 	width: 100%;
// 	border-radius: 0.5rem 0.5rem 0 0;
// }
// .matchlist-group-container {
// 	list-style-type: none;
// 	margin: 2px 0 2px 0;
// 	padding: 2px 0 2px 0;
// }
// .matchlist-item-container {
// 	padding: 1rem;
// 	white-space: nowrap;
// 	text-overflow: ellipsis;
// 	border-bottom: 1px solid #eee;
// 	cursor: pointer;
// }
// .matchlist-item-container:first-of-type {
// 	border-top: 1px solid #eee;
// }
// .matchlist-item-container:hover {
// 	background-color: #ccddff;
// }

// .see-results-container {
// 	color: cornflowerblue;
// 	font-weight: bold;
// 	text-align: center;
// 	width: calc(100% - 1rem);
// 	border-radius: 2rem;
// 	padding: 0.5rem;
// 	margin: 0.5rem;
// 	cursor: pointer;
// }

// .see-results-container:hover {
// 	background-color: cornflowerblue;
// 	color: white;
// }
// .record-modal-container {
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	display: flex;
// 	justify-content: center;
// 	flex-flow: column wrap;
// 	overflow: auto;
// 	background-color: cadetblue;
// 	min-width: 500px;
// 	min-height: 300px;
// 	max-width: 800px;
// 	max-height: 500px;
// }
// .field-value-container {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-direction: row;
// 	max-width: 400px;
// 	max-height: 50px;
// 	margin: 10px;
// }
// .field-label {
// 	width: 50%;
// 	height: 30px;
// 	display: flex;
// 	align-items: center;
// }
// .value-input {
// 	width: 50%;
// 	height: 30px;
// } */