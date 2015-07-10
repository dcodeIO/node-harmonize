node-harmonize
==============
Enables node's --harmony flag programmatically.

Usage
-----
`npm install harmonize`

```javascript
require("harmonize")();
...
...
...
```

If your code uses syntax not supported by the host without the `--harmony` flag, simply put it in a different file and require(...) it:

```js
require("harmonize")();
var other = require("./somethingUsingGenerators.js")
other();
```

Activating specific features only
---------------------------------
If you intend to activate just a specific set of harmony features, you can provide these to harmonize:

```js
require("harmonize")(["harmony-generators"]);
...
...
...
```

Please note that this might result in an error message being printed to console if the flag is not supported
by your version of node.

License
-------
Apache License, Version 2.0
