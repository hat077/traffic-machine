import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// This ensures every markdown file has these specific fields
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        // Custom fields for your niche site logic:
		category: z.enum(['Comparison', 'Pricing', 'Career', 'Review']),
		// For Reviews:
		rating: z.number().min(0).max(5).optional(),
		// For Pricing Guides:
		priceRange: z.string().optional(),
	}),
});

export const collections = { blog };