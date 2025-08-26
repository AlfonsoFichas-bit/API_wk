import { Hono } from "@hono/hono";
import * as userStoryController from "./user_stories.controller.ts";

const userStories = new Hono();

userStories.get("/", userStoryController.getAllUserStories);
userStories.get("/:id", userStoryController.getUserStoryById);
userStories.post("/", userStoryController.createUserStory);
userStories.put("/:id", userStoryController.updateUserStory);
userStories.delete("/:id", userStoryController.deleteUserStory);

export default userStories;