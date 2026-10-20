import { store } from '../config/store.ts';

/**
 * Builds a browser title from a page label and the configured suffix.
 *
 * @param label - Short page name. Empty uses the default title.
 * @returns A document title.
 */
export function page_title(label: string): string {
  if (!label.trim()) {
    return store.seo.default_title;
  }
  return `${label} — ${store.seo.title_suffix}`;
}

/**
 * Absolute URL for the current origin. Falls back to the path during prerender.
 *
 * @param path - Route path beginning with `/`.
 * @returns An absolute URL when `window` exists.
 */
export function absolute_url(path: string): string {
  if (typeof window === 'undefined') {
    return path;
  }
  return new URL(path, window.location.origin).href;
}

/**
 * Joins a street address from config into one line.
 *
 * @returns The store address.
 */
export function format_store_address(): string {
  const address = store.address;
  return [address.line_1, address.line_2, address.city, address.country].filter(Boolean).join(', ');
}
