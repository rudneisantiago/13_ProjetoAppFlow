import { createServer } from "http";
import { app } from "./app";

async function main() {
  const server = createServer(app);
  const port = process.env.PORT;

  server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`);
  });
}

main();
