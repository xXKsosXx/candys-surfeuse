import { client } from "./sanity";
import type { Product, Category, SiteSettings, Testimonial } from "./types";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id, name, slug, category, price, isNew, inStock,
      images, description, stripeProductId, stripePriceId
    }`
  );
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, category, price, isNew, inStock,
      images, description, stripeProductId, stripePriceId
    }`,
    { slug }
  );
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && category == $category] | order(_createdAt desc) {
      _id, name, slug, category, price, isNew, inStock,
      images, description, stripeProductId, stripePriceId
    }`,
    { category }
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && isNew == true][0...4] {
      _id, name, slug, category, price, isNew, inStock,
      images, description, stripeProductId, stripePriceId
    }`
  );
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(name asc) {
      _id, name, slug, image, description
    }`
  );
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      heroTitle, heroSubtitle, heroCTA, brandStoryText, brandStoryImage
    }`
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc)[0...3] {
      _id, authorName, quote, rating
    }`
  );
}

export async function getRelatedProducts(
  category: string,
  excludeId: string
): Promise<Product[]> {
  return client.fetch(
    `*[_type == "product" && category == $category && _id != $excludeId][0...3] {
      _id, name, slug, category, price, isNew, inStock,
      images, description, stripeProductId, stripePriceId
    }`,
    { category, excludeId }
  );
}
