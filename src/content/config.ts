import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    url: z.string().optional(),
    role: z.string().optional(),
    release: z.string().optional(),
    logo: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
