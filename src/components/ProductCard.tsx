// ✅ design.md appliqué
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0]
    ? urlFor(product.images[0]).width(600).height(800).url()
    : "/placeholder-product.jpg";

  return (
    <Link
      href={`/product/${product.slug.current}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 rounded-full bg-secondary-container text-on-secondary-container px-3 py-1 font-label text-xs font-semibold">
            Nouveauté
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-body text-sm font-medium text-on-surface">
          {product.name}
        </h3>
        <p className="mt-1 font-body text-sm font-bold text-primary">
          {product.price}&nbsp;&euro;
        </p>
      </div>
    </Link>
  );
}
