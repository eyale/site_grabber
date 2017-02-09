// to grab the site enter in  terminal:
// npm run grab {{the_site_url}} {{target_folder}}

const globalTunnel = require('global-tunnel');
const scraper = require('website-scraper');


// process.env.http_proxy = 'http://10.0.0.1:3129';
// globalTunnel.initialize();

 globalTunnel.initialize({
   host: '10.0.0.10',
   port: 8080,
   tunnel: 'both'
 })

scraper({
    urls: process.argv[2],
    directory: process.argv[3] ? process.argv[3] : './site/',
    recursive: true,
    maxDepth: 1
})
.then(console.log('success'))
.catch(error => console.log(error));
