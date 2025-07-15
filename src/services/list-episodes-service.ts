import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

async function serviceListEpisodes() {
  const responseFormat: FilterPodcastModel = {
    statusCode: StatusCode.NO_CONTENT,
    body: [],
  };

  const data = await repositoryPodcast();

  if (data.length) {
    responseFormat.statusCode = StatusCode.OK;
    responseFormat.body = data;
  }

  return responseFormat;
}

export { serviceListEpisodes };
