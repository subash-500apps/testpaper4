<template>
  <div>
    <p>vervelaila</p>

    <table border="1px">
      <tr>
        <td>Country</td>
        <td>Name</td>
        <td>Domains</td>
      </tr>
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{ item.country }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.domains}}</td>
      </tr>
    </table>
    <button @click="redirect()">click</button>
  </div>
</template>

    <script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "employeeList",
  data() {
    return { list: undefined };
  },
  mounted() {

    Vue.axios
      .get("http://universities.hipolabs.com/search?")
       //.get("http://dummy.restapiexample.com/api/v1/employees")

      .then((resp) => {
        this.list = resp.data;
        console.log(resp.data);
      });
  },
  methods:{

    redirect()
    {
      Vue.axios
      .get("http://localhost:8080/#/call")
      .then((resp) => {
        this.list = resp.data;
        document.write(resp.data);
      });

    }
  }
};




</script>
