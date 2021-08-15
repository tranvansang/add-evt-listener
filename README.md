# add-evt-listener

- Install: `yarn add add-evt-listener`.
- Exported functions:

```typescript
import {addEvtListener, addEvtListenerOnce, addEvtListenerSelf, addEvtListenerSelfOnce} from 'add-evt-listener'
```

# API
- Parameter: `target`, `name` (event name), `handler`, `option`.
- Specs: call `target.addEventListener(name, handler, option)`.
- Return: a callback function that takes zero argument, used to remove the event listener via `target.removeEventListener`.

`target.removeEventListener` is called at most once regardless of how many times the returned callback is called.

## Variant
- `Once`: remove the event listener after the first call.
- `Self`: only trigger the event listener when `evt.currentTarget === evt.target` (`evt` is the first parameter in `handler`).
