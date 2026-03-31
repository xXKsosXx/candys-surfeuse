// ✅ design.md appliqué
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  { value: "", label: "Toutes" },
  { value: "maillots-de-bain", label: "Maillots de bain" },
  { value: "combinaisons", label: "Combinaisons" },
  { value: "ete", label: "Été" },
];

// Placeholder products until Sanity is connected
const ALL_PRODUCTS = [
  {
    _id: "1",
    name: "Bikini Sol Cévennes",
    slug: "bikini-sol-cevennes",
    category: "maillots-de-bain",
    price: 69,
    isNew: true,
    image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=800&fit=crop&q=80",
  },
  {
    _id: "2",
    name: "Maillot Une Pièce Vague",
    slug: "maillot-une-piece-vague",
    category: "maillots-de-bain",
    price: 89,
    isNew: true,
    image: "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&h=800&fit=crop&q=80",
  },
  {
    _id: "3",
    name: "Combinaison Surf Coral",
    slug: "combinaison-surf-coral",
    category: "combinaisons",
    price: 189,
    isNew: false,
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600&h=800&fit=crop&q=80",
  },
  {
    _id: "4",
    name: "Crop Top Anti-UV Soleil",
    slug: "crop-top-anti-uv-soleil",
    category: "ete",
    price: 45,
    isNew: false,
    image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=600&h=800&fit=crop&q=80",
  },
  {
    _id: "5",
    name: "Boardshort Femme Atlantique",
    slug: "boardshort-femme-atlantique",
    category: "ete",
    price: 75,
    isNew: false,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop&q=80",
  },
  {
    _id: "6",
    name: "Combinaison Shorty Cévennes",
    slug: "combinaison-shorty-cevennes",
    category: "combinaisons",
    price: 149,
    isNew: false,
    image: "https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=600&h=800&fit=crop&q=80",
  },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("cat") || "";

  const filtered = activeCategory
    ? ALL_PRODUCTS.filter((p) => p.category === activeCategory)
    : ALL_PRODUCTS;

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold uppercase tracking-tight text-on-surface">
          Collections
        </h1>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              href={cat.value ? `/shop?cat=${cat.value}` : "/shop"}
              className={`rounded-full px-5 py-2 font-label text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === cat.value
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 rounded-full bg-secondary-container text-on-secondary-container px-3 py-1 font-label text-xs font-semibold">
                    Nouveauté
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-body text-sm font-medium text-on-surface">
                  {product.name}
                </h3>
                <p className="mt-1 font-body text-sm font-bold text-primary">
                  {product.price}&nbsp;&euro;
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-body text-on-surface-variant">
            Aucun produit dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface pt-24 flex items-center justify-center">
          <p className="font-body text-on-surface-variant">Chargement...</p>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
