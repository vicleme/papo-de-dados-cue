import { getStore } from '@netlify/blobs';
import { applyAction, initialState } from '../../public/js/core/state.js';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

// GET  /api/room?room=CODE[&since=REV]  -> state, or 204 when nothing changed
// POST /api/room?room=CODE              -> body: action (see core/state.js); 409 when stale
export default async (req) => {
  const url = new URL(req.url);
  const room = (url.searchParams.get('room') || '').toLowerCase();
  if (!/^[a-z0-9-]{3,32}$/.test(room)) return json({ error: 'invalid room' }, 400);

  const store = getStore({ name: 'rooms', consistency: 'strong' });
  const current = (await store.get(room, { type: 'json' })) ?? initialState(room);

  if (req.method === 'GET') {
    const since = url.searchParams.get('since');
    return since !== null && Number(since) === current.rev ? new Response(null, { status: 204 }) : json(current);
  }
  if (req.method === 'POST') {
    let action;
    try { action = await req.json(); } catch { return json({ error: 'invalid body' }, 400); }
    const result = applyAction(current, action);
    if (result.ok) await store.setJSON(room, result.state);
    return json(result, result.ok ? 200 : 409);
  }
  return json({ error: 'method not allowed' }, 405);
};

export const config = { path: '/api/room' };
