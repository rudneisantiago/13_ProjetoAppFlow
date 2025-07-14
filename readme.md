# Nome do Aplicativo

Podcast Manager

## Descrição

Um app ao estilo netflix, onde possa centralizar diferentes apisódios de podcasts separados por categorias

## Domínio

Podcasts feitos em vídeo

## Features

- Listar os episódios podcasts em sessões de categorias
  - [saúde, bodybuilder, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

Retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link e categoria

```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "bodybuilder"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["esporte", "corrida"],
  },
];
```
