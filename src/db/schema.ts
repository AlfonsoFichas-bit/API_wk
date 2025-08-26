import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  nombre: text("nombre").notNull(),
  apellido_paterno: text("apellido_paterno").notNull(),
  apellido_materno: text("apellido_materno").notNull(),
  correo: text("correo").notNull().unique(),
  contraseña: text("contraseña").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
