import { loadScript } from './core/script.js';
import { createSync } from './sync/index.js';
import { renderJoin } from './ui/join.js';
import { renderStage } from './ui/stage.js';
import { h } from './ui/dom.js';
import { t } from './ui/strings.js';

const KEY = 'cue:session';
const root = document.getElementById('app');
const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
const script = await loadScript();
let sync, state, status = 'online', me = '', busy = false;

const keepAwake = () => navigator.wakeLock?.request('screen').catch(() => {});
document.addEventListener('visibilitychange', () => { if (!document.hidden && state) keepAwake(); });

const draw = () => renderStage(root, { script, state, me, status, onAdvance: () => act('advance'), onBack: () => act('back'), onMenu: menu });

async function act(type) {
  if (busy) return;
  busy = true; // cooldown against double taps
  try { await sync.send({ type, from: state.index, total: script.total, by: me || null }); }
  catch { status = 'offline'; draw(); }
  finally { setTimeout(() => (busy = false), 500); }
}

function onState(s) {
  const changed = state && state.index !== s.index;
  state = s;
  if (changed && me && script.cues[s.index]?.speaker === me) navigator.vibrate?.([200, 100, 200]); // your turn
  draw();
}

function menu() {
  const d = h('dialog', {},
    h('button', { onclick: () => { navigator.clipboard?.writeText(`${location.origin}${location.pathname}?room=${saved.room}`); d.close(); } }, t.copyLink),
    h('button', { onclick: () => { d.close(); if (confirm(t.confirmReset)) act('reset'); } }, t.reset),
    h('button', { onclick: () => { localStorage.removeItem(KEY); location.href = location.pathname; } }, t.leave),
    h('button', { onclick: () => d.close() }, t.close));
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
}

function enter(session) {
  Object.assign(saved, session);
  localStorage.setItem(KEY, JSON.stringify(session));
  me = session.me;
  root.replaceChildren(h('p', { class: 'center' }, t.connecting));
  sync?.stop();
  sync = createSync(session.room, { onState, onStatus: (s) => { status = s; if (state) draw(); } },
    new URLSearchParams(location.search).get('sync') || 'auto');
  sync.start();
  keepAwake();
}

if (saved.room) enter(saved);
else renderJoin(root, { script, saved, onJoin: enter });
