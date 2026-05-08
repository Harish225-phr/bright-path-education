import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "text", type: "text" }),
    defineField({ name: "rating", type: "number" }),
    defineField({ name: "photo", type: "image" }),
  ],
});
