// ✅ design.md appliqué
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    name: "Maillots de bain",
    slug: "maillots-de-bain",
    image: "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&h=800&fit=crop&q=80",
  },
  {
    name: "Combinaisons",
    slug: "combinaisons",
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600&h=800&fit=crop&q=80",
  },
  {
    name: "Été",
    slug: "ete",
    image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=600&h=800&fit=crop&q=80",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-on-surface mb-10">
          Nos catégories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop?cat=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b15]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="font-headline text-xl font-bold uppercase text-white">
                  {cat.name}
                </h3>
                <svg
                  className="h-5 w-5 text-white transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
