import { repositoryPodcast } from "../repositories/podcasts-repository";

async function serviceListEpisodes() {
  const data = await repositoryPodcast();

  return data;
}

export { serviceListEpisodes };
