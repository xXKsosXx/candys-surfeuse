"use client";
// ✅ design.md appliqué
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

// Placeholder data until Sanity is connected
const PRODUCTS: Record<string, {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  isNew: boolean;
  description: string;
  images: string[];
  stripePriceId: string;
}> = {
  "bikini-sol-cevennes": {
    _id: "1",
    name: "Bikini Sol Cévennes",
    slug: "bikini-sol-cevennes",
    category: "maillots-de-bain",
    price: 69,
    isNew: true,
    description: "Bikini deux pièces inspiré des plages cévenoles. Tissu recyclé, résistant au chlore et à l'eau salée. Coupe flatteuse et maintien parfait pour le surf.",
    images: [
      "/images/hero-maillot-de-bain.png",
      "/images/hero-principal.png",
    ],
    stripePriceId: "price_test_bikini",
  },
  "maillot-une-piece-vague": {
    _id: "2",
    name: "Maillot Une Pièce Vague",
    slug: "maillot-une-piece-vague",
    category: "maillots-de-bain",
    price: 89,
    isNew: true,
    description: "Maillot une pièce avec décolleté plongeant et dos nageur. Tissu UPF 50+ avec compression douce. Parfait pour les sessions longues.",
    images: [
      "/images/hero-principal.png",
    ],
    stripePriceId: "price_test_maillot",
  },
  "combinaison-surf-coral": {
    _id: "3",
    name: "Combinaison Surf Coral",
    slug: "combinaison-surf-coral",
    category: "combinaisons",
    price: 189,
    isNew: false,
    description: "Combinaison intégrale 3/2mm en néoprène japonais Yamamoto. Coutures scellées, fermeture poitrine. Coloris coral exclusif.",
    images: [
      "/images/hero-combinaison.png",
    ],
    stripePriceId: "price_test_combi",
  },
  "crop-top-anti-uv-soleil": {
    _id: "4",
    name: "Crop Top Anti-UV Soleil",
    slug: "crop-top-anti-uv-soleil",
    category: "ete",
    price: 45,
    isNew: false,
    description: "Crop top léger avec protection UPF 50+. Tissu technique respirant qui sèche en 20 minutes. Idéal pour le beach-volley et le paddle.",
    images: [
      "/images/hero-vetements.png",
    ],
    stripePriceId: "price_test_crop",
  },
  "boardshort-femme-atlantique": {
    _id: "5",
    name: "Boardshort Femme Atlantique",
    slug: "boardshort-femme-atlantique",
    category: "ete",
    price: 75,
    isNew: false,
    description: "Boardshort mi-cuisse avec taille élastique et cordon. Poches latérales zippées. Tissu stretch recyclé à séchage rapide.",
    images: [
      "/images/hero-vetements.png",
    ],
    stripePriceId: "price_test_board",
  },
  "combinaison-shorty-cevennes": {
    _id: "6",
    name: "Combinaison Shorty Cévennes",
    slug: "combinaison-shorty-cevennes",
    category: "combinaisons",
    price: 149,
    isNew: false,
    description: "Combinaison shorty 2mm bras courts/jambes courtes. Néoprène souple avec dos zip. Parfaite pour les eaux entre 18°C et 22°C.",
    images: [
      "/images/hero-combinaison.png",
    ],
    stripePriceId: "price_test_shorty",
  },
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCTS[slug];
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-surface pt-24 flex items-center justify-center">
        <p className="font-body text-on-surface-variant">Produit non trouvé.</p>
      </div>
    );
  }

  function handleAdd() {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: { _type: "image", asset: { _ref: "", _type: "reference" } },
      slug: product.slug,
      stripePriceId: product.stripePriceId,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  // Related products (same category, excluding current)
  const related = Object.values(PRODUCTS)
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-8 font-label text-xs text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Accueil</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-primary">Collections</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 rounded-full bg-secondary-container text-on-secondary-container px-4 py-1.5 font-label text-xs font-semibold">
                  Nouveauté
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative h-20 w-20 overflow-hidden rounded-lg ${
                      i === activeImage ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-on-surface">
              {product.name}
            </h1>
            <p className="mt-3 font-body text-2xl font-bold text-primary">
              {product.price}&nbsp;&euro;
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-on-surface-variant">
              {product.description}
            </p>
            <button
              onClick={handleAdd}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-secondary/90 hover:shadow-lg"
            >
              {added ? "Ajouté !" : "Ajouter au panier"}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface mb-8">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {related.map((r) => (
                <Link key={r._id} href={`/product/${r.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container">
                    <Image
                      src={r.images[0]}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-body text-sm font-medium text-on-surface">{r.name}</h3>
                    <p className="mt-1 font-body text-sm font-bold text-primary">{r.price}&nbsp;&euro;</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
