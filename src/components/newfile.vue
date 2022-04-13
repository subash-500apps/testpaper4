<template>

    <div>

        <b-form-input v-model="value" placeholder="enter your country" required></b-form-input><br /><br />

        <button @click="getData()">submit</button>

 <jw-pagination :pageSize=20 :items="exampleItems" @changePage="onChangePage"></jw-pagination>


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

