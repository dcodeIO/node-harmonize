var harmonize = require("./index");
console.log("IN PARENT OR CHILD");
harmonize();
// code above is executed for both the parent and the child
// code below is executed within the child only
console.log("-- enabled flags --");
console.log(harmonize.enabled);
console.log("-- supported flags --");
console.log(harmonize.supported);
