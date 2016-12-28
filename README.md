harmonize
=========
Enables harmony features programmatically.

Usage
-----

Enabling just the `--harmony` flag:

```js
require("harmonize")();
```

Enabling specific features:

```js
require("harmonize")([
    "harmony",
    "harmony_sharedarraybuffer"
]);
```

Note that unsupported flags are simply ignored.

How it works
------------

```js
var harmonize = require("harmonize");
// ^ Transparently spawns another node process with --v8-options and
//   parses enabled and supported harmony flags. You can also inspect
//   these: console.log(harmonize.enabled, harmonize.supported);

harmonize([ "harmony", ... ]);
// ^ Interrupts process flow within the parent and starts a new process
//   with the harmony flags you provided.

// Everything below is executed within the harmonized child only.
```

Quirks
------
While no code below the call to `harmonize()` is executed within the
parent, it must still be parseable without any additional flags.

For example, if you are enabling generators which aren't supported by
your node version without the respective flag, using generators syntax
within the main file will result in a parse error. In such cases, just
move code that requires a flag into a separate file and `require` it
instead, which will prevent the parse error.

**License:** [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)
