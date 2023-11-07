import { defineCollection, z } from 'astro:content';

// Definir una colección llamada "blog"
const blog = defineCollection({
	// Verificar el tipo del frontmatter utilizando un esquema
	schema: z.object({
		title: z.string(), // El título del artículo del blog (cadena de texto)
		description: z.string(), // La descripción del artículo del blog (cadena de texto)
		pubDate: z // La fecha de publicación del artículo del blog (cadena de texto o fecha)
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z // La fecha de actualización del artículo del blog (cadena de texto o fecha, opcional)
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(), // La imagen destacada del artículo del blog (cadena de texto, opcional)
	}),
});

export const collections = { blog };