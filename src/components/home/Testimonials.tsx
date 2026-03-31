// ✅ design.md appliqué

const PLACEHOLDER_TESTIMONIALS = [
  {
    _id: "t1",
    authorName: "Marie L.",
    quote:
      "Le maillot Bikini Sol est incroyable ! Confortable, résistant et tellement beau. Je ne surf plus sans.",
    rating: 5,
  },
  {
    _id: "t2",
    authorName: "Sophie D.",
    quote:
      "La combinaison Coral m'a accompagnée tout l'hiver. Souple, chaude et le design est canon.",
    rating: 5,
  },
  {
    _id: "t3",
    authorName: "Léa M.",
    quote:
      "Enfin une marque qui comprend les surfeuses ! Les coupes sont parfaites et les couleurs magnifiques.",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-tertiary" : "text-outline-variant"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface-container-lowest py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-on-surface mb-10 text-center">
          Ce qu&apos;elles en disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((t) => (
            <div
              key={t._id}
              className="rounded-xl bg-surface p-8"
              style={{ boxShadow: "0 10px 40px rgba(30,27,21,0.06)" }}
            >
              <Stars count={t.rating} />
              <p className="mt-4 font-body text-sm leading-relaxed text-on-surface-variant">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-label text-xs font-semibold uppercase tracking-wide text-on-surface">
                {t.authorName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
