// Same-browser sync (tabs), used when the function is unavailable or with ?sync=local.
import { applyAction, initialState } from '../core/state.js';

export function createLocalSync(room, { onState, onStatus }) {
  const key = `cue:${room}`;
  const chan = new BroadcastChannel(key);
  const read = () => JSON.parse(localStorage.getItem(key) || 'null') ?? initialState(room);
  chan.onmessage = (e) => onState(e.data);
  return {
    start() { onStatus('local'); onState(read()); },
    stop() { chan.close(); },
    async send(action) {
      const out = applyAction(read(), action);
      if (out.ok) { localStorage.setItem(key, JSON.stringify(out.state)); chan.postMessage(out.state); }
      onState(out.state);
      return out;
    },
  };
}
