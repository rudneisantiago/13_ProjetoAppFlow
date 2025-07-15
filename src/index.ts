import { createServer, IncomingMessage, ServerResponse } from "http";
import {
  getEpisodeById,
  getListEpisodes,
} from "./controllers/podcasts-controller";

async function main() {
  const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      if (req.method === "GET") {
        await getEpisodeById(req, res);
      }
    }
  );

  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
  });
}

main();
