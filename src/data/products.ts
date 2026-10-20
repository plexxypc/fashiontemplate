import type { Product, ProductColour } from '../types/catalog.ts';
import { stock_photo } from './image.ts';

const black: ProductColour = { name: 'Black', hex: '#161616' };
const bone: ProductColour = { name: 'Bone', hex: '#e6e0d4' };
const ink: ProductColour = { name: 'Ink', hex: '#1b2430' };
const stone: ProductColour = { name: 'Stone', hex: '#b7b1a8' };
const sage: ProductColour = { name: 'Sage', hex: '#8d9886' };
const signal: ProductColour = { name: 'Signal', hex: '#d6e85a' };
const charcoal: ProductColour = { name: 'Charcoal', hex: '#3a3a3a' };

const apparel_sizes = ['XS', 'S', 'M', 'L', 'XL'];
const short_sizes = ['XS', 'S', 'M', 'L'];
const shoe_sizes = ['40', '41', '42', '43', '44', '45'];

/**
 * Demo catalogue. Replace names, prices, and image URLs without changing components.
 * Prices are whole Nigerian naira.
 */
export const products: Product[] = [
  {
    id: 'vx-meridian-tee',
    slug: 'meridian-run-tee',
    name: 'Meridian Run Tee',
    description:
      'A light training tee with a short hem and a collar that stays flat in humidity. Cut for easy miles and the warm-up before them.',
    price: 28000,
    sale_price: 24000,
    category: 'tops',
    collection_slug: 'city-run',
    image_urls: [
      stock_photo('photo-1521572163474-6864f9cf17ab', 1200),
      stock_photo('photo-1583743814966-8936f5b7be1a', 1200),
    ],
    image_alts: [
      'Person wearing a plain light training t-shirt',
      'Folded black and light tees on a neutral surface',
    ],
    sizes: apparel_sizes,
    colours: [black, bone],
    stock_quantity: 20,
    stock_status: 'in_stock',
    featured: true,
    bestseller: true,
    created_at: '2025-11-02',
  },
  {
    id: 'vx-harbour-short',
    slug: 'harbour-split-short',
    name: 'Harbour Split Short',
    description:
      'A 5-inch run short with a split hem and a quiet inner brief. Made to move through humid Lagos mornings without clinging.',
    price: 32000,
    category: 'bottoms',
    collection_slug: 'city-run',
    image_urls: [
      stock_photo('photo-1517836357463-d25dfeac3438', 1200),
      stock_photo('photo-1571019613454-1cb2f99b2d8b', 1200),
    ],
    image_alts: [
      'Athlete in dark training shorts mid-session',
      'Close view of a runner in black shorts',
    ],
    sizes: apparel_sizes,
    colours: [black, ink],
    stock_quantity: 16,
    stock_status: 'in_stock',
    featured: true,
    bestseller: false,
    created_at: '2025-11-18',
  },
  {
    id: 'vx-mainland-shell',
    slug: 'third-mainland-shell',
    name: 'Third Mainland Shell',
    description:
      'A packable wind shell for sudden rain on the bridge and cool air after sunset. It folds into its own pocket and layers over a tee.',
    price: 98000,
    category: 'outerwear',
    collection_slug: 'city-run',
    image_urls: [
      stock_photo('photo-1483721310020-03333e577078', 1200),
      stock_photo('photo-1538805060514-97d9cc17730c', 1200),
    ],
    image_alts: [
      'Runner in a grey shell on an open road',
      'Runner moving away along an open road in dark training clothes',
    ],
    sizes: apparel_sizes,
    colours: [black, stone],
    stock_quantity: 8,
    stock_status: 'in_stock',
    featured: true,
    bestseller: true,
    created_at: '2026-01-12',
  },
  {
    id: 'vx-floodlight-singlet',
    slug: 'floodlight-singlet',
    name: 'Floodlight Singlet',
    description:
      'A race singlet with binding that does not rub and a back vent for floodlit intervals. The signal colour is there so your group can find you.',
    price: 22000,
    category: 'tops',
    collection_slug: 'night-training',
    image_urls: [
      stock_photo('photo-1552674605-db6ffd4facb5', 1200),
      stock_photo('photo-1534438327276-14e5300c3a48', 1200),
    ],
    image_alts: [
      'Runner in a dark singlet moving at dusk',
      'Sprinters leaving the start in training kit',
    ],
    sizes: short_sizes,
    colours: [black, signal],
    stock_quantity: 14,
    stock_status: 'in_stock',
    featured: false,
    bestseller: true,
    created_at: '2026-02-01',
  },
  {
    id: 'vx-interval-tight',
    slug: 'interval-tight',
    name: 'Interval Tight',
    description:
      'A compressive tight for track sessions and the warm-down jog. The waist stays put when the pace changes.',
    price: 46000,
    sale_price: 41000,
    category: 'bottoms',
    collection_slug: 'night-training',
    image_urls: [
      stock_photo('photo-1574680096145-d05b474e2155', 1200),
      stock_photo('photo-1518611012118-696072aa579a', 1200),
    ],
    image_alts: [
      'Athlete stretching in fitted training tights',
      'Person in black training tights inside a studio',
    ],
    sizes: apparel_sizes,
    colours: [black],
    stock_quantity: 12,
    stock_status: 'in_stock',
    featured: true,
    bestseller: false,
    created_at: '2025-12-01',
  },
  {
    id: 'vx-ink-track-jacket',
    slug: 'ink-track-jacket',
    name: 'Ink Track Jacket',
    description:
      'A clean track jacket with a short zip and rib that does not balloon. Wear it to the session and on the ride home.',
    price: 124000,
    category: 'outerwear',
    collection_slug: 'night-training',
    image_urls: [
      stock_photo('photo-1556821840-3a63f95609a7', 1200),
      stock_photo('photo-1617137968427-85924c800a22', 1200),
    ],
    image_alts: [
      'Person in a dark hooded track jacket',
      'Tailored dark jacket styled with neutral trousers',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colours: [ink, bone],
    stock_quantity: 7,
    stock_status: 'in_stock',
    featured: true,
    bestseller: true,
    created_at: '2026-01-20',
  },
  {
    id: 'vx-studio-rib-tank',
    slug: 'studio-rib-tank',
    name: 'Studio Rib Tank',
    description:
      'A ribbed tank for floor work and easy layers. The strap stays on the shoulder and the hem is long enough to tuck.',
    price: 18000,
    category: 'tops',
    collection_slug: 'studio-essentials',
    image_urls: [
      stock_photo('photo-1571019614242-c5c5dee9f50b', 1200),
      stock_photo('photo-1518310383802-640c2de311b2', 1200),
    ],
    image_alts: [
      'Athlete training in a fitted tank',
      'Small group training in a bright studio',
    ],
    sizes: short_sizes,
    colours: [bone, black],
    stock_quantity: 22,
    stock_status: 'in_stock',
    featured: false,
    bestseller: false,
    created_at: '2025-10-01',
  },
  {
    id: 'vx-half-zip',
    slug: 'studio-half-zip',
    name: 'Studio Half Zip',
    description:
      'A brushed half zip for the hour before the session. It layers under the shell and does not add a logo.',
    price: 72000,
    category: 'outerwear',
    collection_slug: 'studio-essentials',
    image_urls: [
      stock_photo('photo-1556905055-8f358a7a47b2', 1200),
      stock_photo('photo-1521577352947-9bb58764b69a', 1200),
    ],
    image_alts: [
      'Light grey half-zip sweatshirt on a hanger',
      'Person in a plain light top against a white wall',
    ],
    sizes: apparel_sizes,
    colours: [charcoal, bone],
    stock_quantity: 10,
    stock_status: 'in_stock',
    featured: true,
    bestseller: false,
    created_at: '2025-12-12',
  },
  {
    id: 'vx-court-trainer',
    slug: 'court-trainer',
    name: 'Court Trainer',
    description:
      'A low trainer for easy days, studio work, and the walk between. Cushioned enough for a short run, quiet enough for the street.',
    price: 135000,
    category: 'footwear',
    collection_slug: 'studio-essentials',
    image_urls: [
      stock_photo('photo-1514989940723-e8e51635b782', 1200),
      stock_photo('photo-1608231387042-66d1773070a5', 1200),
    ],
    image_alts: [
      'Pair of clean low-top trainers on a light floor',
      'Pair of everyday trainers on a light background',
    ],
    sizes: shoe_sizes,
    colours: [bone, black],
    stock_quantity: 9,
    stock_status: 'in_stock',
    featured: true,
    bestseller: true,
    created_at: '2026-02-14',
  },
  {
    id: 'vx-recovery-crew',
    slug: 'recovery-crew',
    name: 'Recovery Crew',
    description:
      'A heavier crew for the cool-down and the rest day. The neck is low, the cuff is tight, and the cloth is soft after a wash.',
    price: 36000,
    category: 'tops',
    collection_slug: 'recovery',
    image_urls: [
      stock_photo('photo-1576566588028-4147f3842f27', 1200),
      stock_photo('photo-1620799140408-edc6dcb6d633', 1200),
    ],
    image_alts: [
      'Stack of folded crewneck shirts',
      'Plain white tee laid flat',
    ],
    sizes: apparel_sizes,
    colours: [sage, bone],
    stock_quantity: 15,
    stock_status: 'in_stock',
    featured: false,
    bestseller: false,
    created_at: '2026-03-01',
  },
  {
    id: 'vx-recovery-knit',
    slug: 'recovery-knit-pant',
    name: 'Recovery Knit Pant',
    description:
      'A straight knit pant for the walk home and the day after a long run. Side pockets, no flare, no hardware noise.',
    price: 54000,
    category: 'bottoms',
    collection_slug: 'recovery',
    image_urls: [
      stock_photo('photo-1503342217505-b0a15ec3261c', 1200),
      stock_photo('photo-1487222477894-8943e31ef7b2', 1200),
    ],
    image_alts: [
      'Person in a white tee and relaxed dark trousers',
      'Seated figure in neutral knit trousers',
    ],
    sizes: apparel_sizes,
    colours: [sage, charcoal],
    stock_quantity: 11,
    stock_status: 'in_stock',
    featured: true,
    bestseller: false,
    created_at: '2026-02-20',
  },
  {
    id: 'vx-club-cap',
    slug: 'club-cap',
    name: 'Club Cap',
    description:
      'An unstructured cap with a short brim for early sun and late glare. The cloth is washed so it does not look new on purpose.',
    price: 15000,
    sale_price: 12000,
    category: 'accessories',
    collection_slug: 'city-run',
    image_urls: [
      stock_photo('photo-1588850561407-ed78c282e89b', 1200),
      stock_photo('photo-1521369909029-2afed882baee', 1200),
    ],
    image_alts: [
      'Black unstructured cap on a plain background',
      'Row of simple caps on a shelf',
    ],
    sizes: ['One size'],
    colours: [black, bone],
    stock_quantity: 28,
    stock_status: 'in_stock',
    featured: false,
    bestseller: false,
    created_at: '2025-09-01',
  },
  {
    id: 'vx-session-duffel',
    slug: 'session-duffel',
    name: 'Session Duffel',
    description:
      'A 32-litre duffel for shoes, a shell, and the long way home. One main compartment, a shoe pocket, and webbing that does not twist.',
    price: 68000,
    category: 'accessories',
    collection_slug: 'studio-essentials',
    image_urls: [
      stock_photo('photo-1553062407-98eeb64c6a62', 1200),
      stock_photo('photo-1547949003-9792a18a2601', 1200),
    ],
    image_alts: [
      'Black duffel bag standing on a wood floor',
      'Leather and canvas holdall on a bench',
    ],
    sizes: ['One size'],
    colours: [black],
    stock_quantity: 4,
    stock_status: 'low_stock',
    featured: false,
    bestseller: true,
    created_at: '2026-01-08',
  },
  {
    id: 'vx-form-bra',
    slug: 'form-studio-bra',
    name: 'Form Studio Bra',
    description:
      'A medium-support bra for studio work and easy runs. This demo piece is currently unavailable so the sold-out state can be reviewed.',
    price: 24000,
    category: 'tops',
    collection_slug: 'studio-essentials',
    image_urls: [
      stock_photo('photo-1518459031867-a89b944bffe4', 1200),
      stock_photo('photo-1594381898411-846e7d193883', 1200),
    ],
    image_alts: [
      'Training class in fitted tops',
      'Athlete in a dark training top',
    ],
    sizes: short_sizes,
    colours: [black, bone],
    stock_quantity: 0,
    stock_status: 'out_of_stock',
    featured: false,
    bestseller: false,
    created_at: '2025-08-15',
  },
];

/**
 * Finds a product by its route slug.
 *
 * @param slug - Product slug from the URL.
 * @returns The matching product, or undefined.
 */
export function get_product_by_slug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Finds a product by its stable id.
 *
 * @param product_id - Catalogue id stored on a cart line.
 * @returns The matching product, or undefined.
 */
export function get_product_by_id(product_id: string): Product | undefined {
  return products.find((product) => product.id === product_id);
}
