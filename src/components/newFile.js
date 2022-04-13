//var axios = require("axios").default;
export default {
name: "quesSA",

data() {

return {
posts: " ",

fields: [
"web_pages",

"alpha_two_code",

"country",

"name",

"domains",

"state-province",
],
};

},

methods: {
async getData() {

try {

let response = await fetch(

"http://universities.hipolabs.com/search?country=" + this.value

);

this.posts = await response.json();

} catch (error) {

console.log(error);

}

},
},

created() {

this.getData();

},
};
