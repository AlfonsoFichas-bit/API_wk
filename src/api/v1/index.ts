import { Hono } from "@hono/hono";
import users from "./users/users.routes.ts";
import projects from "./projects/projects.routes.ts";
import sprints from "./sprints/sprints.routes.ts";
import userStories from "./user_stories/user_stories.routes.ts";
import tasks from "./tasks/tasks.routes.ts";
import rubrics from "./rubrics/rubrics.routes.ts";
import evaluations from "./evaluations/evaluations.routes.ts";
import messaging from "./messaging/messaging.routes.ts";
import reporting from "./reporting/reporting.routes.ts";

const v1 = new Hono();

v1.route("/users", users);
v1.route("/projects", projects);
v1.route("/sprints", sprints);
v1.route("/user_stories", userStories);
v1.route("/tasks", tasks);
v1.route("/rubrics", rubrics);
v1.route("/evaluations", evaluations);
v1.route("/messaging", messaging);
v1.route("/reporting", reporting);

export default v1;