const scraper = require('website-scraper')

scraper.scrape({

    urls: process.argv[2] !== undefined || process.argv[2] !== ''
        ? process.argv[2]
        : 'http://google.com',

    directory: process.argv[3]
})
    .then(() => {console.log(`.then() :  ${process.argv}`)})
    .catch(() => {console.log(`.catch() :  ${process.argv}`)})