import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "date", type: "datetime" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "signupUrl", type: "url" }),
  ],
});
