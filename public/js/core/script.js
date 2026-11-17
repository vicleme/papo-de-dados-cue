// Optional file data/falas.md holds the full text of each turn:
//   ## Block name            (same name as in script.json)
//   ### Speaker | topic      (one per turn, same order as in script.json; text after "|" is only a hint)
//   Full text of the turn...
async function loadLines(url) {
  const blocks = new Map();
  try {
    const res = await fetch(url);
    if (!res.ok) return blocks;
    let list = null, item = null;
    for (const line of (await res.text()).split(/\r?\n/)) {
      if (line.startsWith('## ')) { list = []; blocks.set(line.slice(3).trim(), list); item = null; }
      else if (line.startsWith('### ') && list) { item = { who: line.slice(4).split('|')[0].trim(), body: [] }; list.push(item); }
      else if (item) item.body.push(line);
    }
    blocks.forEach((l) => l.forEach((i) => { i.text = i.body.join('\n').trim(); }));
  } catch { /* no full texts: the panel falls back to the topic */ }
  return blocks;
}

export async function loadScript(url = './data/script.json', linesUrl = './data/falas.md') {
  const [data, lines] = await Promise.all([fetch(url).then((r) => r.json()), loadLines(linesUrl)]);
  // A cue is [speaker, topic, slide?, note?]: `slide` is the slide to bring up when that turn starts.
  let onAir = 0;
  const cues = data.blocks
    .flatMap((b) => b.cues.map(([speaker, topic, slide, note], k) => {
      const entry = lines.get(b.name)?.[k];
      const same = entry && entry.who.toLowerCase() === (data.speakers[speaker]?.name || '').toLowerCase();
      // Never show another person's text: a speaker mismatch means falas.md is out of order.
      if (entry && !same) console.warn(`falas.md: "${b.name}" #${k + 1} is "${entry.who}", script.json says "${speaker}"; text ignored.`);
      return { speaker, topic, block: b.name, slide, note, text: same ? entry.text : '' };
    }))
    .map((c) => ({ ...c, onAir: (onAir = c.slide || onAir) }));
  return { title: data.title, speakers: data.speakers, slides: data.slides || [], cues, total: cues.length };
}

const at = (script, i) => (script.cues[i] ? { ...script.cues[i], ...script.speakers[script.cues[i].speaker], i } : null);

// What the screen needs for a given index: previous, current and next three.
export function view(script, index) {
  return { prev: at(script, index - 1), now: at(script, index), next: [1, 2, 3].map((k) => at(script, index + k)).filter(Boolean) };
}

// Turns shown in the side panel (full texts): `before` previous, the current one and `after` next.
export function around(script, index, before = 1, after = 2) {
  const out = [];
  for (let i = index - before; i <= index + after; i++) {
    const c = at(script, i);
    if (c) out.push({ ...c, role: i < index ? 'prev' : i === index ? 'now' : 'nx' });
  }
  return out;
}
