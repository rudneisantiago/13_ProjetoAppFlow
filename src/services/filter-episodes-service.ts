import { IncomingMessage } from "http";
import { PodcastModel } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";

const serviceFilterEpisodes = async (
  req: IncomingMessage
): Promise<PodcastModel[]> => {
  const url = new URL(`${process.env.HOST}${req.url}`);
  const podcastName = url.searchParams.get("p") ?? "";

  const data = await repositoryPodcast(podcastName);

  return data;
};

export { serviceFilterEpisodes };
