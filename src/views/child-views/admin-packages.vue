<template lang="pug">
  div.padding-large(style="padding-top: 7rem")
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Packages

      //- Right
      div: button(@click='$refs.newpackage.show()') New Package
    
    //- Contents
    table.wide
      tr(v-for="packagex in $store.getters.packages")
        td
          h3.margin-bottom-small {{packagex.package_name}}
          span {{categoryIdToName(packagex.category_id)}} | {{packagex.package_active ? 'Active' : 'Inactive'}} {{packagex.package_promo ? '(Promo)' : ''}}
        td
          button.float-right(@click='loadPackageInclusions(packagex.package_id); $refs.editpackage.show(packagex)') Edit

    modal(ref="newpackage" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding New Package
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.grid-1-small.grid-2-medium-plus.align-center(@submit.prevent="$parent.prepareAddPackage($event); visible=false;")
                label Package Name
                input(type="text" name="package_name")
                label Category
                select(name="category_id")
                  option(v-for="category in $store.getters.categories" :value="category.category_id") {{category.category_name}}
                label Package Price
                input(type="number" name="package_price")
                label Package Description
                textarea(name="package_description")
                label Duration (minutes)
                input(type="number" name="package_minutes")
                label # of Themes
                input(type="number" name="package_themes")
                label Active
                label.padding
                  input(type="checkbox" name="package_active")
                  span Active
                label Promo
                label.padding
                  input(type="checkbox" name="package_promo")
                  span Promo?
                details.span-2-medium-plus.padding-y
                  summary Inclusions
                  div.flex.wide.align-center
                    select.flex-grow(v-model="$parent.selectedAddon")
                      option(v-for="addon in $store.getters.addons" :value="addon.addon_id") {{addon.addon_description}} ({{addon.addon_type}})
                    button(@click.prevent="$parent.selectedAddons.push($parent.selectedAddon)") Add
                  table.wide
                    tr(v-for="addon_id,index in $parent.selectedAddons")
                      td  {{$parent.addonFinder(addon_id).addon_description}} ({{$parent.addonFinder(addon_id).addon_type}})
                      td.float-right
                        a(@click="$parent.selectedAddons.splice(index,1)") X
                div.flex.wide
                  button(@click.prevent="visible=false") Cancel
                  button Add Package

    modal(ref="editpackage" inline-template)
          div
            transition(name='fade')
              #backdrop.fixed-fill(@click="toggle" v-show="visible")
            transition(name='fade')
              #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
                div.flex.justify-space-between.align-center.wide
                  h2.padding Edit Package
                  a.padding(@click="toggle"): fa(icon='times')
                hr
                div.padding.overflow-auto
                  form.grid-1-small.grid-2-medium-plus.align-center(@submit.prevent="$parent.prepareEditPackage($event); visible=false;")
                    label Package Name
                    input(type="hidden" name="package_id" :value="params.package_id")
                    input(type="text" name="package_name" :value="params.package_name")
                    label Category
                    select(name="category_id")
                      option(v-for="category in $store.getters.categories" :selected="category.category_id == params.category_id" :value="category.category_id") {{category.category_name}}
                    label Package Price
                    input(type="number" name="package_price" :value="params.package_price")
                    label Package Description
                    textarea( name="package_description" :value="$parent.brtonl(params.package_description)")
                    //- replace(/<br \/>/g,'\n')
                    label Duration (minutes)
                    input(type="text" name="package_minutes" :value="params.package_minutes")
                    label # of Themes
                    input(type="text" name="package_themes" :value="params.package_themes")
                    label Active
                    label.padding
                      input(type="checkbox" :checked="params.package_active" name="package_active")
                      span Active
                    label Promo
                    label.padding
                      input(type="checkbox" :checked="params.package_promo" name="package_promo")
                      span Promo?
                    details.span-2-medium-plus
                      summary Inclusions
                      div.flex.wide.align-center
                        select.flex-grow(v-model="$parent.selectedAddon")
                          option(v-for="addon in $store.getters.addons" :value="addon.addon_id") {{addon.addon_description}} ({{addon.addon_type}})
                        button(@click.prevent="$parent.package_inclusions.push($parent.selectedAddon)") Add
                      table.wide
                        tr(v-for="addon_id,index in $parent.package_inclusions")
                          td  {{$parent.addonFinder(addon_id).addon_description}} ({{$parent.addonFinder(addon_id).addon_type}})
                          td.float-right
                            a(@click="$parent.package_inclusions.splice(index,1)") X
                    div.flex.wide
                      button(@click.prevent="$store.dispatch('deletePackage',params.package_id); visible=false") Delete
                      button Edit Package
    
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {
  data (){
    return {
      selectedAddon: '',

      // for Adding
      selectedAddons: [],

      package_inclusions: [],

    }
  },

  components: {
    'modal': Modal
  },
  methods: {
    brtonl(text){
      try{
      return text.replace(/<br \/>/g,"\n")
      }
      catch {
        return text
      }
    },
    descriptionToHtml(description){
      var x = (description+"").replace(new RegExp("\n", "g"), "<br>")
      return x
    },
    loadPackageInclusions(package_id){
      this.package_inclusions = this.$store.getters.inclusions.filter(inclusion => inclusion.package_id == package_id).map(inclusion => inclusion.addon_id)
    },
    categoryIdToName(id){
      try{
        return (this.$store.getters.categories.find(category => category.category_id == id)).category_name
      }
      catch{
        return "null";
      }
    },
    addonFinder(addon_id){
      return this.$store.getters.addons.find(addon => addon.addon_id == addon_id)
    },
    prepareAddPackage(submitEvent){
      console.log('Prepare Add Package Called')
      
      var elements = submitEvent.target.elements;
      var formData = new FormData();

      formData.append('package_name', elements.package_name.value) 
      formData.append('package_description', elements.package_description.value) 
      formData.append('category_id', elements.category_id.value) 
      formData.append('package_price', elements.package_price.value) 
      formData.append('package_minutes', elements.package_minutes.value) 
      formData.append('package_themes', elements.package_themes.value) 
      formData.append('package_active', elements.package_active.checked ? 1 : 0)
      formData.append('package_promo', elements.package_promo.checked ? 1 : 0)
      formData.append('package_inclusions', JSON.stringify(this.selectedAddons))
      console.log(JSON.stringify(this.selectedAddons))
      this.$store.dispatch('addPackage', formData)
      
    },
    prepareEditPackage(submitEvent){
      console.log('Prepare Edit Package Called')
      
      var elements = submitEvent.target.elements;
      var formData = new FormData();
      formData.append('package_id', elements.package_id.value) 
      formData.append('package_name', elements.package_name.value) 
      formData.append('package_description', elements.package_description.value) 
      formData.append('category_id', elements.category_id.value) 
      formData.append('package_price', elements.package_price.value) 
      formData.append('package_minutes', elements.package_minutes.value) 
      formData.append('package_themes', elements.package_themes.value) 
      formData.append('package_active', elements.package_active.checked ? 1 : 0)
      formData.append('package_promo', elements.package_promo.checked ? 1 : 0)
      formData.append('package_inclusions', JSON.stringify(this.package_inclusions))
      console.log(JSON.stringify(this.selectedAddons))
      this.$store.dispatch('editPackage', formData)
      
    },
  }``
}
  
</script>
