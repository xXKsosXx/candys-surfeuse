export default {
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Titre Hero", type: "string" },
    { name: "heroSubtitle", title: "Sous-titre Hero", type: "string" },
    { name: "heroCTA", title: "Texte du bouton Hero", type: "string" },
    { name: "brandStoryText", title: "Texte histoire de la marque", type: "text" },
    { name: "brandStoryImage", title: "Image histoire de la marque", type: "image", options: { hotspot: true } },
  ],
};
