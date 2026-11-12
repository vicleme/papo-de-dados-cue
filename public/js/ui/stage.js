import { h } from './dom.js';
import { view } from '../core/script.js';
import { textOn } from '../core/color.js';
import { t } from './strings.js';

const card = (c, cls) => h('div', { class: `card ${cls}`, style: `--c:${c.color}` }, h('b', {}, c.name), h('span', {}, c.topic));

export function renderStage(root, { script, state, me, status, onAdvance, onBack, onMenu }) {
  const { prev, now, next } = view(script, state.index);
  const color = now ? now.color : '#111827';
  const mine = now && now.speaker === me;
  // Colors go on <body> (not re-rendered), so the background cross-fades between speakers.
  document.body.style.setProperty('--bg', color);
  document.body.style.setProperty('--fg', textOn(color));
  document.querySelector('meta[name=theme-color]').content = color;
  root.replaceChildren(
    h('header', {},
      h('span', { class: 'block' }, now ? now.block : t.finished),
      h('span', {}, `${Math.min(state.index + 1, script.total)}/${script.total}`, h('i', { class: `dot ${status}`, title: status })),
      h('button', { class: 'ghost', onclick: onMenu, 'aria-label': t.menu }, '⋯')),
    prev ? card(prev, 'prev') : h('div', { class: 'card prev empty' }, t.start),
    now
      ? h('section', { class: 'now', 'aria-live': 'polite' }, h('small', {}, mine ? t.yourTurn : t.now), h('h1', {}, now.name), h('p', {}, now.topic))
      : h('section', { class: 'now' }, h('h1', {}, t.finished)),
    h('div', { class: 'next' }, next.length ? h('small', {}, t.next) : null, ...next.map((c) => card(c, 'nx'))),
    h('footer', {},
      h('button', { class: 'ghost', onclick: onBack, disabled: state.index === 0 }, t.back),
      h('button', { class: 'go', onclick: onAdvance, disabled: !now }, mine ? t.done : t.advance)));
}
