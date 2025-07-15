import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "content-type": "application/json" });
  const content = await serviceListEpisodes();
  res.end(JSON.stringify(content));
};

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(`${process.env.HOST}${req.url}`);
  const params = url.searchParams.get("p");

  const content = await serviceFilterEpisodes(params ?? "");

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export { getListEpisodes, getFilterEpisodes };
