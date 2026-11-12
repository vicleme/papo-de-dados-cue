// Pure room-state transitions. Shared by the browser (local mode) and the Netlify function.
export const initialState = (room) => ({ room, index: 0, rev: 0, updatedAt: 0, updatedBy: null });

// action: { type: 'advance'|'back'|'jump'|'reset', from?, to?, total, by? }
// advance/back carry the index the sender was looking at (`from`): if someone else
// already moved, the action is ignored, so double taps never skip a speaker.
export function applyAction(state, a, now = Date.now()) {
  const total = Math.min(Math.max(Number(a.total) || 0, 1), 500);
  let to;
  if (a.type === 'advance' || a.type === 'back') {
    if (a.from !== state.index) return { ok: false, reason: 'stale', state };
    to = state.index + (a.type === 'advance' ? 1 : -1);
  } else if (a.type === 'jump') to = a.to;
  else if (a.type === 'reset') to = 0;
  else return { ok: false, reason: 'invalid', state };
  if (!Number.isInteger(to) || to < 0 || to > total) return { ok: false, reason: 'bounds', state };
  return { ok: true, state: { ...state, index: to, rev: state.rev + 1, updatedAt: now, updatedBy: a.by ?? null } };
}
