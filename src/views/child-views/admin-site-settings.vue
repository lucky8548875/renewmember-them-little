<template lang="pug">
  div.padding.light(style="padding-top: 6rem")
    div.flex.wide.justify-space-between
      //- :Left
    
    //- Contents
    div.card.padding-medium.margin
      h2 Calendar
      table.wide
        tr
          td Block Days of the Week
          td
            label.margin-left-small
              input(ref="sun" type="checkbox" :checked="$store.getters.blockedDays.includes(0)")
              span Sun
            label.margin-left-small
              input(ref="mon" type="checkbox" :checked="$store.getters.blockedDays.includes(1)")
              span Mon
            label.margin-left-small
              input(ref="tue" type="checkbox" :checked="$store.getters.blockedDays.includes(2)")
              span Tue
            label.margin-left-small
              input(ref="wed" type="checkbox" :checked="$store.getters.blockedDays.includes(3)")
              span Wed
            label.margin-left-small
              input(ref="thu" type="checkbox" :checked="$store.getters.blockedDays.includes(4)")
              span Thu
            label.margin-left-small
              input(ref="fri" type="checkbox" :checked="$store.getters.blockedDays.includes(5)")
              span Fri
            label.margin-left-small
              input(ref="sat" type="checkbox" :checked="$store.getters.blockedDays.includes(6)")
              span Sat
            button.float-right(@click="saveBlockedDays") Save Changes
        tr
          td Block Specific Dates
          td
            input(type="date" v-model="selected_date")
            button(@click="blockDate") Block
            table
              tr(v-for="blockedDate in $store.getters.blockedDates")
                td {{blockedDate.date}}
                td: button(@click="$store.dispatch('removeBlockedDate',blockedDate.blocked_dates_id)") X
          
    

    
</template>

<script>
import Modal from "@/components/reusable/modal.vue";
export default {

	components: {
		modal: Modal
	},
	methods: {
		blockDate() {
			this.$store.dispatch("blockDate", this.selected_date);
		},
		saveBlockedDays() {
			var days_array = [];
			if (this.$refs.sun.checked) days_array.push(0);
			if (this.$refs.mon.checked) days_array.push(1);
			if (this.$refs.tue.checked) days_array.push(2);
			if (this.$refs.wed.checked) days_array.push(3);
			if (this.$refs.thu.checked) days_array.push(4);
			if (this.$refs.fri.checked) days_array.push(5);
			if (this.$refs.sat.checked) days_array.push(6);
			this.$store.dispatch("saveBlockedDays", "[" + days_array + "]");
    },
    data() {
      return {
        selected_date: ""
      }
    }
	},
};
</script>
