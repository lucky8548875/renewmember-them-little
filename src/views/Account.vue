<template lang="pug">
  #account.padding
    .grid
      form.span-12.start-4-medium.span-6-medium.start-5-large.span-4-large.grid-1-small(@submit.prevent="prepareSubmit()")
        fieldset
          legend Update your account information
          label(for="name") Full Name
          br
          input.wide(type="text" name="name" id="name" v-model="name" required)
          br
          label(for="contact") Contact Number
          br
          input.wide(type="number" name="contact" id="contact" v-model="contact" required)
          br
          label(for="email") Email
          br
          input.wide(type="email" name="email" id="email" v-model="email" required)
          br
          label(for="gender") Gender
          br
          br
          label
            input(type="radio" name="gender" id="gender" v-model="gender" value="Male" :checked="gender=='Male'" required)
            span.margin-x-small Male
          label
            input(type="radio" name="gender" id="gender" v-model="gender" value="Female" :checked="gender=='Female'" required)
            span.margin-x-small Female
          label
            input(type="radio" name="gender" id="gender" v-model="gender" value="Other" :checked="gender=='Other'" required)
            span.margin-x-small Other
          br
          br
          label(for="birthday") Birthday
          br
          input.wide(type="date" name="birthday" id="birthday" v-model="birthday" required)
          br
          label(for="location") Location
          br
          input.wide(type="text" name="location" id="location" v-model="location" required)
          br
          button.primary(type="submit") Save Changes
          button.margin-left-small(@click.prevent='$router.go(-1)') Discard
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      name: '',
      contact: '',
      email: '',
      gender: '',
      birthday: '',
      location: ''
    }
  },
  methods: {
    prepareSubmit(){
      var formData = new FormData();
      formData.append('account_id',this.$store.getters.userId)
      formData.append('account_name',this.name)
      formData.append('account_email',this.email)
      formData.append('account_contact',this.contact)
      formData.append('account_gender',this.gender)
      formData.append('account_birthdate',this.birthday)
      formData.append('account_location',this.location)

      axios.post('/_system/php/api/account/update.php', formData)
      .then(response => {
        alert('Saved!')
        this.$router.go(-1)
      })
      .catch(error => {
        alert('An error occured')
      })
      
    }
  },
  mounted(){
    axios.get('/_system/php/api/account/get.php?account_id=' + this.$store.getters.userId)
    .then(response => {
      if(response.data.success){
        this.name = response.data.data.account_name
        this.email = response.data.data.account_email
        this.gender = response.data.data.account_gender
        this.birthday = response.data.data.account_birthdate
        this.contact = response.data.data.account_contact
        this.location = response.data.data.account_location
      }
    })
    .catch(error => {
      console.error(error)
    })
  }
}
</script>
