console.log(typeof Proxy == 'undefined' ? "No harmony" : "Harmony");
require(__dirname+"/../harmonize.js")(["harmony-generators"]);
console.log("OK");
