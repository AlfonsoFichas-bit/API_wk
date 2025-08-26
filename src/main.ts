import { app } from "./core/server.ts";
import v1 from "./api/v1/index.ts";

app.route("/api/v1", v1);

Deno.serve(app.fetch);