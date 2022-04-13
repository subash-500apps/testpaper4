<template>

    <div>

        <b-form-input v-model="value" placeholder="enter your country" required></b-form-input><br /><br />

        <button @click="getData()">submit</button>

 <jw-pagination :pageSize=20 :items="exampleItems" @changePage="onChangePage"></jw-pagination>


  

            <b-container v-for="cdata in posts" :key="cdata.id">

             
                    <b-row>


    <b-col>UNIVERSITY NAME:{{ cdata.name }}</b-col>

    <b-col> DOMAIN:{{ cdata.domains }}</b-col>

 

    <b-col > WEBSITE:{{ cdata.web_pages }}</b-col>
   
  </b-row>
               

            </b-container>

            {{ posts }}

  

    </div>

</template>

<script>

</script>

