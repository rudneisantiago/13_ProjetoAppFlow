import path from "path";
import fs from "fs";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const rawData = fs.readFileSync(pathData, { encoding: "utf-8" });
  const jsonFile = JSON.parse(rawData);

  if (podcastName) {
    const filter = (podcast: PodcastModel) => {
      return podcast.podcastName === podcastName;
    };

    return jsonFile.filter(filter);
  }

  return jsonFile;
};
