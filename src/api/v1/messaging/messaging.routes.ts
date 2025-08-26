import { Hono } from "@hono/hono";
import * as messagingController from "./messaging.controller.ts";

const messaging = new Hono();

messaging.get("/conversations", messagingController.getAllConversations);
messaging.get("/conversations/:id", messagingController.getConversationById);
messaging.post("/conversations", messagingController.createConversation);
messaging.put("/conversations/:id", messagingController.updateConversation);
messaging.delete("/conversations/:id", messagingController.deleteConversation);

messaging.get("/conversations/:id/messages", messagingController.getMessagesByConversationId);
messaging.post("/conversations/:id/messages", messagingController.createMessage);
messaging.put("/messages/:id", messagingController.updateMessage);
messaging.delete("/messages/:id", messagingController.deleteMessage);

export default messaging;