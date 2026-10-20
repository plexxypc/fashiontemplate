import { useState } from 'react';
import type { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AddToCartButton } from '../components/add_to_cart_button.tsx';
import { ProductGallery } from '../components/product_gallery.tsx';
import { ProductGrid } from '../components/product_grid.tsx';
import { QuantitySelector } from '../components/quantity_selector.tsx';
import { Seo } from '../components/seo.tsx';
import { WhatsAppButton } from '../components/whatsapp_button.tsx';
import { store } from '../config/store.ts';
import { get_collection_by_slug } from '../data/collections.ts';
import { get_product_by_slug } from '../data/products.ts';
import { get_related_products, get_unit_price, label_category, stock_label } from '../lib/catalog.ts';
import { format_money } from '../lib/format_money.ts';
import { page_title } from '../lib/page_meta.ts';
import { build_product_json_ld } from '../lib/structured_data.ts';
import type { Product } from '../types/catalog.ts';

/**
 * Product detail route. Unknown slugs explain that the piece is missing.
 *
 * @returns The product page.
 */
export function ProductPage(): ReactElement {
  const { slug = '' } = useParams();
  const product = get_product_by_slug(slug);
  if (!product) {
    return (
      <section className="vx_shell vx_not_found">
        <Seo title={page_title('Piece not found')} description="That product is not in the catalogue." path={`/product/${slug}`} />
        <p className="vx_kicker">Product</p>
        <h1>This piece has left the edit.</h1>
        <Link className="vx_btn" to="/shop">Back to the shop</Link>
      </section>
    );
  }
  return <ProductDetail key={product.id} product={product} />;
}

/**
 * Detail layout for one product, including variant selection.
 *
 * @param props - Product resolved by the route.
 * @returns The product detail.
 */
function ProductDetail(props: { product: Product }): ReactElement {
  const product = props.product;
  const [size, set_size] = useState(product.sizes[0] ?? '');
  const [colour, set_colour] = useState(product.colours[0]?.name ?? '');
  const [quantity, set_quantity] = useState(1);
  const price = get_unit_price(product);
  const on_sale = price < product.price;
  const collection = get_collection_by_slug(product.collection_slug);
  const related = get_related_products(product, 4);
  const max_quantity = Math.max(product.stock_quantity, 1);
  const enquiry = `Hello ${store.store_name}, I am asking about the ${product.name}${size ? `, size ${size}` : ''}${colour ? `, colour ${colour}` : ''}.`;

  return (
    <>
      <Seo
        title={page_title(product.name)}
        description={product.description}
        path={`/product/${product.slug}`}
        image_url={product.image_urls[0]}
        og_type="product"
        json_ld={build_product_json_ld(product)}
      />
      <article className="vx_shell vx_detail">
        <p className="vx_crumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link to="/shop">Shop</Link>
          <span aria-hidden="true"> / </span>
          <span>{product.name}</span>
        </p>
        <div className="vx_detail_grid">
          <ProductGallery
            key={product.id}
            image_urls={product.image_urls}
            image_alts={product.image_alts}
            product_name={product.name}
          />
          <div className="vx_detail_copy">
            <p className="vx_kicker">{label_category(product.category)}</p>
            <h1>{product.name}</h1>
            <p className="vx_price vx_price_large">
              <span>{format_money(price)}</span>
              {on_sale ? <s className="vx_price_was">{format_money(product.price)}</s> : null}
            </p>
            <p>{product.description}</p>
            <p className={product.stock_status === 'out_of_stock' ? 'vx_status is_out' : 'vx_status'}>
              {stock_label(product)}
            </p>
            {collection ? (
              <p><Link className="vx_text_link" to={`/collections/${collection.slug}`}>{collection.name}</Link></p>
            ) : null}
            {product.sizes.length > 0 ? (
              <div className="vx_option_group" role="group" aria-label="Size">
                <p>Size</p>
                <div className="vx_sizes">
                  {product.sizes.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={size === option ? 'is_selected' : ''}
                      aria-pressed={size === option}
                      onClick={() => set_size(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            {product.colours.length > 0 ? (
              <div className="vx_option_group" role="group" aria-label="Colour">
                <p>Colour</p>
                <div className="vx_swatches">
                  {product.colours.map((option) => (
                    <button
                      key={option.name}
                      type="button"
                      className={colour === option.name ? 'vx_swatch is_selected' : 'vx_swatch'}
                      aria-pressed={colour === option.name}
                      onClick={() => set_colour(option.name)}
                    >
                      <span className="vx_swatch_dot" style={{ backgroundColor: option.hex }} aria-hidden="true" />
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            {product.stock_status !== 'out_of_stock' ? (
              <QuantitySelector
                input_id="product-quantity"
                quantity={quantity}
                max={max_quantity}
                on_change={set_quantity}
              />
            ) : null}
            <div className="vx_detail_actions">
              <AddToCartButton
                product={product}
                quantity={quantity}
                size={size}
                colour={colour}
                class_name="vx_btn_full"
              />
              <WhatsAppButton message={enquiry} label="Enquire on WhatsApp" class_name="vx_btn_full" />
            </div>
          </div>
        </div>
      </article>
      <section className="vx_section vx_shell" aria-labelledby="related-title">
        <div className="vx_section_head">
          <p className="vx_kicker">Also in the edit</p>
          <h2 id="related-title">Related pieces</h2>
        </div>
        <ProductGrid products={related} empty_title="No related pieces" empty_text="Browse the full shop." />
      </section>
    </>
  );
}
