<template lang="pug">
  div.padding-large
    div.flex.wide.justify-space-between
      //- :Left
      div: input(type="date" v-model="date" v-if="activecalendar=='day'")

      //- Right
      div
        a.padding-small(@click="activecalendar='day'" :class="{'active':activecalendar=='day'}") Day
        a.padding-small(@click="activecalendar='week'" :class="{'active':activecalendar=='week'}") Week
  
    //- Contents
    
    day-calendar(v-if="activecalendar=='day'")
      .booking.padding(v-for="booking in bookingsToday" :style="{'grid-row-start': booking.start,'grid-row-end': booking.end}" @click="$refs.booking.show(booking)")
        h2 {{booking.booking.account_name}}
        h4 {{parseJson(booking.booking.package).package_name}}
        h4 Status: {{booking.booking.booking_status}}

    div(v-if="activecalendar=='week'")
      div(v-html=`$store.getters.weekBookings.replace(new RegExp('"','g'),'')`)

    modal(ref="booking" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Booking Details
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              h3(style="color: #ccc") booking# {{params.booking.booking_id}} | {{params.booking.booking_status}}
              h3(style="margin: 1rem 0rem")
                fa(icon="user")
                span(style="margin-left: 0.5rem") {{params.booking.account_name}}
              fieldset(style="padding: 0 1rem")
                legend.text-center(style="padding: 0 1rem") Booking Schedule
                table.wide
                  tr
                    td Date:
                    td {{params.booking.booking_date}}
                  tr
                    td Time:
                    td {{params.booking.booking_time}}
              br
              fieldset(style="padding: 0 1rem")
                legend.text-center(style="padding: 0 1rem") Package Details
                table.wide
                  tr
                    td Package Name
                    td {{ $parent.parseJson(params.booking.package).package_name }}
                  tr
                    td Package Description
                    td(v-html="$parent.parseJson(params.booking.package).package_description")
              br
              fieldset(style="padding: 0 1rem")
                legend.text-center(style="padding: 0 1rem") Themes
                .grid.grid-auto
                  img(v-for="themeid in $parent.parseJson(params.booking.booking_themes)" :src="$store.getters.themes.find(theme => theme.theme_id == themeid).theme_image" style="width: 100%; border-radius: 0.5rem")
</template>

<script>
import DayCalendar from '@/components/day-calendar.vue'
import Switcher from '@/components/reusable/switcher.vue'
import axios from 'axios'
import Modal from "@/components/reusable/modal.vue";

export default {
  mounted(){
    this.loadBookingsToday();
    this.$store.dispatch('loadWeekBookings')
    this.$store.dispatch('loadThemes')
  },
  components: {
    'day-calendar': DayCalendar,
    'switcher': Switcher,
    modal: Modal,
  },
  data() {
    return {
      activecalendar: 'day',
      date: new Date().getFullYear() + '-' + (((new Date().getMonth()+1)<10 )? '0':'') +(new Date().getMonth()+1) + '-' +(((new Date().getDate()+1)<10 )? '0':'')+ new Date().getDate(),
      bookingsToday: [],
    }
  },
  watch: {
    date(){
      this.loadBookingsToday();
    }
  },
  methods: {
    loadBookingsToday(){
      console.log('called loadBookingsToday')
      axios.get(`/_system/php/api/booking/getByDate.php?date=${this.date}`)
      .then(response => {
        if(response.data.success == true){
          console.log(response.data.data)
          this.bookingsToday = response.data.data
        }
      })
      .catch(error =>{
        console.log(error)
      })
    },
    parseJson(string){
      try {
        return JSON.parse(string.replace('\\n',''))
      }
      catch {
        console.log("attempt to parse: " + string.replace('/\\r\\n/g',''))
        return {}
      }
    }
  }
}
  
</script>

