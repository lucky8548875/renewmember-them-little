<template lang="pug">
   div.flex.high(style="padding-top: 5rem")
    aside.shadow.show-large.padding(style="min-width: 15rem")
      ul.remove-list-style
        li
          router-link.special(to="/admin/transactions/bookings" :class="{'active': $route.path.includes('bookings')}").padding.inline-block.wide
            span Bookings
        li
          router-link.special(to="/admin/transactions/orders" :class="{'active': $route.path.includes('orders')}").padding.inline-block.wide
            span Orders

    main.padding.flex-grow
      router-view
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('loadThemes')
  }
}
</script>
