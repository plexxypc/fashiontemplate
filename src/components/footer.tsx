import type { ReactElement } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsletterForm } from './newsletter_form.tsx';
import { WhatsAppButton } from './whatsapp_button.tsx';
import { store } from '../config/store.ts';
import { format_store_address } from '../lib/page_meta.ts';

/**
 * Footer with contact, social links, policies, navigation, and the newsletter.
 *
 * @returns The site footer.
 */
export function Footer(): ReactElement {
  const year = new Date().getFullYear();
  return (
    <footer className="vx_footer">
      <div className="vx_shell">
        <div className="vx_footer_news">
          <div>
            <p className="vx_kicker">{store.store_name}</p>
            <h2>{store.homepage.newsletter_title}</h2>
          </div>
          <NewsletterForm />
        </div>
        <div className="row gy-5 vx_footer_grid">
          <div className="col-md-4">
            <p className="vx_logo">{store.logo.text}</p>
            <p>{store.tagline}</p>
          </div>
          <div className="col-6 col-md-2">
            <h2>Visit</h2>
            <ul>
              {store.footer_navigation.map((item) => (
                <li key={`${item.label}-${item.path}`}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h2>Studio</h2>
            <p>{format_store_address()}</p>
            <p>{store.hours}</p>
            <p><a href={`mailto:${store.contact.email}`}>{store.contact.email}</a></p>
            <p><a href={`tel:${store.contact.phone_tel}`}>{store.contact.phone_display}</a></p>
            <WhatsAppButton label="WhatsApp the studio" />
          </div>
          <div className="col-md-3">
            <h2>Social</h2>
            <ul>
              {store.social_links.map((link) => (
                <li key={link.url + link.label}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="vx_fine">© {year} {store.store_name}. Demo storefront. Payments are not live.</p>
      </div>
    </footer>
  );
}
