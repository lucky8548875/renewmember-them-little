<template lang="pug">
   div.flex.high
    aside.shadow.show-large.padding.z-under-nav-menu(style="min-width: 15rem; padding-top: 5rem")
      ul.remove-list-style.padding-top
        li: router-link.special(to="/admin/reports/sales" :class="{'active': $route.path.includes('sales')}").padding.inline-block.wide
            span Sales
        li: router-link.special(to="/admin/reports/customers" :class="{'active': $route.path.includes('customers')}").padding.inline-block.wide
            span Customers
        

    main.flex-grow
      transition(name="fade" mode="out-in")
        router-view
</template>

<script>
export default {
}
</script>
