import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "image", type: "image" }),
    defineField({ name: "alt", type: "string" }),
    defineField({ name: "caption", type: "string" }),
    defineField({ name: "category", type: "string" }),
  ],
});
