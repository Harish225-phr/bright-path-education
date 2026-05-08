import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "thumbnail", type: "image" }),
    defineField({ name: "featured", type: "boolean" }),
  ],
});
