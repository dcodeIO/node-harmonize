"use strict";
module.exports = harmonize;

var child_process = require("child_process");

/**
 * Enables --harmony flags programmatically.
 * @param {Array.<string>} [flags] Flags to enable, defaults to just `harmony`
 * @returns {undefined}
 * @property {Array.<string>} enabled Enabled flags
 * @property {Array.<string>} supported Supported flags
 */
function harmonize(flags) {

    // assume to be the spawned child if there are any enabled flags
    if (harmonize.enabled.length)
        return;

    // default to just "harmony"
    if (!Array.isArray(flags))
        flags = [ "harmony" ];

    // filter out unsupported flags while adding hyphens
    for (var i = 0; i < flags.length;) {
        if (harmonize.supported.indexOf(flags[i]) < 0)
            flags.splice(i, 1);
        else
            flags[i] = "--" + flags[i++];
    }

    // now just spawn a child with inherited stdio using the specified flags
    child_process.spawn(process.argv[0], flags.concat(process.argv.slice(1)), { stdio: 'inherit' })
    .on("close", function(code) {
        process.exit(code);
    });

    // and interrupt process flow in the parent (do not try this at home!)
    process.once("uncaughtException", function(e) {});
    throw "harmony";
};

// Get enabled flags
harmonize.enabled = (function() {
    var flags = [];
    for (var i = 0, match; i < process.execArgv.length; ++i)
        if (match = /\-\-(harmony[\w\-]*)/.exec(process.execArgv[i]))
            flags.push(match[1]);
    return flags;
})();

// Get supported flags
harmonize.supported = (function() {
    var flags = [];
    var output = child_process.spawnSync(process.argv[0], ["--v8-options"]).output.toString("utf8");
    for (var re = /\-\-(harmony[\w\-]*)/g, match; match = re.exec(output);)
        flags.push(match[1]);
    return flags;
})();
