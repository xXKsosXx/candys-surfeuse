"use client";
// ✅ design.md appliqué
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
          Restez dans la vague
        </h2>
        <p className="mt-3 font-body text-base text-white/80">
          Inscrivez-vous pour recevoir nos nouveautés et offres exclusives.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-1 rounded-xl bg-white/10 px-5 py-3 font-body text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-white px-6 py-3 font-label text-sm font-semibold uppercase tracking-wide text-secondary hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : "S'inscrire"}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-3 font-body text-sm text-white/80">
            Merci ! Vous recevrez bientôt de nos nouvelles.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 font-body text-sm text-error-container">
            Une erreur est survenue. Réessayez.
          </p>
        )}
      </div>
    </section>
  );
}
