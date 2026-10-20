/**
 * Builds stable demo image URLs.
 * Replace a returned URL with your own file, for example `/images/tee.jpg`.
 */

/**
 * Unsplash photograph URL locked to one photo id so it does not change on refresh.
 *
 * @param photo_id - Unsplash id including the `photo-` prefix.
 * @param width - Requested width in pixels.
 * @returns Absolute image URL for that photograph.
 */
export function stock_photo(photo_id: string, width: number): string {
  return `https://images.unsplash.com/${photo_id}?auto=format&fit=crop&w=${width}&q=80`;
}
