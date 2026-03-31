"use client";
// ✅ design.md appliqué
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            stripePriceId: i.stripePriceId,
            quantity: i.quantity,
            name: i.name,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center pt-20">
          <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
            Votre panier est vide
          </h1>
          <p className="mt-4 font-body text-on-surface-variant">
            Découvrez nos collections et trouvez votre bonheur.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white hover:bg-secondary/90 transition-colors"
          >
            Voir les collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-headline text-4xl font-bold uppercase tracking-tight text-on-surface">
          Panier ({totalItems})
        </h1>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 rounded-xl bg-surface-container-lowest p-4"
              style={{ boxShadow: "0 10px 40px rgba(30,27,21,0.06)" }}
            >
              <div className="h-20 w-16 flex-shrink-0 rounded-lg bg-surface-container overflow-hidden">
                <div className="h-full w-full bg-surface-container-high" />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/product/${item.slug}`}
                  className="font-body text-sm font-medium text-on-surface hover:text-primary"
                >
                  {item.name}
                </Link>
                <p className="mt-1 font-body text-sm font-bold text-primary">
                  {item.price}&nbsp;&euro;
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  aria-label="Diminuer"
                >
                  -
                </button>
                <span className="w-8 text-center font-body text-sm font-medium text-on-surface">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item._id)}
                className="text-on-surface-variant hover:text-error transition-colors"
                aria-label="Retirer"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Total + Checkout */}
        <div className="mt-8 rounded-xl bg-surface-container-lowest p-6" style={{ boxShadow: "0 10px 40px rgba(30,27,21,0.06)" }}>
          <div className="flex items-center justify-between">
            <span className="font-body text-base font-medium text-on-surface">Total</span>
            <span className="font-headline text-2xl font-bold text-on-surface">
              {totalPrice.toFixed(2)}&nbsp;&euro;
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-secondary px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-secondary/90 hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Redirection..." : "Passer au paiement"}
          </button>
        </div>
      </div>
    </div>
  );
}
