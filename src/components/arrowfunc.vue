<template>
    <div>
        <p>Arrow and normal function</p>
        <button @click="norfunc">Normal</button>
        <button @click="arrowfunc">Arrow</button>
    </div>
</template>
<script>

export default {
    name:'FunC',
methods:{
    norfunc(value=2)
    {
        if(value%2==0)
        {
            console.log("This is even number");
        }
    }
}
}
var square = (x) => {
  if(x%3==0)
  {
      console.log("this is odd number");
  }
};
console.log(square(9));




</script>
