<template lang="pug">
  div.padding-large(style="padding-top: 7rem")
    div.flex.wide.justify-space-between
      //- :Left
      div: h2 Themes
      //- Right
      div: button(@click='$refs.newtheme.show()') Add Theme
    
    //- Contents
    .grid.grid-2-small.grid-4-medium.grid-5-large
      div.wide.center-child(style="height: 10rem" v-for="theme in $store.getters.themes")
        div(@click='$refs.edittheme.show(theme)')
          img(:src="theme.theme_image" style="width: 100%")


    modal(ref="newtheme" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding New Theme
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareAddTheme($event); visible=false;" enctype="multipart/form-data")
                label Theme Description
                input(type="text" name="theme_description" value="")
                label Image
                fileupload(ref="fileupload" url="")
                label
                  input(type='checkbox' name="theme_active" value="")
                  span Active
                div
                  button(@click.prevent="visible=false") Cancel
                  button Create Theme

    modal(ref="edittheme" inline-template)
      div
        transition(name='fade')
          #backdrop.fixed-fill(@click="toggle" v-show="visible")
        transition(name='fade')
          #modal(v-show="visible").card.fixed-center.flex.column.five-large.seven-medium.twelve-small.max-high
            div.flex.justify-space-between.align-center.wide
              h2.padding Edit Theme
              a.padding(@click="toggle"): fa(icon='times')
            hr
            div.padding.overflow-auto
              form.flex.column(@submit.prevent="$parent.prepareEditTheme($event); visible=false;" enctype="multipart/form-data")
                input(type="hidden" name="theme_id" :value="params.theme_id")
                label Theme Description
                input(type="text" name="theme_description" :value="params.theme_description")
                label Image
                fileupload(ref="fileupload" :url="params.theme_image" :key="params.theme_id")
                label.padding-y
                  input.margin-right-small(type='checkbox' name="theme_active" :checked="params.theme_active")
                  span Active
                div
                  button(@click.prevent="$store.dispatch('deleteTheme',params.theme_id); visible=false") Delete
                  button Update theme

    
    
</template>

<script>
import Modal from '@/components/reusable/modal.vue'
export default {

  components: {
    'modal': Modal
  },
  methods :{
    prepareAddTheme(submitEvent){
      console.log('prepareAddTheme Called')
      var imageUrl = this.$refs.newtheme.$refs.fileupload.imageUrl
      
      var elements = submitEvent.target.elements;

      var formData = new FormData()
      formData.append('theme_description',elements.theme_description.value)
      formData.append('theme_image',imageUrl)
      formData.append('theme_active',elements.theme_active.checked ? 1 : 0)
      
      this.$store.dispatch('addTheme', formData)
    },
    prepareEditTheme(submitEvent){
      console.log('prepareEditTheme Called')
      var imageUrl = this.$refs.edittheme.$refs.fileupload.imageUrl
      
      var elements = submitEvent.target.elements;

      var formData = new FormData()
      formData.append('theme_id',elements.theme_id.value)
      formData.append('theme_description',elements.theme_description.value)
      formData.append('theme_image', imageUrl)
      console.log('formdata append theme_image: ' + imageUrl)
      formData.append('theme_active',elements.theme_active.checked ? 1 : 0)
      console.log('Image URL:' + imageUrl)
      this.$store.dispatch('editTheme', formData)
  }
}
}
</script>
