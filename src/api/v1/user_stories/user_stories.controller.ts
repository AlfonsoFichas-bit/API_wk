import { Context } from "@hono/hono";
import * as userStoryService from "./user_stories.service.ts";

export const getAllUserStories = async (c: Context) => {
    const userStories = await userStoryService.getAllUserStories();
    return c.json(userStories);
};

export const getUserStoryById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const userStory = await userStoryService.getUserStoryById(id);
    if (!userStory) {
        return c.json({ message: "User Story not found" }, 404);
    }
    return c.json(userStory);
};

export const createUserStory = async (c: Context) => {
    const userStory = await c.req.json();
    const newUserStory = await userStoryService.createUserStory(userStory);
    return c.json(newUserStory, 201);
};

export const updateUserStory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const userStory = await c.req.json();
    const updatedUserStory = await userStoryService.updateUserStory(id, userStory);
    if (!updatedUserStory) {
        return c.json({ message: "User Story not found" }, 404);
    }
    return c.json(updatedUserStory);
};

export const deleteUserStory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await userStoryService.deleteUserStory(id);
    if (!deleted) {
        return c.json({ message: "User Story not found" }, 404);
    }
    return c.json({ message: "User Story deleted successfully" });
};