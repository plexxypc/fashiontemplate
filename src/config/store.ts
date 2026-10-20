import { stock_photo } from '../data/image.ts';
import type {
  BrandColours,
  DeepPartial,
  DeliveryOption,
  NavItem,
  StoreConfig,
  TypographyConfig,
} from './types.ts';

/**
 * VELOX store configuration.
 * Edit `client_settings` to rebrand. Components read the resolved `store` export.
 * Empty optional values fall back to the defaults inside `resolve_store_config`.
 */

const default_colours: BrandColours = {
  background: '#f3f0ea',
  surface: '#fffcf8',
  ink: '#121212',
  charcoal: '#242424',
  muted: '#6d675f',
  line: '#e3ddd4',
  accent: '#121212',
  accent_contrast: '#f3f0ea',
  signal: '#e4ff4a',
  danger: '#8c2f2f',
};

const default_type: TypographyConfig = {
  display_font_family: '"Oswald", "Arial Narrow", sans-serif',
  body_font_family: '"Manrope", "Segoe UI", sans-serif',
  google_fonts_href:
    'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap',
  headline_letter_spacing: '-0.035em',
  label_letter_spacing: '0.16em',
};

const default_navigation: NavItem[] = [
  { label: 'Shop', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const default_delivery: DeliveryOption[] = [
  {
    id: 'standard',
    label: 'Standard delivery',
    cost: 5000,
    estimate: '3–5 working days',
    description: 'Delivery across Nigeria.',
  },
];

/**
 * Client-facing settings. Change names, colours, prices for delivery, and contact details here.
 */
export const client_settings: DeepPartial<StoreConfig> = {
  store_name: 'VELOX',
  tagline: 'Training clothes for heat, night, and the long mile.',
  logo: {
    text: 'VELOX',
    image_path: '',
    alt: 'VELOX',
  },
  brand_colours: default_colours,
  typography: default_type,
  layout: {
    content_max_width: '1320px',
  },
  currency: {
    code: 'NGN',
    locale: 'en-NG',
  },
  contact: {
    email: 'studio@velox.example',
    phone_display: '+234 801 234 5678',
    phone_tel: '+2348012345678',
    whatsapp_number: '2348012345678',
    whatsapp_default_message: 'Hello VELOX, I would like to ask about a piece.',
  },
  address: {
    line_1: '14 Admiralty Way',
    line_2: 'Victoria Island',
    city: 'Lagos',
    country: 'Nigeria',
  },
  hours: 'Monday–Saturday, 10:00–18:00 WAT',
  social_links: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'TikTok', url: 'https://www.tiktok.com/' },
    { label: 'Pinterest', url: 'https://www.pinterest.com/' },
  ],
  announcement: {
    text: 'Night Training is live — pieces cut for heat and late miles.',
    link_label: 'Shop the edit',
    link_path: '/collections/night-training',
  },
  homepage: {
    hero: {
      kicker: 'City run / 01',
      headline: 'Form for\nthe long mile',
      supporting_text:
        'VELOX is a Lagos sportswear studio. Light cloth, quiet hardware, and cuts that stay put when the pace does not.',
      cta_label: 'Shop the edit',
      cta_path: '/collections/city-run',
      secondary_cta_label: 'All pieces',
      secondary_cta_path: '/shop',
      image_url: stock_photo('photo-1518611012118-696072aa579a', 2000),
      image_alt: 'Athlete in fitted training clothes in a bright studio',
    },
    campaigns: [
      {
        kicker: 'Campaign 01',
        title: 'After dark intervals',
        text: 'A night edit in ink, black, and one signal colour. Built for floodlit tracks and quiet streets.',
        cta_label: 'Shop night training',
        cta_path: '/collections/night-training',
        image_url: stock_photo('photo-1534438327276-14e5300c3a48', 1600),
        image_alt: 'Dim gym interior with a runner preparing for intervals',
        layout: 'image_start',
      },
      {
        kicker: 'Campaign 02',
        title: 'Studio light',
        text: 'Rib, fleece, and shells for the hour before the session. Less logo, more cloth.',
        cta_label: 'Shop studio essentials',
        cta_path: '/collections/studio-essentials',
        image_url: stock_photo('photo-1518611012118-696072aa579a', 1600),
        image_alt: 'Athlete in fitted training clothes standing in studio light',
        layout: 'image_end',
      },
    ],
    promo: {
      kicker: 'The edit',
      title: 'Recovery, cut slow',
      text: 'Knit pants and crew sweats for the walk home. Same studio, quieter cloth.',
      cta_label: 'Shop recovery',
      cta_path: '/collections/recovery',
    },
    brand_story: {
      kicker: 'The studio',
      title: 'Designed in Lagos. Worn until the session ends.',
      paragraphs: [
        'VELOX started as a small run club wardrobe: tees that did not cling in humidity, shorts that did not twist, and a shell that could take a sudden rain on the Third Mainland.',
        'We still sample in Lagos, sell in naira, and keep the line short. Every piece in this template is fictional demo product data you can replace.',
      ],
      cta_label: 'Read the studio note',
      cta_path: '/about',
      image_url: stock_photo('photo-1441984904996-e0b6ba687e04', 1600),
      image_alt: 'Quiet clothing studio with rails of neutral garments',
    },
    newsletter_title: 'Studio notes',
    newsletter_text: 'New edits and restocks. This form is a demo — nothing is emailed.',
  },
  navigation: [
    {
      label: 'Shop',
      path: '/shop',
      children: [
        { label: 'All pieces', path: '/shop' },
        { label: 'Tops', path: '/shop?category=tops' },
        { label: 'Bottoms', path: '/shop?category=bottoms' },
        { label: 'Outerwear', path: '/shop?category=outerwear' },
        { label: 'Footwear', path: '/shop?category=footwear' },
        { label: 'Accessories', path: '/shop?category=accessories' },
      ],
    },
    {
      label: 'Collections',
      path: '/collections/city-run',
      children: [
        { label: 'City Run', path: '/collections/city-run' },
        { label: 'Night Training', path: '/collections/night-training' },
        { label: 'Studio Essentials', path: '/collections/studio-essentials' },
        { label: 'Recovery', path: '/collections/recovery' },
      ],
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  footer_navigation: [
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Cart', path: '/cart' },
    { label: 'Delivery', path: '/about#delivery' },
    { label: 'Returns', path: '/about#returns' },
    { label: 'Privacy', path: '/about#privacy' },
  ],
  delivery_options: [
    {
      id: 'lagos',
      label: 'Lagos dispatch',
      cost: 3500,
      estimate: '1–2 working days',
      description: 'Bike and van dispatch across Lagos.',
    },
    {
      id: 'nationwide',
      label: 'Nationwide courier',
      cost: 7500,
      estimate: '3–5 working days',
      description: 'Delivery outside Lagos.',
    },
    {
      id: 'pickup',
      label: 'Studio pickup',
      cost: 0,
      estimate: 'Same day when in stock',
      description: 'Collect from the Victoria Island studio.',
    },
  ],
  policies: {
    returns:
      'Unworn pieces with tags can be returned within 14 days of delivery. Swim, underwear, and pierced earrings are final sale when you add those categories. This is sample policy text — replace it with your own terms before selling.',
    delivery:
      'Delivery costs are the amounts set under delivery options in the store config. Lagos dispatch, nationwide courier, and studio pickup are examples. Transit times are estimates, not guarantees.',
    privacy:
      'This demo stores the cart in localStorage on the shopper’s device and keeps the latest order request in sessionStorage for the confirmation page. It does not send personal data to a server. Replace this note with a real privacy policy before you collect customer information in production.',
  },
  payment: {
    whatsapp_enabled: true,
    bank_transfer: {
      enabled: true,
      bank_name: 'Demo Bank',
      account_name: 'VELOX Studio (replace with your account name)',
      account_number: '0123456789',
      instructions:
        'Transfer the order total and use the demo reference as narration. These are sample instructions for the store owner to replace. This template does not see or confirm the transfer.',
    },
    paystack: {
      enabled: false,
      public_key: '',
      disabled_message:
        'Real online payment is not enabled until a merchant payment account and secure server-side verification are configured. This template never collects card numbers.',
    },
  },
  seo: {
    title_suffix: 'VELOX',
    default_title: 'VELOX — Premium sportswear, Lagos',
    default_description:
      'VELOX is a fictional Lagos sportswear studio. Shop training tops, shells, tights, and recovery knits. Demo storefront — payments are not live.',
    og_image: stock_photo('photo-1518611012118-696072aa579a', 1600),
  },
};

/**
 * Uses a trimmed string, or the fallback when the value is missing or blank.
 *
 * @param value - Candidate copy from the client config.
 * @param fallback - Sensible default.
 * @returns The usable string.
 */
function text_or(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim() ?? '';
  return trimmed.length > 0 ? trimmed : fallback;
}

/**
 * Keeps only navigation entries that have a label and a path.
 *
 * @param items - Partial navigation from config.
 * @param fallback - Navigation used when nothing valid is provided.
 * @returns Concrete navigation items.
 */
function resolve_navigation(items: DeepPartial<NavItem>[] | undefined, fallback: NavItem[]): NavItem[] {
  if (!items || items.length === 0) {
    return fallback;
  }
  const resolved = items.flatMap((item) => {
    if (!item.label || !item.path) {
      return [];
    }
    const children = item.children?.flatMap((child) => {
      if (!child?.label || !child.path) {
        return [];
      }
      return [{ label: child.label, path: child.path }];
    });
    return [{ label: item.label, path: item.path, children }];
  });
  return resolved.length > 0 ? resolved : fallback;
}

/**
 * Merges client settings with built-in defaults so blank optional fields still launch.
 *
 * @param input - Partial store settings, usually `client_settings`.
 * @returns A complete store configuration.
 */
export function resolve_store_config(input: DeepPartial<StoreConfig> = {}): StoreConfig {
  const colours: BrandColours = { ...default_colours, ...input.brand_colours };
  const typography: TypographyConfig = { ...default_type, ...input.typography };
  const contact = input.contact ?? {};
  const address = input.address ?? {};
  const announcement = input.announcement ?? {};
  const homepage = input.homepage ?? {};
  const hero = homepage.hero ?? {};
  const promo = homepage.promo ?? {};
  const story = homepage.brand_story ?? {};
  const policies = input.policies ?? {};
  const payment = input.payment ?? {};
  const bank = payment.bank_transfer ?? {};
  const paystack = payment.paystack ?? {};
  const seo = input.seo ?? {};
  const logo = input.logo ?? {};
  const store_name = text_or(input.store_name, 'VELOX');

  const fallback_hero = {
    kicker: 'New edit',
    headline: store_name,
    supporting_text: 'Replace the homepage hero in the store config.',
    cta_label: 'Shop',
    cta_path: '/shop',
    secondary_cta_label: 'About',
    secondary_cta_path: '/about',
    image_url: stock_photo('photo-1518611012118-696072aa579a', 2000),
    image_alt: `${store_name} campaign photograph`,
  };

  return {
    store_name,
    tagline: text_or(input.tagline, 'Training clothes for the long mile.'),
    logo: {
      text: text_or(logo.text, store_name),
      image_path: logo.image_path ?? '',
      alt: text_or(logo.alt, store_name),
    },
    brand_colours: colours,
    typography,
    layout: {
      content_max_width: text_or(input.layout?.content_max_width, '1320px'),
    },
    currency: {
      code: text_or(input.currency?.code, 'NGN'),
      locale: text_or(input.currency?.locale, 'en-NG'),
    },
    contact: {
      email: text_or(contact.email, 'studio@example.com'),
      phone_display: text_or(contact.phone_display, '+234 800 000 0000'),
      phone_tel: text_or(contact.phone_tel, '+2348000000000'),
      whatsapp_number: text_or(contact.whatsapp_number, '2348000000000'),
      whatsapp_default_message: text_or(contact.whatsapp_default_message, `Hello ${store_name}`),
    },
    address: {
      line_1: text_or(address.line_1, 'Studio address'),
      line_2: address.line_2 ?? '',
      city: text_or(address.city, 'Lagos'),
      country: text_or(address.country, 'Nigeria'),
    },
    hours: text_or(input.hours, 'Monday–Saturday, 10:00–18:00'),
    social_links: (input.social_links ?? []).flatMap((link) => {
      if (!link?.label || !link.url) {
        return [];
      }
      return [{ label: link.label, url: link.url }];
    }),
    announcement: {
      text: announcement.text ?? '',
      link_label: announcement.link_label ?? '',
      link_path: announcement.link_path ?? '',
    },
    homepage: {
      hero: {
        kicker: text_or(hero.kicker, fallback_hero.kicker),
        headline: text_or(hero.headline, fallback_hero.headline),
        supporting_text: text_or(hero.supporting_text, fallback_hero.supporting_text),
        cta_label: text_or(hero.cta_label, fallback_hero.cta_label),
        cta_path: text_or(hero.cta_path, fallback_hero.cta_path),
        secondary_cta_label: text_or(hero.secondary_cta_label, fallback_hero.secondary_cta_label),
        secondary_cta_path: text_or(hero.secondary_cta_path, fallback_hero.secondary_cta_path),
        image_url: text_or(hero.image_url, fallback_hero.image_url),
        image_alt: text_or(hero.image_alt, fallback_hero.image_alt),
      },
      campaigns: (homepage.campaigns ?? []).flatMap((campaign) => {
        if (!campaign?.title || !campaign.image_url || !campaign.cta_path) {
          return [];
        }
        return [{
          kicker: campaign.kicker ?? '',
          title: campaign.title,
          text: campaign.text ?? '',
          cta_label: campaign.cta_label ?? 'Shop',
          cta_path: campaign.cta_path,
          image_url: campaign.image_url,
          image_alt: campaign.image_alt ?? campaign.title,
          layout: campaign.layout === 'image_end' ? 'image_end' : 'image_start',
        }];
      }),
      promo: {
        kicker: text_or(promo.kicker, 'Now'),
        title: text_or(promo.title, 'Shop the latest edit'),
        text: promo.text ?? '',
        cta_label: text_or(promo.cta_label, 'Shop'),
        cta_path: text_or(promo.cta_path, '/shop'),
      },
      brand_story: {
        kicker: text_or(story.kicker, 'About'),
        title: text_or(story.title, store_name),
        paragraphs: (story.paragraphs ?? []).filter((paragraph): paragraph is string => Boolean(paragraph)),
        cta_label: text_or(story.cta_label, 'About'),
        cta_path: text_or(story.cta_path, '/about'),
        image_url: text_or(story.image_url, stock_photo('photo-1441984904996-e0b6ba687e04', 1600)),
        image_alt: text_or(story.image_alt, `${store_name} studio`),
      },
      newsletter_title: text_or(homepage.newsletter_title, 'Notes'),
      newsletter_text: homepage.newsletter_text ?? 'Demo signup. No email is sent.',
    },
    navigation: resolve_navigation(input.navigation, default_navigation),
    footer_navigation: resolve_navigation(input.footer_navigation, default_navigation),
    delivery_options: (() => {
      const source = input.delivery_options ?? default_delivery;
      const resolved = source.flatMap((option) => {
        if (!option?.id || !option.label || option.cost === undefined || !Number.isFinite(option.cost) || option.cost < 0) {
          return [];
        }
        return [{
          id: option.id,
          label: option.label,
          cost: option.cost,
          estimate: option.estimate ?? '',
          description: option.description ?? '',
        }];
      });
      return resolved.length > 0 ? resolved : default_delivery;
    })(),
    policies: {
      returns: text_or(policies.returns, 'Replace the returns policy in the store config.'),
      delivery: text_or(policies.delivery, 'Replace the delivery policy in the store config.'),
      privacy: text_or(policies.privacy, 'Replace the privacy note in the store config.'),
    },
    payment: {
      whatsapp_enabled: payment.whatsapp_enabled ?? true,
      bank_transfer: {
        enabled: bank.enabled ?? false,
        bank_name: text_or(bank.bank_name, 'Your bank'),
        account_name: text_or(bank.account_name, 'Your account name'),
        account_number: text_or(bank.account_number, '0000000000'),
        instructions: text_or(bank.instructions, 'Replace the bank transfer instructions in the store config.'),
      },
      paystack: {
        enabled: paystack.enabled ?? false,
        public_key: paystack.public_key ?? '',
        disabled_message: text_or(
          paystack.disabled_message,
          'Real online payment is not enabled until a merchant payment account and secure server-side verification are configured.',
        ),
      },
    },
    seo: {
      title_suffix: text_or(seo.title_suffix, store_name),
      default_title: text_or(seo.default_title, store_name),
      default_description: text_or(seo.default_description, input.tagline ?? store_name),
      og_image: text_or(seo.og_image, stock_photo('photo-1518611012118-696072aa579a', 1600)),
    },
  };
}

/** Resolved configuration. Import this from components and pages. */
export const store: StoreConfig = resolve_store_config(client_settings);
