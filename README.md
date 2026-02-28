# the package is deprecated and merged to [jrx](https://www.npmjs.com/package/jrx)

# add-evt-listener

- Install: `npm i add-evt-listener`.
- Usage

```javascript
import addEvtListener from 'add-evt-listener'
// or
const addEvtListener = require('add-evt-listener')

const removeEvtListener = addEvtListener(target, event, handler, option)
// equivalent to
target.addEventListener(event, handler, option)

removeEvtListener()
// equivalent to
target.removeEventListener(event, handler, option)
```
