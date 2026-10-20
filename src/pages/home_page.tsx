import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CollectionCard } from '../components/collection_card.tsx';
import { EditorialImageSection } from '../components/editorial_image_section.tsx';
import { HeroSection } from '../components/hero_section.tsx';
import { ProductGrid } from '../components/product_grid.tsx';
import { Seo } from '../components/seo.tsx';
import { store } from '../config/store.ts';
import { collections } from '../data/collections.ts';
import { get_featured_products, get_new_arrivals } from '../lib/catalog.ts';
import { build_store_json_ld } from '../lib/structured_data.ts';

/**
 * Editorial homepage: hero, campaigns, collections, products, story, and promo.
 *
 * @returns The homepage.
 */
export function HomePage(): ReactElement {
  const featured_collections = collections.filter((collection) => collection.featured);
  const featured_products = get_featured_products(4);
  const arrivals = get_new_arrivals(4);

  return (
    <>
      <Seo
        title={store.seo.default_title}
        description={store.seo.default_description}
        path="/"
        image_url={store.homepage.hero.image_url}
        json_ld={build_store_json_ld()}
      />
      <HeroSection hero={store.homepage.hero} />
      <ul className="vx_word_row" aria-label="Collections">
        {collections.map((collection) => (
          <li key={collection.slug}>
            <Link to={`/collections/${collection.slug}`}>{collection.name}</Link>
          </li>
        ))}
      </ul>
      <div className="vx_shell vx_campaign_stack">
        {store.homepage.campaigns.map((campaign) => (
          <EditorialImageSection key={campaign.title} campaign={campaign} />
        ))}
      </div>
      <section className="vx_section vx_shell" aria-labelledby="collections-title">
        <div className="vx_section_head">
          <p className="vx_kicker">02 — Collections</p>
          <h2 id="collections-title">The collections</h2>
        </div>
        <div className="vx_collections">
          {featured_collections.map((collection, index) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
              index_label={String(index + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </section>
      <section className="vx_section vx_shell" aria-labelledby="featured-title">
        <div className="vx_section_head">
          <p className="vx_kicker">03 — Featured</p>
          <h2 id="featured-title">Pieces we keep sampling</h2>
          <Link className="vx_text_link" to="/shop?sort=featured">Shop featured</Link>
        </div>
        <ProductGrid products={featured_products} />
      </section>
      <section className="vx_section vx_shell" aria-labelledby="arrivals-title">
        <div className="vx_section_head">
          <p className="vx_kicker">04 — New arrivals</p>
          <h2 id="arrivals-title">Just in the studio</h2>
          <Link className="vx_text_link" to="/shop?sort=newest">Shop newest</Link>
        </div>
        <ProductGrid products={arrivals} />
      </section>
      <section className="vx_promo" aria-labelledby="promo-title">
        <div className="vx_shell">
          <p className="vx_kicker">{store.homepage.promo.kicker}</p>
          <h2 id="promo-title">{store.homepage.promo.title}</h2>
          <p>{store.homepage.promo.text}</p>
          <Link className="vx_btn" to={store.homepage.promo.cta_path}>{store.homepage.promo.cta_label}</Link>
        </div>
      </section>
      <section className="vx_story vx_shell" aria-labelledby="story-title">
        <div>
          <p className="vx_kicker">{store.homepage.brand_story.kicker}</p>
          <h2 id="story-title">{store.homepage.brand_story.title}</h2>
          {store.homepage.brand_story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="vx_text_link" to={store.homepage.brand_story.cta_path}>
            {store.homepage.brand_story.cta_label}
          </Link>
        </div>
        <img
          src={store.homepage.brand_story.image_url}
          alt={store.homepage.brand_story.image_alt}
          width={1200}
          height={1500}
          loading="lazy"
        />
      </section>
    </>
  );
}
