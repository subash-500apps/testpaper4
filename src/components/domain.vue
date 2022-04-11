<template>
  <div>
    <p>Fetchingdata</p>

    <table border="1px">
      <tr>
        <td>Country</td>
        <td>Name</td>
        <td>Domains</td>
          <td>website</td>
      </tr>
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{ item.country }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.domains}}</td>
           <td>{{ item.web_pages}}</td>
      </tr>
    </table>
  
  </div>
</template>

    <script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "DomaN",
  data() {
    return { list: undefined };
  },
  mounted() {

    Vue.axios
      .get("http://universities.hipolabs.com/search?")
   


      .then((resp) => {
        this.list = resp.data;
        console.log(resp.data);
      });
  },
  
};




</script>