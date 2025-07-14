import { createServer, IncomingMessage, ServerResponse } from "http";
import {
  getEpisodeById,
  getListEpisodes,
} from "./controller/podcasts-controller";

async function main() {
  const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      const route = req.url;
      switch (route) {
        case "/about":
          if (req.method === "GET") {
            await getEpisodeById(req, res);
          }

          return;
        default:
          if (req.method === "GET") {
            await getListEpisodes(req, res);
          }
          break;
      }
    }
  );

  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
  });
}

main();
