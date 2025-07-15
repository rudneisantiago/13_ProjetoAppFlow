import { StatusCode } from "../utils/status-code";
import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
  statusCode: StatusCode;
  body: PodcastModel[];
}
