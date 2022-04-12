<template>

    <div>

        <b-form-input v-model="value" placeholder="enter your country" required></b-form-input><br /><br />

        <button @click="getData()">submit</button>


<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="http://localhost:8084/#/today">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


        <b-card>

            <b-card-text v-for="cdata in posts" :key="cdata.id">

                <b-card>
                    <b-row>

                        <b-col>UNIVERSITY NAME:{{ cdata.name }} </b-col>

                    </b-row>


                    <b-row>
                        <b-col>DOMAIN:{{ cdata.domains }}</b-col>

                        <b-col>WEBSITE:{{ cdata.web_pages }}</b-col>

                    </b-row>
                </b-card>

            </b-card-text>

            {{ posts }}

        </b-card>

    </div>

</template>

<script>

//var axios = require("axios").default;

export default {

    name: "quesSA",

    data() {

        return {

            posts: " ",

            fields: [

                "web_pages",

                "alpha_two_code",

                "country",

                "name",

                "domains",

                "state-province",

            ],

        };

    },

    methods: {

        async getData() {

            try {

                let response = await fetch(

                    "http://universities.hipolabs.com/search?country=" + this.value

                );

                this.posts = await response.json();

            } catch (error) {

                console.log(error);

            }

        },

    },

    created() {

        this.getData();

    },

};

</script>

