import { Hono } from "@hono/hono";
import users from "./users/users.routes.ts";

const v1 = new Hono();

v1.route("/users", users);

export default v1;