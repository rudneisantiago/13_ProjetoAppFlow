import { createServer, IncomingMessage, ServerResponse } from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";

async function main() {
  const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      const url = new URL(`${process.env.HOST}${req.url}`);

      if (req.method === "GET" && url.pathname === "/api/list") {
        await getListEpisodes(req, res);
      }

      if (req.method === "GET" && url.pathname === "/api/episode") {
        await getFilterEpisodes(req, res);
      }
    }
  );

  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
  });
}

main();
