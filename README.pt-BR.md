# Papo de Dados Cue

[Read in English](README.md)

Painel de "quem fala agora" para podcast ou apresentação ao vivo, pensado para celular. Todos os celulares na mesma sala mostram a mesma tela: quem falou antes, quem fala agora, os próximos três e um tópico curto de cada fala. O fundo muda para a cor de quem está falando. Quem termina a própria parte toca em **Avançar** no próprio celular e todos os aparelhos atualizam.

O roteiro incluído é o episódio de 18 minutos "Papo de Dados: Economia da inferência" (70 falas, 6 integrantes).

## Rodar localmente

```bash
npm install
npx netlify dev     # http://localhost:8888, sync completo entre aparelhos na mesma rede
npx serve public    # só estático: usa o modo local (abas do mesmo navegador)
```

## Publicar

1. Suba este repositório no GitHub.
2. No Netlify: **Add new site > Import from Git**. Sem comando de build; a pasta publicada `public` e a pasta de functions `netlify/functions` já estão no `netlify.toml`.
3. Compartilhe a URL. Cada pessoa abre, digita o mesmo código de sala e escolhe o próprio nome.

## Como funciona

- `public/data/script.json` guarda integrantes (nome, cor), blocos e falas (`[integrante, tópico]`).
- `public/js/core/state.js` é a máquina de estados pura, usada pelo navegador e pela function. `advance` e `back` levam o índice que quem clicou estava vendo, então duplo toque ou dois toques ao mesmo tempo nunca pulam uma fala.
- `netlify/functions/room.mjs` guarda um registro pequeno por sala no Netlify Blobs. Os celulares consultam uma vez por segundo (`204` quando nada mudou).
- `public/js/sync/` tem os adaptadores (`http`, `local`) atrás de uma interface pequena, para plugar outro backend.
- `public/js/ui/` desenha a tela de entrada e o palco; todos os textos ficam em `ui/strings.js`.

## Personalizar

Edite `public/data/script.json`: troque nomes, cores (`#rrggbb`), tópicos ou adicione blocos. Evite o mesmo integrante em falas seguidas, senão serão dois toques.

## Slides

Uma fala pode ter um terceiro item, o número do slide a puxar quando essa fala começa: `["lucas", "Tópico", 2]` (um quarto item de texto adiciona uma observação). Os nomes dos slides ficam na lista `slides`, no topo. O palco mostra a marca `▶ Slide N` nessas falas (anterior, atual e próximas) e, na fala atual, qual slide está no ar.

## Limites

O código da sala funciona como senha compartilhada: quem souber controla a sala. As atualizações chegam aos outros celulares em cerca de um segundo. A interface está só em português.
