import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-types";

const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { "content-type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceFilterEpisodes(req);

  res.writeHead(StatusCode.OK, { "content-type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

export { getListEpisodes, getFilterEpisodes };
