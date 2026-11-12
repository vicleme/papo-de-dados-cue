import { createHttpSync } from './http.js';
import { createLocalSync } from './local.js';

// Adapter contract: { start(), stop(), send(action) } and handlers { onState, onStatus }.
// To add another backend (Firebase, Supabase...), create an adapter with this shape.
export function createSync(room, handlers, mode = 'auto') {
  const local = () => createLocalSync(room, handlers);
  if (mode === 'local') return local();
  let impl = createHttpSync(room, {
    ...handlers,
    onStatus(s) {
      if (s === 'unavailable') { impl = local(); impl.start(); } // no function (plain static server)
      else handlers.onStatus(s);
    },
  });
  return { start: () => impl.start(), stop: () => impl.stop(), send: (a) => impl.send(a) };
}
