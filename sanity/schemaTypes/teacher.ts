import { defineField, defineType } from "sanity";

export const teacher = defineType({
  name: "teacher",
  title: "Teacher",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "bio", type: "text" }),
    defineField({ name: "photo", type: "image" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({
      name: "social",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
  ],
});
