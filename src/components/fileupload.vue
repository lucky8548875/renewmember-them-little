<template lang="pug">
div.flex.column
  img(:src="imageUrl" v-if="imageUrl!='' && uploading==false" style="width: 50%")
  img(:src="url" v-if="imageUrl=='' && url!=''" style="width: 50%")
  span(v-if="uploading==true").flex.align-center
    fa(icon="sync-alt" spin)
    span.margin-left-small Please wait
  input.wide(type="file" ref="fileupload" accept="image/x-png,image/gif,image/jpeg" @change="uploadFile()" :required="required")
</template>

<script>
import axios from 'axios'
export default {
  props:{
    url: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data (){
    return {
      imageUrl : '',
      file: null,
      uploading: false,

    }
  },
  methods: {
    uploadFile(){
      this.uploading = true
      this.file = this.$refs.fileupload.files[0];
      if(this.file!=null){
        var formData = new FormData();
        formData.append('image',this.file)
        axios.post('/_system/php/functions/ftpupload.php',formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        .then( response => {
          console.log(response)
          if(response.data.success){
            this.imageUrl = response.data.data
            this.uploading = false
            this.$emit('saveUrl', response.data.data)
          }
          else{
            console.log('Error in File Upload')
          }
          
        })
        .catch(function(error){
          console.error(error)
        })
      }
        
    }
  }
}
</script>
