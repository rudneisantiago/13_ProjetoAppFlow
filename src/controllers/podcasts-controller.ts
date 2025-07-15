import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  const content = await serviceListEpisodes();
  res.end(JSON.stringify(content));
};

const getEpisodeById = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export { getListEpisodes, getEpisodeById };
