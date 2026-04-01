// ✅ design.md appliqué
import Link from "next/link";
import Image from "next/image";

// Placeholder data until Sanity is connected
const PLACEHOLDER_PRODUCTS = [
  {
    _id: "1",
    name: "Bikini Sol Cévennes",
    slug: { current: "bikini-sol-cevennes" },
    price: 69,
    isNew: true,
    image: "/images/hero-maillot-de-bain.png",
  },
  {
    _id: "2",
    name: "Maillot Une Pièce Vague",
    slug: { current: "maillot-une-piece-vague" },
    price: 89,
    isNew: true,
    image: "/images/hero-principal.png",
  },
  {
    _id: "3",
    name: "Combinaison Surf Coral",
    slug: { current: "combinaison-surf-coral" },
    price: 189,
    isNew: false,
    image: "/images/hero-combinaison.png",
  },
  {
    _id: "4",
    name: "Crop Top Anti-UV Soleil",
    slug: { current: "crop-top-anti-uv-soleil" },
    price: 45,
    isNew: false,
    image: "/images/hero-vetements.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-surface-container-low py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-on-surface">
            Nouveautés
          </h2>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-1 font-label text-sm font-medium text-primary hover:text-primary-container transition-colors"
          >
            Tout voir
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug.current}`}
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
      </div>
    </section>
  );
}
