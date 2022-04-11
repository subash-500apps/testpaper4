<template>
    <div>
    components Registration in local and global
        <h4>message:{{message}}</h4>
        <h4>name:{{name}}</h4>
        <h4>number:{{number}}</h4>  
        <h4>Items:{{Items}}</h4>
        <i><b><h3>mantra:{{mantra}}</h3></b></i>
    </div>
</template>
<script>
export default {
    name : "pasS",


props :{
    message: String,
    name : String,
    number : 
     {
        default:1138,
        type:Number
    },
    mantra: String,
Items:[
      {age:20,firstname:"bose",lastname:"vegan"},
      {age:24,firstname:"arun",lastname:"bharat"}
    ]
    },
methods:{
    fun(){
        alert("this msg is from child")
    }
}



}
</script>