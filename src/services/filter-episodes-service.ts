import { PodcastModel } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";

const serviceFilterEpisodes = async (
  podcastName: string
): Promise<PodcastModel[]> => {
  const data = await repositoryPodcast(podcastName);

  return data;
};

export { serviceFilterEpisodes };
