// ✅ design.md appliqué
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-principal.png"
        alt="Candys — collection été"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b15]/20 to-transparent" />

      {/* Content */}
      <div className="relative flex h-full items-end pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Ride<br />
            The Wave
          </h1>
          <p className="mt-4 max-w-lg font-body text-base sm:text-lg text-white/80">
            Collection été 2026 — Maillots de bain, combinaisons et vêtements
            d&apos;été pour les femmes qui vivent l&apos;océan.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            Découvrir la collection
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
