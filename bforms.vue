<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.Age"
          placeholder="Age"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->





<b-form-group id="input-group-3" label="Contact number:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.Contactnumber"
          placeholder="Contact number"
          required
        ></b-form-input>
      </b-form-group>


      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">

    </b-card>
  </div>
</template>

<script>
  export default {
      name:"formS",
    data() {
      return {
        form: {
          email: '',
          name: '',
          Age: '',
          Contactnumber:''
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        document.write((JSON.stringify(this.form)))
       this.show=true
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.Age=''
       this.form.Contactnumber=''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>