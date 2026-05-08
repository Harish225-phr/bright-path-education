import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? "";
// const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";
const projectId = "v9lzjatz";
const dataset = "production";
export default defineConfig({
  name: "default",
  title: "Bright Path Education CMS",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
