import { IncomingMessage, ServerResponse } from "http";

const eps = [
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    category: ["saúde", "bodybuilder"],
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    category: ["esporte", "corrida"],
  },
];

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(eps));
};

const getEpisodeById = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(eps[0]));
};

export { getListEpisodes, getEpisodeById };
