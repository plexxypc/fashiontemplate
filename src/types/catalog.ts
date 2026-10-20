/**
 * Catalogue types shared by data files and the storefront UI.
 */

/** Saleable colour choice for a product. */
export type ProductColour = {
  name: string;
  hex: string;
};

/** Stock state derived from the available quantity. */
export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock';

/**
 * A storefront product.
 * Prices are whole Nigerian naira, not kobo.
 */
export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  sale_price?: number;
  category: string;
  collection_slug: string;
  image_urls: string[];
  image_alts: string[];
  sizes: string[];
  colours: ProductColour[];
  stock_quantity: number;
  stock_status: StockStatus;
  featured: boolean;
  bestseller: boolean;
  created_at: string;
};

/** Editorial collection used by listing pages and the homepage. */
export type Collection = {
  slug: string;
  name: string;
  description: string;
  image_url: string;
  image_alt: string;
  featured: boolean;
};
