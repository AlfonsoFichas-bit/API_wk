import { Context } from "@hono/hono";
import * as userService from "./users.service.ts";

export const getAllUsers = async (c: Context) => {
    const users = await userService.getUsers();
    return c.json(users);
};

export const getUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const user = await userService.getUserById(id);
    if (!user) {
        return c.json({ message: "User not found" }, 404);
    }
    return c.json(user);
};

export const createUser = async (c: Context) => {
    const user = await c.req.json();
    const newUser = await userService.createUser(user);
    return c.json(newUser, 201);
};