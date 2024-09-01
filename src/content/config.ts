import { defineCollection, z } from "astro:content";

const noteCollection = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  notes: noteCollection,
};
