// ✅ design.md appliqué
import Link from "next/link";

const FOOTER_LINKS = {
  aide: [
    { href: "/shop", label: "Catalogue" },
    { href: "/cart", label: "Mon panier" },
    { href: "#", label: "Suivi de commande" },
    { href: "#", label: "FAQ" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Confidentialité" },
    { href: "/cgv", label: "CGV" },
  ],
  contact: [
    { href: "mailto:contact@candys.com", label: "contact@candys.com" },
    { href: "#", label: "Instagram" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D2233] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="font-headline text-lg font-bold uppercase tracking-tight text-white mb-3">
              Candys
            </p>
            <p className="font-body text-sm leading-relaxed text-white/60">
              Vêtements de sport aquatique pour les femmes qui vivent l&apos;océan.
              Par Candy Oliveira.
            </p>
          </div>

          {/* Aide */}
          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Aide
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.aide.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Légal
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.contact.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-body text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Candys. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
