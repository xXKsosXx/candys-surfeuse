// ✅ design.md appliqué
export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Politique de confidentialité
        </h1>
        <div className="mt-8 space-y-6 font-body text-sm leading-relaxed text-on-surface-variant">
          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Collecte des données
            </h2>
            <p>
              Nous collectons les données personnelles que vous nous fournissez
              volontairement lors de votre commande (nom, prénom, adresse email,
              adresse postale) ou lors de votre inscription à la newsletter (adresse email).
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Utilisation des données
            </h2>
            <p>
              Vos données sont utilisées pour :<br />
              — Le traitement et le suivi de vos commandes<br />
              — L&apos;envoi d&apos;emails transactionnels (confirmation de commande, suivi)<br />
              — L&apos;envoi de notre newsletter (si vous y êtes inscrit)
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Partage des données
            </h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être
              partagées avec nos prestataires techniques (Stripe pour le paiement,
              Vercel pour l&apos;hébergement) dans le strict cadre de leur mission.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies essentiels au fonctionnement du panier.
              Les cookies analytiques (Google Analytics) ne sont déposés qu&apos;après
              votre consentement via le bandeau cookies (tarteaucitron).
            </p>
          </section>

          <section>
            <h2 className="font-headline text-lg font-bold text-on-surface mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              de suppression et de portabilité de vos données. Pour exercer ces droits,
              contactez-nous à contact@candys.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
