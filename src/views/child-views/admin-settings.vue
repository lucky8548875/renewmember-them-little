<template lang="pug">
   div.flex.high
    aside.shadow.show-large.padding.z-under-nav-menu(style="min-width: 15rem; padding-top: 5rem")
      ul.remove-list-style.padding-top
        li: router-link.special(to="/admin/settings/categories" :class="{'active': $route.path.includes('categories')}").padding.inline-block.wide
            span Categories
        li: router-link.special(to="/admin/settings/packages" :class="{'active': $route.path.includes('packages')}").padding.inline-block.wide
            span Packages
        li: router-link.special(to="/admin/settings/addons" :class="{'active': $route.path.includes('addons')}").padding.inline-block.wide
            span Addons
        li: router-link.special(to="/admin/settings/themes" :class="{'active': $route.path.includes('themes')}").padding.inline-block.wide
            span Themes
        li: router-link.special(to="/admin/settings/users" :class="{'active': $route.path.includes('users')}").padding.inline-block.wide
            span Manage Users
        li: router-link.special(to="/admin/settings/site" :class="{'active': $route.path.includes('site')}").padding.inline-block.wide
            span More Settings
        

    main.flex-grow
      transition(name="fade" mode="out-in")
        router-view
</template>

<script>
export default {
    created(){

        this.$store.dispatch('loadCategories')
        this.$store.dispatch('loadPackages')
        this.$store.dispatch('loadThemes')
        this.$store.dispatch('loadAddons')
        this.$store.dispatch('loadInclusions')

        this.$store.dispatch('loadBlockedDates')
        this.$store.dispatch('loadBlockedDays')


    }
}
</script>
