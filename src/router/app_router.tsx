import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StoreLayout } from '../components/store_layout.tsx';
import { AboutPage } from '../pages/about_page.tsx';
import { CartPage } from '../pages/cart_page.tsx';
import { CheckoutPage } from '../pages/checkout_page.tsx';
import { CollectionPage } from '../pages/collection_page.tsx';
import { ContactPage } from '../pages/contact_page.tsx';
import { HomePage } from '../pages/home_page.tsx';
import { NotFoundPage } from '../pages/not_found_page.tsx';
import { OrderSuccessPage } from '../pages/order_success_page.tsx';
import { ProductPage } from '../pages/product_page.tsx';
import { ShopPage } from '../pages/shop_page.tsx';

/**
 * Application routes. Every storefront URL is declared here.
 *
 * @returns The router tree.
 */
export function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
