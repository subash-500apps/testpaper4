<template>

<div>



<p>TenthQues</p>

<button @click="errorhandling()">click</button>

</div>

</template>

<script>

export default {

name:"tenthQues",

methods: {

errorhandling(){

try{

this.count=this.count*5;

console.log("printing count",this.count);

}

catch{

console.log("count has no initialisation");

}

}

}

}

</script>