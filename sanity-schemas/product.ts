// Schema to import into Sanity Studio
export default {
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    { name: "name", title: "Nom", type: "string", validation: (r: any) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r: any) => r.required() },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Maillots de bain", value: "maillots-de-bain" },
          { title: "Combinaisons", value: "combinaisons" },
          { title: "Été", value: "ete" },
        ],
      },
      validation: (r: any) => r.required(),
    },
    { name: "price", title: "Prix (€)", type: "number", validation: (r: any) => r.required().positive() },
    { name: "isNew", title: "Nouveauté", type: "boolean", initialValue: false },
    { name: "inStock", title: "En stock", type: "boolean", initialValue: true },
    { name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] },
    { name: "description", title: "Description", type: "text" },
    { name: "stripeProductId", title: "Stripe Product ID", type: "string" },
    { name: "stripePriceId", title: "Stripe Price ID", type: "string" },
  ],
  preview: { select: { title: "name", media: "images.0" } },
};
