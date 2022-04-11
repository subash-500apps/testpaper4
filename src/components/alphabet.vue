<template>
  <div id="AppU">
    <p>items: [
{name:'500apps',id:1},{name:'Technologies',id:2},{name:'Agile',id:3},{name:'Mantra',id:4},
{name:'Clockly',id:5},{name:'CRM',id:6},]</p> <br>

    <p v-for="item in items.slice().reverse()" :key="item.name" >
      {{ item.name}}
      
    </p>
    
  </div>
</template>
<script>
export default {
  name: "AppU",
  data() {
    return {
      items: [
{name:'500apps',id:1},{name:'Technologies',id:2},{name:'Agile',id:3},{name:'Mantra',id:4},
{name:'Clockly',id:5},{name:'CRM',id:6},]

    };
  },
};
</script>