<template lang="pug">
  div.padding-large(style="padding-top: 7rem")
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Categories

      //- Right
      div: button(@click='$refs.newcategory.show()') New Category
    
    //- Contents
    table.wide
      tr(v-for="category in $store.getters.categories")
        td
          h3.margin-bottom-small {{category.category_name}}
          span {{category.category_description}}
        td
          button.float-right(@click='$refs.editcategory.show(category)') Edit

    modal(ref="newcategory" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='center-scale')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding New Category
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareAddCategory($event); visible=false;" enctype="multipart/form-data")
                label Category Name
                input(type="text" name="category_name" value="")
                label Category Description
                input(type="text" name="category_description" value="")
                label Image
                fileupload(ref="fileupload" url="")
                label
                  input(type='checkbox' name="category_active" value="")
                  span Active
                div
                  button(@click.prevent="visible=false") Cancel
                  button Add Category

    modal(ref="editcategory" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='center-scale')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Edit Category
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareEditCategory($event); visible=false;" enctype="multipart/form-data")
                input(type="hidden" name="category_id" :value="params.category_id")
                label Category Name
                input(type="text" :value="params.category_name" name="category_name")
                label Category Description
                input( :value="params.category_description" name="category_description")
                label Image
                fileupload(ref="fileupload" :url="params.category_image" :key="params.category_id")
                label.padding-y
                  input.margin-right-small(type='checkbox' name="category_active" :checked="params.category_active")
                  span Active
                div
                  button(@click.prevent="$store.dispatch('deleteCategory',params.category_id); visible=false") Delete
                  button(type="submit") Update Category
    
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {
  components: {
    'modal': Modal
  },
  methods:{
    prepareEditCategory(submitEvent){
      console.log('Prepare Edit Category Called')
      var imageUrl = this.$refs.editcategory.$refs.fileupload.imageUrl
      var url = this.$refs.editcategory.$refs.fileupload.url
      var finalurl = ""
      if(imageUrl == ""){
        finalurl = url
      }
      else{
        finalurl = imageUrl
      }
      var elements = submitEvent.target.elements;

      var category_id = elements.category_id.value; 
      var category_name = elements.category_name.value; 
      var category_description = elements.category_description.value;
      var category_image = finalurl
      var category_active = elements.category_active.checked ? 1 : 0

      var formData = new FormData()
      formData.append('category_id',category_id)
      formData.append('category_name',category_name)
      formData.append('category_description',category_description)
      formData.append('category_image',category_image)
      formData.append('category_active',category_active)
      
      this.$store.dispatch('editCategory', formData)
    },
    prepareAddCategory(submitEvent){
      console.log('Prepare Add Category Called')
      var imageUrl = this.$refs.newcategory.$refs.fileupload.imageUrl
      
      
      var elements = submitEvent.target.elements;

      var category_name = elements.category_name.value; 
      var category_description = elements.category_description.value;
      var category_image = imageUrl
      var category_active = elements.category_active.checked ? 1 : 0

      var formData = new FormData()
      formData.append('category_name',category_name)
      formData.append('category_description',category_description)
      formData.append('category_image',category_image)
      formData.append('category_active',category_active)
      
      this.$store.dispatch('addCategory', formData)
    }
  },
}
  
</script>
