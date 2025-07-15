import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEpisodes();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceFilterEpisodes(req);

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export { getListEpisodes, getFilterEpisodes };
