export async function loadScript(url = './data/script.json') {
  const data = await (await fetch(url)).json();
  const cues = data.blocks.flatMap((b) => b.cues.map(([speaker, topic]) => ({ speaker, topic, block: b.name })));
  return { title: data.title, speakers: data.speakers, cues, total: cues.length };
}

// What the screen needs for a given index: previous, current and next three.
export function view(script, index) {
  const at = (i) => (script.cues[i] ? { ...script.cues[i], ...script.speakers[script.cues[i].speaker], i } : null);
  return { prev: at(index - 1), now: at(index), next: [1, 2, 3].map((k) => at(index + k)).filter(Boolean) };
}
