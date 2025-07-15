import path from "path";
import fs from "fs";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, { encoding: "utf-8" });
  const jsonFile = JSON.parse(rawData);

  return jsonFile;
};
