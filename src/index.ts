import { createServer, IncomingMessage, ServerResponse } from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

async function main() {
  const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
      const url = new URL(`${process.env.HOST}${req.url}`);
      const { pathname } = url;

      if (req.method === HttpMethods.GET && pathname === Routes.LIST) {
        await getListEpisodes(req, res);
      }

      if (req.method === HttpMethods.GET && pathname === Routes.EPISODE) {
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
