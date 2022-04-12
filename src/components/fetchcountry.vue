<template>

  <div>

    <b-form @submit.prevent="getData()">

      <b-form-input v-model="value" placeholder="enter your country" required></b-form-input><br><br>

      <b-button type="submit" @click="getData()" variant="primary">submit</b-button>

    </b-form>



    <b-card>
      <b-table striped hover :items="posts" :fields="fields.name"></b-table>

      <b-container class="bv-example-row">
        <b-row>
          <b-col v-for="field in posts" :key="field.name"> {{ field }}</b-col>
          <b-col v-for="field in posts" :key="field.domains"> {{ field }}</b-col>

        </b-row>
      </b-container>
    </b-card>

  </div>

</template>

<script>

//var axios = require("axios").default;

export default {

  name: "quesSA",

  data() {

    return {

      posts: ' ',

      fields: ["web_pages", "alpha_two_code", "country", "name", "domains", "state-province"],

    }

  },

  methods: {

    async getData() {

      try {

        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value);

        this.posts = await response.json();
        console.log(this.posts)

      } catch (error) {

        console.log(error);

      }

    },

  },



  created() {

    this.getData();

  },

}

</script>