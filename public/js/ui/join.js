import { h } from './dom.js';
import { textOn } from '../core/color.js';
import { t } from './strings.js';

const ROOM_RE = /^[a-z0-9-]{3,32}$/;

export function renderJoin(root, { script, saved, onJoin }) {
  let me = saved.me ?? '';
  const room = h('input', { id: 'room', maxlength: 32, autocapitalize: 'off', autocomplete: 'off', placeholder: t.roomHint,
    value: saved.room || new URLSearchParams(location.search).get('room') || '' });
  const err = h('p', { class: 'err', role: 'alert' });
  const chips = Object.entries(script.speakers).map(([id, s]) =>
    h('button', { type: 'button', class: 'chip', 'aria-pressed': String(id === me), style: `--c:${s.color};color:${textOn(s.color)}`,
      onclick: (e) => { me = id; chips.forEach((c) => c.setAttribute('aria-pressed', String(c === e.currentTarget))); } }, s.name));
  const go = () => {
    const v = room.value.trim().toLowerCase();
    if (!ROOM_RE.test(v)) { err.textContent = t.roomInvalid; return; }
    onJoin({ room: v, me });
  };
  root.replaceChildren(h('section', { class: 'join' },
    h('h1', {}, t.title), h('p', {}, t.sub),
    h('label', { for: 'room' }, t.roomLabel), room, err,
    h('p', {}, t.who), h('div', { class: 'chips' }, chips),
    h('button', { class: 'ghost', onclick: go }, t.enter)));
}
