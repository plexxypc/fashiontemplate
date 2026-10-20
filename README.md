# VELOX storefront template

Premium editorial sportswear storefront for a fictional brand, VELOX. It is a static React + Vite + TypeScript app with Bootstrap 5 and custom CSS. There is no backend. Cart data stays in the browser. Checkout creates a **demo order request**, not a paid order.

Do not copy a real brand’s logos or identity onto this template. The photographs are Unsplash placeholders.

## Run it

From this folder, in PowerShell:

```powershell
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. If that port is busy, it uses the next free port.

Production build:

```powershell
npm run build
npm run preview
```

The build output is the `dist` folder.

## Change the brand in `src/config/store.ts`

Edit `client_settings`. The app reads the resolved `store` export. If you leave an optional field blank, `resolve_store_config` fills a sensible default.

Colours and fonts are copied onto CSS variables when the app loads (`src/config/apply_theme.ts`). Changing them in `store.ts` changes the look after a refresh.

| Setting | What to change |
| --- | --- |
| `store_name`, `tagline` | Brand name and one-line description |
| `logo.text` | Wordmark. Leave `logo.image_path` empty to keep the text logo |
| `logo.image_path` | Path such as `/logo.svg` in `public`, or a full image URL. Also set `logo.alt` |
| `brand_colours` | Background, ink, charcoal, muted, line, accent, accent contrast, signal, danger |
| `typography` | Display font, body font, Google Fonts stylesheet URL, headline and label letter spacing |
| `layout.content_max_width` | Page width, for example `1320px` |
| `currency` | `code: 'NGN'` and `locale: 'en-NG'`. Prices are whole naira, not kobo |
| `contact.email` | Public studio email |
| `contact.phone_display` | Phone number as you want it printed |
| `contact.phone_tel` | Same number in a `tel:` link, such as `+2348012345678` |
| `contact.whatsapp_number` | Digits with country code, no `+`, such as `2348012345678` |
| `contact.whatsapp_default_message` | Message used by the general WhatsApp button |
| `address`, `hours` | Studio address and opening hours |
| `social_links` | Full `https://` URLs and labels |
| `announcement` | Bar above the header. Clear `text` to hide it |
| `homepage.hero` | Headline, supporting text, buttons, and hero image |
| `homepage.campaigns` | Editorial image blocks. `layout` is `image_start` or `image_end` |
| `homepage.promo` | Dark banner |
| `homepage.brand_story` | Story title, paragraphs, and image |
| `homepage.newsletter_title`, `newsletter_text` | Newsletter heading and the demo disclaimer |
| `navigation` | Header links. `children` become a submenu |
| `footer_navigation` | Footer links. Point policy links at `/about#delivery`, `/about#returns`, and `/about#privacy` |
| `delivery_options` | `id`, `label`, `cost` in naira, `estimate`, `description` |
| `policies` | Returns, delivery, and privacy copy on the about page |
| `payment.whatsapp_enabled` | `true` shows WhatsApp enquiry and checkout follow-up |
| `payment.bank_transfer` | Sample bank instructions. Replace the bank name, account name, and number before any real use |
| `payment.paystack` | Leave `enabled` false and `public_key` empty until a server exists. Never put a secret key here |
| `seo` | Default title, description, title suffix, and social share image |

## Replace the demo products

Product copy lives in `src/data/products.ts`. Collections live in `src/data/collections.ts`.

Each product needs a unique `id` and `slug`. Set:

- `name`, `description`
- `price` in whole naira, and optional `sale_price` when it is lower than `price`
- `category` (`tops`, `bottoms`, `outerwear`, `footwear`, `accessories`, or your own slug)
- `collection_slug` matching a collection
- `image_urls` and `image_alts` (same length)
- `sizes` (empty array if there is no size choice)
- `colours` as `{ name, hex }` (empty array if there is no colour choice)
- `stock_quantity` (`0` is sold out, `1`–`5` is low stock)
- `featured`, `bestseller`
- `created_at` as `YYYY-MM-DD` (used by “Newest”)

Set `stock_status` to `in_stock`, `low_stock`, or `out_of_stock`. Use `out_of_stock` when `stock_quantity` is `0`. The add-to-cart control stays disabled for sold-out pieces.

## Replace the images

Demo photos use fixed Unsplash photo ids through `stock_photo` in `src/data/image.ts`. The URL always points at the same photograph.

To use your own files:

1. Put images in `public/images`.
2. Replace a URL with a root path such as `/images/apex-tee.jpg`.

You can also paste a full `https://` URL. Avoid random image services that change the picture on each refresh.

Hero, campaign, collection, and story images are set in `store.ts` and `collections.ts` the same way. Give every image a description in the matching alt field.

Recommended product frames are portrait, about 4:5.

## WhatsApp ordering

1. Set `payment.whatsapp_enabled` to `true`.
2. Set `contact.whatsapp_number` to the studio WhatsApp number with country code and no plus sign.
3. Product pages and the footer open `https://wa.me/...` with a prepared message.
4. Checkout can build an order summary link. Opening the link is left to the shopper. This app never sends the WhatsApp message itself.

Set `payment.whatsapp_enabled` to `false` to hide those buttons and the WhatsApp follow-up option.

## Delivery and bank transfer

Delivery prices are `delivery_options[].cost`. Checkout adds the selected cost to the merchandise subtotal. Pickup can be `0`.

Bank transfer is display only:

- `payment.bank_transfer.enabled`
- `bank_name`
- `account_name`
- `account_number`
- `instructions`

The confirmation page repeats those instructions and asks the shopper to use the demo reference as narration. The template cannot see or confirm a transfer. The account number in the demo is a placeholder. Replace it, and do not commit real credentials you are not willing to show on a public page.

## Deploy the static build

```powershell
npm run build
```

Upload the contents of `dist` to any static host. React Router uses normal paths (`/product/meridian-run-tee`), so the host must serve `index.html` for unknown paths. `public/_redirects` is included for Netlify (`/* /index.html 200`).

On other hosts, add a single-page-app fallback to `index.html`. Do not fall back the asset folder (`/assets/*`).

## Future Paystack integration

Online card payment is **not** enabled. The checkout copy says so. `src/payments/paystack.ts` always returns `ok: false`. It does not call Paystack and it does not mark anything paid.

What you still have to build, outside this template:

1. A server you control.
2. `POST` the order to that server. The browser must never send card numbers to you.
3. The server calls Paystack **Initialize** with the **secret key** and the exact amount.
4. Paystack returns an authorization URL. Send that URL to the browser and redirect the shopper to Paystack’s hosted page.
5. Paystack calls your webhook. The server verifies the transaction with the secret key (verify endpoint or a checked webhook signature).
6. Only after that verification may you store the order as paid.

The **public key** is the only Paystack key that may later be exposed to the browser, and only if a future client integration needs it. Never put the secret key in `store.ts`, in a `VITE_` environment variable, or anywhere in this frontend.

This template does not collect card details.

## Routes

- `/` home
- `/shop` catalogue
- `/collections/:slug` collection
- `/product/:slug` product
- `/cart` cart
- `/checkout` demo checkout
- `/order-success` demo confirmation (only after a valid checkout in this tab)
- `/about` story and policies
- `/contact` contact form (demo only)
- any other path: custom 404

## Known limitations

- No accounts, inventory server, or order database. The cart is in `localStorage` (`velox_cart_v1`). The last demo order is in `sessionStorage` for this tab only.
- Newsletter and contact forms do not send email. They show a demo confirmation.
- Refreshing `/order-success` in the same tab still shows the request. A new tab does not.
- Prices are whole naira via `Intl.NumberFormat`.
- Search, filters, and stock checks run in the browser against the local catalogue.
- SEO tags are set on the client. A static host will not serve unique HTML for each product until you add prerendering.
- Unsplash images need a network connection.
- Paystack, card payments, and automatic bank-transfer confirmation are not implemented.
