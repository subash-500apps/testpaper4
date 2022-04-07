<template>
  <div class="hello">
  
  <que4a :message="message" :name="name" ref="refg" :number="number" :mantra="mantra"></que4a>
  <que4a :message="message" :name="name" ref="madan" :number="number" :Items="Items"></que4a>


    hello world
  <button @click="click()">submit</button>
  


  </div>
</template>


<script>
import que4a from '../components/Refschild'
export default {
  name: 'HelloWorld',
  //local declaration in que-3
  components: {
    
    que4a,  
  },
  data(){
    return{
      message:"vue components",
      name:"madan",
    
      Items:[
      {
          age:20,firstname:"sweet",lastname:"sugan"
      },

      ],
      mantra:"mantra technologies"
    }
  },
  methods:{
    click(){
      this.$refs.refg.fun();
      this.$refs.madan.Items;
      alert("avengers assemble")
    }
  }
}
</script>