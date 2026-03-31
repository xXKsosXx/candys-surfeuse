// ✅ design.md appliqué
export default function CGVPage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Conditions générales de vente
        </h1>
        <div className="mt-8 space-y-6 font-body text-sm leading-relaxed text-on-surface-variant">
          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes conditions générales de vente régissent les ventes de
              produits effectuées sur le site candys-surfeuse.com par Candys Surfeuse.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 2 — Prix
            </h2>
            <p>
              Les prix sont indiqués en euros toutes taxes comprises (TTC).
              Candys Surfeuse se réserve le droit de modifier ses prix à tout moment.
              Les produits sont facturés au prix en vigueur au moment de la validation
              de la commande.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 3 — Commandes
            </h2>
            <p>
              La validation de votre commande implique l&apos;acceptation des présentes CGV.
              La commande n&apos;est définitive qu&apos;après confirmation du paiement.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 4 — Paiement
            </h2>
            <p>
              Le paiement s&apos;effectue par carte bancaire via la plateforme sécurisée Stripe.
              Les données bancaires ne sont jamais stockées sur nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 5 — Livraison
            </h2>
            <p>
              Les commandes sont expédiées en France métropolitaine, Belgique, Suisse,
              Luxembourg et Monaco. Les délais de livraison sont donnés à titre indicatif.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 6 — Droit de rétractation
            </h2>
            <p>
              Conformément à la législation en vigueur, vous disposez d&apos;un délai de
              14 jours à compter de la réception de votre commande pour exercer
              votre droit de rétractation, sans avoir à justifier de motifs.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Article 7 — Contact
            </h2>
            <p>
              Pour toute question relative aux CGV, contactez-nous à
              contact@candys-surfeuse.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
