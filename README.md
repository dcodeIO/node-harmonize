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

If your code uses syntax not supported by the host without --harmony flag, put it in a different file, requireing it:

```js
require("harmonize")();
var other = require("./somethingUsingGenerators.js")
other();
```

License
-------
Apache License, Version 2.0
