<template>
   <div class ="test">
       <h1>This is Qn10</h1>
       <input type="text" placeholder="firstname" vue-model="firstname">
       <input type="text" placeholder="lastname" vue-model ="lastname">
       <p>{{fullName('welcome')}}</p>
     
   </div>
       </template>
       <script>



export default{

   
    name:'tableData',
    
    
             computed:{
     fullName(){
      return message1 => {
        return `${message1} ${this.firstName}  ${this.lastName}`
      }
    }
  },

  
  data(){
    return{
      firstName: "",
      lastName: ""
    }
  },
  
}

  </script>