// Sync through the Netlify function (/api/room), short polling every second.
const POLL_MS = 1000;

export function createHttpSync(room, { onState, onStatus }) {
  let rev = -1, timer, stopped = false;
  const url = (q = '') => `/api/room?room=${encodeURIComponent(room)}${q}`;

  async function poll() {
    if (stopped) return;
    let delay = POLL_MS;
    try {
      const res = await fetch(url(rev >= 0 ? `&since=${rev}` : ''), { cache: 'no-store' });
      if (res.status === 404) return onStatus('unavailable');
      if (res.status === 200) { const s = await res.json(); rev = s.rev; onState(s); }
      else if (res.status !== 204) throw new Error(res.status);
      onStatus('online');
    } catch { onStatus('offline'); delay = 3000; }
    timer = setTimeout(poll, document.hidden ? 4000 : delay);
  }

  async function send(action) {
    const res = await fetch(url(), { method: 'POST', body: JSON.stringify(action) });
    const out = await res.json();
    if (out.state) { rev = out.state.rev; onState(out.state); }
    return out;
  }

  return { start: poll, stop() { stopped = true; clearTimeout(timer); }, send };
}
