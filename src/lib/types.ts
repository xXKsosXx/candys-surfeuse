export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  category: "maillots-de-bain" | "combinaisons" | "ete";
  price: number;
  isNew: boolean;
  inStock: boolean;
  images: SanityImage[];
  description: string;
  stripeProductId: string;
  stripePriceId: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  image: SanityImage;
  description: string;
}

export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  brandStoryText: string;
  brandStoryImage: SanityImage;
}

export interface Testimonial {
  _id: string;
  authorName: string;
  quote: string;
  rating: number;
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: SanityImage;
  slug: string;
  stripePriceId: string;
}
