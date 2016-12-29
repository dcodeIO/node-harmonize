var assert = require("assert");
var harmonize = require("./index");
if (!harmonize.enabled.length)
    console.log("IN PARENT");
else
    console.log("IN CHILD");
harmonize();

// code above is executed for both the parent and the child
// code below is executed within the child only

assert.deepEqual(harmonize.enabled, ["harmony"], "should enable --harmony");
assert.ok(harmonize.supported, "should grep supported flags");

console.log("-- enabled flags --");
console.log(harmonize.enabled);
console.log("-- supported flags --");
console.log(harmonize.supported);
