// ✅ design.md appliqué
export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Mentions légales
        </h1>
        <div className="mt-8 space-y-6 font-body text-sm leading-relaxed text-on-surface-variant">
          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Éditeur du site
            </h2>
            <p>
              Le site candys-surfeuse.com est édité par Candys Surfeuse (en cours d&apos;immatriculation).<br />
              Fondatrice : Candy Oliveira<br />
              Email : contact@candys-surfeuse.com
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              440 N Bashaw St, Covina, CA 91723, États-Unis
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes)
              est la propriété exclusive de Candys Surfeuse, sauf mention contraire.
              Toute reproduction, même partielle, est interdite sans autorisation
              préalable.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Responsabilité
            </h2>
            <p>
              Candys Surfeuse s&apos;efforce de fournir des informations aussi précises
              que possible. Toutefois, elle ne pourra être tenue responsable des
              omissions, des inexactitudes et des carences dans la mise à jour.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
