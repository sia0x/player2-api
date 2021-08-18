import server from "./app";
import env from "./config/env";

server.listen(env.port || 3001);
