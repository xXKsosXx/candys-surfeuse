export default {
  name: "category",
  title: "Catégorie",
  type: "document",
  fields: [
    { name: "name", title: "Nom", type: "string", validation: (r: any) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r: any) => r.required() },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "description", title: "Description", type: "text" },
  ],
};
