// ✅ design.md appliqué
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="text-center max-w-lg">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Paiement annulé
        </h1>
        <p className="mt-4 font-body text-base text-on-surface-variant">
          Votre paiement a été annulé. Vos articles sont toujours dans votre panier.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/cart"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white hover:bg-secondary/90 transition-colors"
          >
            Retour au panier
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-label text-sm font-semibold uppercase tracking-wide text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            Voir les collections
          </Link>
        </div>
      </div>
    </div>
  );
}
