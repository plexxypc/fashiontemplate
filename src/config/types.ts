/**
 * Store configuration types.
 * A client edits `client_settings` in `store.ts`; components read the resolved store.
 */

/** Wordmark or image logo. Leave `image_path` empty to use the text wordmark. */
export type LogoConfig = {
  text: string;
  image_path: string;
  alt: string;
};

/** Colours written to CSS variables at startup. */
export type BrandColours = {
  background: string;
  surface: string;
  ink: string;
  charcoal: string;
  muted: string;
  line: string;
  accent: string;
  accent_contrast: string;
  signal: string;
  danger: string;
};

/** Fonts and tracking. `google_fonts_href` is optional if you use system fonts. */
export type TypographyConfig = {
  display_font_family: string;
  body_font_family: string;
  google_fonts_href: string;
  headline_letter_spacing: string;
  label_letter_spacing: string;
};

/** Currency passed to `Intl.NumberFormat`. */
export type CurrencyConfig = {
  code: string;
  locale: string;
};

/** Header or footer link. Children render as a submenu. */
export type NavItem = {
  label: string;
  path: string;
  children?: NavItem[];
};

/** One configurable delivery method and its naira cost. */
export type DeliveryOption = {
  id: string;
  label: string;
  cost: number;
  estimate: string;
  description: string;
};

/** Social profile. Use a full https URL. */
export type SocialLink = {
  label: string;
  url: string;
};

/** Display-only bank transfer details. Do not put secrets here. */
export type BankTransferConfig = {
  enabled: boolean;
  bank_name: string;
  account_name: string;
  account_number: string;
  instructions: string;
};

/**
 * Paystack placeholder.
 * `public_key` may be set later. Never put a secret key in this file.
 */
export type PaystackConfig = {
  enabled: boolean;
  public_key: string;
  disabled_message: string;
};

/** Payment choices exposed by checkout. */
export type PaymentConfig = {
  whatsapp_enabled: boolean;
  bank_transfer: BankTransferConfig;
  paystack: PaystackConfig;
};

/** Homepage hero copy and photograph. */
export type HeroContent = {
  kicker: string;
  headline: string;
  supporting_text: string;
  cta_label: string;
  cta_path: string;
  secondary_cta_label: string;
  secondary_cta_path: string;
  image_url: string;
  image_alt: string;
};

/** One asymmetric campaign block on the homepage. */
export type CampaignContent = {
  kicker: string;
  title: string;
  text: string;
  cta_label: string;
  cta_path: string;
  image_url: string;
  image_alt: string;
  layout: 'image_start' | 'image_end';
};

/** Dark promotional band. */
export type PromoContent = {
  kicker: string;
  title: string;
  text: string;
  cta_label: string;
  cta_path: string;
};

/** Brand story block. */
export type StoryContent = {
  kicker: string;
  title: string;
  paragraphs: string[];
  cta_label: string;
  cta_path: string;
  image_url: string;
  image_alt: string;
};

/** Policy copy rendered on the about page and summarized in the footer. */
export type PolicyContent = {
  returns: string;
  delivery: string;
  privacy: string;
};

/** Full resolved configuration used by the UI. */
export type StoreConfig = {
  store_name: string;
  tagline: string;
  logo: LogoConfig;
  brand_colours: BrandColours;
  typography: TypographyConfig;
  layout: {
    content_max_width: string;
  };
  currency: CurrencyConfig;
  contact: {
    email: string;
    phone_display: string;
    phone_tel: string;
    whatsapp_number: string;
    whatsapp_default_message: string;
  };
  address: {
    line_1: string;
    line_2: string;
    city: string;
    country: string;
  };
  hours: string;
  social_links: SocialLink[];
  announcement: {
    text: string;
    link_label: string;
    link_path: string;
  };
  homepage: {
    hero: HeroContent;
    campaigns: CampaignContent[];
    promo: PromoContent;
    brand_story: StoryContent;
    newsletter_title: string;
    newsletter_text: string;
  };
  navigation: NavItem[];
  footer_navigation: NavItem[];
  delivery_options: DeliveryOption[];
  policies: PolicyContent;
  payment: PaymentConfig;
  seo: {
    title_suffix: string;
    default_title: string;
    default_description: string;
    og_image: string;
  };
};

/** Nested partial used when optional settings are omitted. */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};
