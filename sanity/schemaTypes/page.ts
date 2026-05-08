import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "seoTitle", type: "string" }),
    defineField({ name: "seoDescription", type: "text" }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "hero", type: "object", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "subtitle", type: "string" }), defineField({ name: "backgroundImage", type: "image" })] }),
  ],
});
