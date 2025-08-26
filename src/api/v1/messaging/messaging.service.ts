import { db } from "../../../db/db.ts";
import { conversations, messages } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllConversations = async () => {
    return await db.select().from(conversations);
};

export const getConversationById = async (id: number) => {
    return await db.select().from(conversations).where(eq(conversations.id, id));
};

export const createConversation = async (conversation: any) => {
    return await db.insert(conversations).values(conversation).returning();
};

export const updateConversation = async (id: number, conversation: any) => {
    return await db.update(conversations).set(conversation).where(eq(conversations.id, id)).returning();
};

export const deleteConversation = async (id: number) => {
    return await db.delete(conversations).where(eq(conversations.id, id)).returning();
};

export const getMessagesByConversationId = async (conversationId: number) => {
    return await db.select().from(messages).where(eq(messages.conversationId, conversationId));
};

export const createMessage = async (conversationId: number, message: any) => {
    return await db.insert(messages).values({ ...message, conversationId }).returning();
};

export const updateMessage = async (id: number, message: any) => {
    return await db.update(messages).set(message).where(eq(messages.id, id)).returning();
};

export const deleteMessage = async (id: number) => {
    return await db.delete(messages).where(eq(messages.id, id)).returning();
};