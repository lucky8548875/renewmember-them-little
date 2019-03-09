<template>
  <div class="calendar_my padding">
    <div class="calendar_my_label">
                <div class="prev padding" @click="previousMonth(); date=''; $store.commit('setBookingDate', '');">
                    <fa icon="angle-left"></fa>
                </div>
                <span class="my_label">{{my_label}}</span>
                <div class="next padding" @click="nextMonth(); date=''; $store.commit('setBookingDate', '');">
                    <fa icon="angle-right"></fa>
                </div>
            </div>
            <table class="schedule_table" cellspacing=0>
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in date_array">
                        <td @click="date = dateCheck(cell.getDate()) || cell.getDate()=='' ? date : cell.getDate(); selected_date" v-for="cell in row" :class="{'active':date == cell.getDate() && date!='','inactive':cell.getDate()=='' || dateCheck(cell.getDate())}">
                            {{cell.getDate()}}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('setBookingDate', "")
    },
    data: function () {
        return {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            date: "0",
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        }
    },
    computed: {
        selected_date(){
            var x = this.year + "-" + (this.month + 1) + "-" + this.date
            this.$store.commit('setBookingDate', x)
            return x
        },
        my_label() {
            return this.months[this.month] + " " + this.year
        },
        date_array() {

            var date = new Date(this.year, this.month, 1);
            var days = [];
            var temprow = [];

            for (var i = 0; i < date.getDay(); i++) {
                temprow.push({getDate(){return ""}})
            }

            while (date.getMonth() === this.month) {
                temprow.push(new Date(date));
                if (date.getDay() == 6) {
                    days.push(temprow);
                    temprow = [];
                }
                date.setDate(date.getDate() + 1);
            }
            days.push(temprow);

            return days;


        }
    },
    methods: {
        dateCheck(date_num){
            // Return TRUE if INACTIVE
            var blockedDatesArray = this.$store.getters.blockedDates.map(blocked_date => blocked_date.date)
            console.log(blockedDatesArray)

            var testdatestring = `${this.year}-${this.month+1<10?0:''}${this.month+1}-${date_num<10?0:''}${date_num}`
            var testdate = new Date(testdatestring)
            console.log(`Compare: ${testdatestring}`)
            if(blockedDatesArray.includes(testdatestring)){
                return true
            }
            var x = testdate.getDay()
            if(this.$store.getters.blockedDays.includes(x)){
                return true
            }
            var y = new Date()

            if(y > testdate){
             return true
            }
            return false
        },
        nextMonth() {
            if (this.month == 11) {
                this.month = 0
                this.year++
            } else {
                this.month++
            }
        },
        previousMonth() {
            if (this.month == 0) {
                this.month = 11
                this.year--
            } else {
                this.month--
            }
        }
    },
}
</script>


<style lang="sass" scoped>
@import '../assets/sass/helpers/responsive'
.calendar_my,.slots_wrapper
    @include large
        flex-basis: 50%
        margin-left: 2rem
    
    .calendar_my_label
        overflow: hidden
        background-color: cornflowerblue
        color: white
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 0.5rem 0.5rem 0 0
        box-shadow: 0 3px 10px rgba(0,0,0,0.1)

        i
            padding: 2rem
            color: #aaa
            color: cornflowerblue
    
    .my_label
        font-size: 1.2rem
        color: white
        font-weight: bold
    
    .prev, .next
        cursor: pointer
        *
            fill: white
        &:hover
            background-color: darken(cornflowerblue,10)

    .schedule_table
        box-shadow: 0 3px 10px rgba(0,0,0,0.1)
        width: 100%
        background-color: white
        padding: 0rem 1rem 1rem
        margin-bottom: 1rem
        border-radius: 0 0 0.5rem 0.5rem
        th
            text-align: center !important
            border-bottom: 1px solid #eee
            height: 2rem
            color: #888
            padding: 0
        td
            text-align: center !important
            padding: 0
            height: 3rem
            color: #444
            border-bottom: none
            cursor: pointer
            border-radius: 2rem
        
        td:not(.inactive):hover,
            background-color: #eee

        td.active
            background-color: cornflowerblue !important
            color: white !important
            font-weight: bold !important
            

        td.inactive
            color: #ccc
            cursor: not-allowed
            pointer-events: none
</style>
