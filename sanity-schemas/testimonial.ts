export default {
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    { name: "authorName", title: "Nom de l'auteur", type: "string", validation: (r: any) => r.required() },
    { name: "quote", title: "Citation", type: "text", validation: (r: any) => r.required() },
    { name: "rating", title: "Note (1-5)", type: "number", validation: (r: any) => r.required().min(1).max(5) },
  ],
};
