import { h } from './dom.js';
import { view, around } from '../core/script.js';
import { textOn } from '../core/color.js';
import { t } from './strings.js';

const tag = (c) => (c.slide ? h('em', { class: 'slide' }, `▶ ${t.slide} ${c.slide}`) : null);
const card = (c, cls) => h('div', { class: `card ${cls}`, style: `--c:${c.color}` }, h('b', {}, c.name), h('span', {}, c.topic), tag(c));

// Side panel (visible mode): full text of the previous, current and next turns.
const fala = (c) => h('article', { class: `fala ${c.role}`, style: `--c:${c.color}` },
  h('div', { class: 'fala-head' }, h('b', {}, c.name), tag(c)),
  h('p', { class: c.text ? 'texto' : 'texto vazio' }, c.text || `${c.topic} · ${t.noText}`));

export function renderStage(root, { script, state, me, status, panel, onAdvance, onBack, onMenu, onPanel }) {
  const { prev, now, next } = view(script, state.index);
  const color = now ? now.color : '#111827';
  const mine = now && now.speaker === me;
  // Colors go on <body> (not re-rendered), so the background cross-fades between speakers.
  document.body.style.setProperty('--bg', color);
  document.body.style.setProperty('--fg', textOn(color));
  document.querySelector('meta[name=theme-color]').content = color;
  root.classList.toggle('split', !!panel);
  const main = h('div', { class: 'col' },
    h('header', {},
      h('span', { class: 'block' }, now ? now.block : t.finished),
      h('span', {}, `${Math.min(state.index + 1, script.total)}/${script.total}`, h('i', { class: `dot ${status}`, title: status })),
      h('button', { class: 'ghost', onclick: onPanel, 'aria-pressed': String(!!panel), 'aria-label': t.panelLabel }, t.panelTitle),
      h('button', { class: 'ghost', onclick: onMenu, 'aria-label': t.menu }, '⋯')),
    prev ? card(prev, 'prev') : h('div', { class: 'card prev empty' }, t.start),
    now
      ? h('section', { class: 'now', 'aria-live': 'polite' }, h('small', {}, mine ? t.yourTurn : t.now), h('h1', {}, now.name), h('p', {}, now.topic),
        h('div', { class: now.slide ? 'pill' : 'pill dim' }, now.slide
          ? `${t.pullSlide} ${now.slide} · ${script.slides[now.slide - 1] || ''}${now.note ? ` (${now.note})` : ''}`
          : `${t.onAir} ${now.onAir}`))
      : h('section', { class: 'now' }, h('h1', {}, t.finished)),
    h('div', { class: 'next' }, next.length ? h('small', {}, t.next) : null, ...next.map((c) => card(c, 'nx'))),
    h('footer', {},
      h('button', { class: 'ghost', onclick: onBack, disabled: state.index === 0 }, t.back),
      h('button', { class: 'go', onclick: onAdvance, disabled: !now }, mine ? t.done : t.advance)));
  const side = panel ? h('aside', { class: 'falas', 'aria-label': t.panelTitle }, h('small', {}, t.panelTitle), ...around(script, state.index).map(fala)) : null;
  root.replaceChildren(...[main, side].filter(Boolean));
  const cur = side?.querySelector('.now');
  if (cur) side.scrollTop = cur.offsetTop - 8; // bring the current turn to the top of the panel
}
