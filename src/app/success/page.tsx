// ✅ design.md appliqué
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="text-center max-w-lg">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Commande confirmée !
        </h1>
        <p className="mt-4 font-body text-base text-on-surface-variant">
          Merci pour votre achat. Vous recevrez un email de confirmation
          avec les détails de votre commande.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white hover:bg-secondary/90 transition-colors"
        >
          Continuer le shopping
        </Link>
      </div>
    </div>
  );
}
