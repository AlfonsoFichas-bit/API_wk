import { Context } from "@hono/hono";
import * as messagingService from "./messaging.service.ts";

export const getAllConversations = async (c: Context) => {
    const conversations = await messagingService.getAllConversations();
    return c.json(conversations);
};

export const getConversationById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const conversation = await messagingService.getConversationById(id);
    if (!conversation) {
        return c.json({ message: "Conversation not found" }, 404);
    }
    return c.json(conversation);
};

export const createConversation = async (c: Context) => {
    const conversation = await c.req.json();
    const newConversation = await messagingService.createConversation(conversation);
    return c.json(newConversation, 201);
};

export const updateConversation = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const conversation = await c.req.json();
    const updatedConversation = await messagingService.updateConversation(id, conversation);
    if (!updatedConversation) {
        return c.json({ message: "Conversation not found" }, 404);
    }
    return c.json(updatedConversation);
};

export const deleteConversation = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await messagingService.deleteConversation(id);
    if (!deleted) {
        return c.json({ message: "Conversation not found" }, 404);
    }
    return c.json({ message: "Conversation deleted successfully" });
};

export const getMessagesByConversationId = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const messages = await messagingService.getMessagesByConversationId(id);
    return c.json(messages);
};

export const createMessage = async (c: Context) => {
    const conversationId = parseInt(c.req.param("id"));
    const message = await c.req.json();
    const newMessage = await messagingService.createMessage(conversationId, message);
    return c.json(newMessage, 201);
};

export const updateMessage = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const message = await c.req.json();
    const updatedMessage = await messagingService.updateMessage(id, message);
    if (!updatedMessage) {
        return c.json({ message: "Message not found" }, 404);
    }
    return c.json(updatedMessage);
};

export const deleteMessage = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await messagingService.deleteMessage(id);
    if (!deleted) {
        return c.json({ message: "Message not found" }, 404);
    }
    return c.json({ message: "Message deleted successfully" });
};