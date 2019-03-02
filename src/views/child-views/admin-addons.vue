<template lang="pug">
  div.padding-large(style="padding-top: 7rem")
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Addons
      //- Right
      div: button(@click='$refs.newaddon.show()') New Addon
    
    //- Contents
    table.wide
      tr(v-for="addon in $store.getters.addons")
        td
          h3 {{addon.addon_description}}
          span {{addon.addon_type}}
        td
          button.float-right(@click='$refs.editaddon.show(addon)') Edit

    modal(ref="newaddon" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding New Addon
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareAddAddon($event); visible=false;")
                label Addon Type
                select(name="addon_type")
                  option(value='PRINT') PRINT
                  option(value='EXTRAS') EXTRAS
                  option(value='PRODUCT') PRODUCT
                label Description
                input(type="text" name="addon_description")
                label Price
                input(type="number" name="addon_price")
                label Max. Quantity
                input(type="number" name="addon_max")
                label
                  input(type='checkbox' name="addon_active")
                  span Active
                div
                  button(@click.prevent="visible=false") Cancel
                  button Create Addon

    modal(ref="editaddon" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Edit Addon
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareEditAddon($event); visible=false;")
                input(type="hidden" name="addon_id" :value="params.addon_id")
                label Addon Type
                select(name="addon_type")
                  option(value='PRINT' :selected="params.addon_type=='PRINT'") PRINT
                  option(value='EXTRAS' :selected="params.addon_type=='EXTRAS'") EXTRAS
                  option(value='PRODUCT' :selected="params.addon_type=='PRODUCT'") PRODUCT
                label Description
                input(type="text" name="addon_description" :value="params.addon_description")
                label Price
                input(type="number" name="addon_price" :value="params.addon_price")
                label Max. Quantity
                input(type="number" name="addon_max" :value="params.addon_max")
                label
                  input(type='checkbox' name="addon_active" :checked="params.addon_active")
                  span Active
                div
                  button(@click.prevent="$store.dispatch('deleteAddon',params.addon_id); visible=false") Delete
                  button Update Addon
    
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {

  components: {
    'modal': Modal
  },
  methods: {
    prepareAddAddon(submitEvent){
      console.log('Prepare AddAddon Called')

      var elements = submitEvent.target.elements;
      var formData = new FormData();

      formData.append('addon_type', elements.addon_type.value) 
      formData.append('addon_description', elements.addon_description.value) 
      formData.append('addon_max', elements.addon_max.value) 
      formData.append('addon_price', elements.addon_price.value) 
      formData.append('addon_active', elements.addon_active.checked ? 1 : 0)
      
      this.$store.dispatch('addAddon', formData)
    },
    prepareEditAddon(submitEvent){
      console.log('Prepare EditAddon Called')

      var elements = submitEvent.target.elements;
      var formData = new FormData();

      formData.append('addon_id', elements.addon_id.value) 
      formData.append('addon_type', elements.addon_type.value) 
      formData.append('addon_description', elements.addon_description.value) 
      formData.append('addon_max', elements.addon_max.value) 
      formData.append('addon_price', elements.addon_price.value) 
      formData.append('addon_active', elements.addon_active.checked ? 1 : 0)
      
      this.$store.dispatch('editAddon', formData)
    }
  }
}
  
</script>
