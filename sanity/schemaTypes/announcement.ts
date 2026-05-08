import { defineField, defineType } from "sanity";

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "category", type: "string", options: { list: ["News", "Event", "Holiday", "Important", "Achievement"] } }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", type: "image" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "featured", type: "boolean" }),
  ],
});
