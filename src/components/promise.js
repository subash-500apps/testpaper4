const cheerio = require('cheerio');
const rp = require('request-promise');

const url = 'https://en.wikipedia.org/wiki/Main_Page';
// I use Wikipedia just for testing purpose

rp(url).then(html => {
  const $ = cheerio.load(html);
    const linkObjects = $('a');
    // this is a mass object, not an array

    const total = linkObjects.length;
    // The linkObjects has a property named "lenght"

    const links = [];
    // we only need the "href" and "title" of each link

    for(let i = 0; i < total; i++){
        links.push({
            href: linkObjects[i].attribs.href,
            title: linkObjects[i].attribs.title
        });
    }

    console.log(links);
    // do something else here with links
})
.catch(err => {
    console.log(err); 
})
