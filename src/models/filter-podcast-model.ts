import { StatusCode } from "../utils/status-code";
import { PodcastModel } from "./podcast-model";

export interface FilterPodcastModel {
  statusCode: StatusCode;
  body: PodcastModel[];
}
