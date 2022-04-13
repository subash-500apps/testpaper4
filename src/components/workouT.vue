<template>

<div class="overflow-auto">

<b-form-input v-model="value"

placeholder="enter your country"

required

></b-form-input><br /><br />

<button @click="getData()">submit</button>

<b-pagination

v-model="currentPage"

:total-rows="rows"

:per-page="perPage"

aria-controls="my-table"

></b-pagination>

<p class="mt-3">Current Page: {{ currentPage }}</p>

<b-table

id="my-table"

:items="posts"

:per-page="perPage"

:current-page="currentPage"

medium

:fields="fields"

></b-table>


<!-- <b-container class="bv-example-row">
  <b-row>
    <b-col :items="posts">1 </b-col>
    <b-col :per-page="perPage">2 </b-col>
  
    <b-col :fields="fields"> 3</b-col>
    
  </b-row>
</b-container> -->








</div>

</template>


<script>

export default {

name:'worK',

data() {

return {

perPage: 50,

currentPage: 1,

posts: " ",

fields: [

"web_pages",

"alpha_two_code",

"country",

"name",

"domains",

"state-province",

],

}

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

created()

{

this.getData();

},

computed: {

rows() {

return this.posts.length

}

}

}

</script>