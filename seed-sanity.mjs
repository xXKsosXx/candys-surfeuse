/**
 * Seed script for Sanity CMS — Candys Surfeuse
 * Run: node seed-sanity.mjs
 * Then DELETE this file immediately. Never commit it.
 *
 * Prerequisites:
 *   - Set SANITY_PROJECT_ID and SANITY_API_TOKEN in your environment
 *   - npm install @sanity/client (already installed)
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const products = [
  {
    _type: "product",
    name: "Bikini Sol Cévennes",
    slug: { _type: "slug", current: "bikini-sol-cevennes" },
    category: "maillots-de-bain",
    price: 69,
    isNew: true,
    inStock: true,
    description: "Bikini deux pièces inspiré des plages cévenoles. Tissu recyclé, résistant au chlore et à l'eau salée.",
    stripeProductId: "",
    stripePriceId: "",
  },
  {
    _type: "product",
    name: "Maillot Une Pièce Vague",
    slug: { _type: "slug", current: "maillot-une-piece-vague" },
    category: "maillots-de-bain",
    price: 89,
    isNew: true,
    inStock: true,
    description: "Maillot une pièce avec décolleté plongeant et dos nageur. Tissu UPF 50+ avec compression douce.",
    stripeProductId: "",
    stripePriceId: "",
  },
  {
    _type: "product",
    name: "Combinaison Surf Coral",
    slug: { _type: "slug", current: "combinaison-surf-coral" },
    category: "combinaisons",
    price: 189,
    isNew: false,
    inStock: true,
    description: "Combinaison intégrale 3/2mm en néoprène japonais Yamamoto. Coutures scellées, fermeture poitrine.",
    stripeProductId: "",
    stripePriceId: "",
  },
  {
    _type: "product",
    name: "Crop Top Anti-UV Soleil",
    slug: { _type: "slug", current: "crop-top-anti-uv-soleil" },
    category: "ete",
    price: 45,
    isNew: false,
    inStock: true,
    description: "Crop top léger avec protection UPF 50+. Tissu technique respirant qui sèche en 20 minutes.",
    stripeProductId: "",
    stripePriceId: "",
  },
  {
    _type: "product",
    name: "Boardshort Femme Atlantique",
    slug: { _type: "slug", current: "boardshort-femme-atlantique" },
    category: "ete",
    price: 75,
    isNew: false,
    inStock: true,
    description: "Boardshort mi-cuisse avec taille élastique et cordon. Poches latérales zippées. Tissu stretch recyclé.",
    stripeProductId: "",
    stripePriceId: "",
  },
  {
    _type: "product",
    name: "Combinaison Shorty Cévennes",
    slug: { _type: "slug", current: "combinaison-shorty-cevennes" },
    category: "combinaisons",
    price: 149,
    isNew: false,
    inStock: true,
    description: "Combinaison shorty 2mm bras courts/jambes courtes. Néoprène souple avec dos zip.",
    stripeProductId: "",
    stripePriceId: "",
  },
];

async function seed() {
  console.log("Seeding Sanity with 6 products...");

  for (const product of products) {
    const result = await client.create(product);
    console.log(`Created: ${result.name} (${result._id})`);
  }

  console.log("Done! Now DELETE this file.");
}

seed().catch(console.error);
