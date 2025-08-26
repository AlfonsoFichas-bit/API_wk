import "https://deno.land/std@0.224.0/dotenv/load.ts";

export const config = {
    databaseUrl: Deno.env.get("DATABASE_URL"),
};