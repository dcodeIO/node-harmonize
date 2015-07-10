console.log(typeof Proxy == 'undefined' ? "No harmony" : "Harmony");
require("../harmonize.js")(["harmony-generators"]);
require("./generators.js");
console.log("OK");
