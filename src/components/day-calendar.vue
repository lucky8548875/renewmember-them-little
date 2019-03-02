<template lang="pug">
div
  #calendar
    .label 8:00
    .label 8:30
    .label 9:00
    .label 9:30
    .label 10:00
    .label 10:30
    .label 11:00
    .label 11:30
    .label 12:00
    .label 12:30
    .label 1:00
    .label 1:30
    .label 2:00
    .label 2:30
    .label 3:00
    .label 3:30
    .label 4:00
    .label 4:30
    .label 5:00
    .label 5:30
    .label 6:30
    .label 6:30
    .label 7:00
    .label 7:30
    .label 8:00
    slot
    //- .booking.padding(@click="$refs.booking.show()")
    //-   h3 Stephen John Raymundo
    //-   h4 Package 1
    //-   h4 9:00, 60 mins
    

</template>

<style lang="sass" scoped>

#calendar
  display: grid
  grid-template-rows: [t0800] 1fr [t0830] 1fr [t0900] 1fr [t0930] 1fr [t1000] 1fr [t1030] 1fr [t1100] 1fr [t1130] 1fr [t1200] 1fr [t1230] 1fr [t1300] 1fr [t1330] 1fr [t1400] 1fr [t1430] 1fr [t1500] 1fr [t1530] 1fr [t1600] 1fr [t1630] 1fr [t1700] 1fr [t1730] 1fr [t1800] 1fr [t1830] 1fr [t1900] 1fr [t1930] 1fr [t2000]
  grid-template-columns: 1fr 9fr
  overflow: hidden

.label
  grid-column-start: 1
  grid-column-end: 2
  padding: 1rem 1rem 1rem 0
  position: relative


.label:after
  content: ''
  position: absolute
  left: 0
  bottom: 0
  border-bottom: 1px solid #f0f0f0
  width: 100vw

.booking
  grid-column-start: 2
  grid-column-end: 3
  z-index: 1
  border-left: 4px solid cornflowerblue                     
  border-radius: 0.25rem
  padding: 1rem
  cursor: pointer
  background-color: transparentize(cornflowerblue,0.9)

  //- Shame
  background-color: cornflowerblue
  margin: 4px

  h2
    color: white
    margin: 0.25rem
  h4
    display: inline-block
    padding: 0.5rem 1rem
    border-radius: 2rem
    margin: 0.25rem
    color: white
    border: 2px solid white




</style>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {

  components: {
    'modal': Modal,
  },
}
  
</script>