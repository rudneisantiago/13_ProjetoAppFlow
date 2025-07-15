import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

const serviceFilterEpisodes = async (
  req: IncomingMessage
): Promise<FilterPodcastModel> => {
  const responseFormat: FilterPodcastModel = {
    statusCode: StatusCode.NO_CONTENT,
    body: [],
  };

  const url = new URL(`${process.env.HOST}${req.url}`);
  const podcastName = url.searchParams.get("p") ?? "";

  if (!podcastName) {
    return responseFormat;
  }

  const data = await repositoryPodcast(podcastName);

  if (data.length) {
    responseFormat.statusCode = StatusCode.OK;
    responseFormat.body = data;
  }

  return responseFormat;
};

export { serviceFilterEpisodes };
