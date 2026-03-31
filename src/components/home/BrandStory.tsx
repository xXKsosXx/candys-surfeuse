// ✅ design.md appliqué
import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=1000&fit=crop&q=80"
              alt="Candy Oliveira — Fondatrice de Candys"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-secondary">
              Notre histoire
            </span>
            <h2 className="mt-3 font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-on-surface">
              Née de<br />l&apos;océan
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-on-surface-variant">
              Candys est née d&apos;une passion pour les vagues et le soleil.
              Candy Oliveira, surfeuse passionnée depuis l&apos;enfance, a voulu créer
              des vêtements qui allient performance, confort et élégance pour les
              femmes qui vivent au rythme de l&apos;océan. Chaque pièce est conçue
              avec des matériaux durables, pensée pour résister au sel, au sable
              et au soleil.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-label text-sm font-semibold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-on-primary"
            >
              Découvrir nos produits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
