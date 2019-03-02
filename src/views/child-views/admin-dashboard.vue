<template lang="pug">
  div.flex.high(style="padding-top: 5rem")
    aside.shadow.show-large.padding(style="min-width: 15rem")
      ul.remove-list-style
        li
          router-link.special(to="/admin/dashboard/calendar" :class="{'active': $route.path.includes('calendar')}").padding.inline-block.wide
            fa(icon="calendar-alt" fixed-width).margin-right
            span Calendar
        li
          router-link.special(to="/admin/dashboard/summary" :class="{'active': $route.path.includes('summary')}").padding.inline-block.wide
            fa(icon="chart-pie" fixed-width).margin-right
            span Summary

    main.flex-grow
      router-view
</template>

<script>
export default {
  
}
</script>
