<template>

<div>
<p>Fifth Ques</p>

<button @click="errorhandling()">click</button>

</div>

</template>

<script>

export default {

name:"fifthQues",

methods: {

errorhandling(){

try{

this.test=this.value*45;

console.log("test",this.value);

}

catch{

console.log("error handled");

}

}

}

}

</script>