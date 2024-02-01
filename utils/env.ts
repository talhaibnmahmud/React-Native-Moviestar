import { z } from "zod";

export const envSchema = z.object({
	EXPO_PUBLIC_API_KEY: z.string().default(""),
	EXPO_PUBLIC_API_ACCESS_TOKEN: z.string().default(""),
});

export const env = envSchema.parse(process.env);

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envSchema> {}
	}
}
