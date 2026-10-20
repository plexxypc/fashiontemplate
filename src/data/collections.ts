import type { Collection } from '../types/catalog.ts';
import { stock_photo } from './image.ts';

/**
 * Editorial collections. Product `collection_slug` values must match a slug here.
 */
export const collections: Collection[] = [
  {
    slug: 'city-run',
    name: 'City Run',
    description: 'Light layers for humid miles, dawn loops, and the commute that turns into a session.',
    image_url: stock_photo('photo-1483721310020-03333e577078', 1400),
    image_alt: 'Runner in a grey tee moving through morning light',
    featured: true,
  },
  {
    slug: 'night-training',
    name: 'Night Training',
    description: 'Ink blacks and a single signal colour for floodlit tracks and late intervals.',
    image_url: stock_photo('photo-1552674605-db6ffd4facb5', 1400),
    image_alt: 'Athlete running at dusk in dark training clothes',
    featured: true,
  },
  {
    slug: 'studio-essentials',
    name: 'Studio Essentials',
    description: 'The pieces that live in the bag: rib, half-zips, and cloth that layers without noise.',
    image_url: stock_photo('photo-1571902943202-507ec2618e8f', 1400),
    image_alt: 'Bright training studio with open floor and soft daylight',
    featured: true,
  },
  {
    slug: 'recovery',
    name: 'Recovery',
    description: 'Knit and fleece for the walk home, the stretch, and the day after a long effort.',
    image_url: stock_photo('photo-1544367567-0f2fcb009e0b', 1400),
    image_alt: 'Person resting on a mat in soft neutral clothing',
    featured: true,
  },
];

/**
 * Finds a collection by its slug.
 *
 * @param slug - Collection slug from the route or a product.
 * @returns The collection, or undefined when the slug is unknown.
 */
export function get_collection_by_slug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}
