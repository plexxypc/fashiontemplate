import { useState } from 'react';
import type { FormEvent, ReactElement } from 'react';
import { Seo } from '../components/seo.tsx';
import { WhatsAppButton } from '../components/whatsapp_button.tsx';
import { store } from '../config/store.ts';
import { format_store_address, page_title } from '../lib/page_meta.ts';
import { is_valid_email } from '../lib/validate_email.ts';
import { is_valid_phone } from '../lib/validate_phone.ts';

/**
 * Contact details and a demo message form. The form does not email the studio.
 *
 * @returns The contact page.
 */
export function ContactPage(): ReactElement {
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [phone, set_phone] = useState('');
  const [message, set_message] = useState('');
  const [error, set_error] = useState('');
  const [demo_name, set_demo_name] = useState('');

  function handle_submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (name.trim().length < 2) {
      set_error('Enter your name.');
      set_demo_name('');
      return;
    }
    if (!is_valid_email(email)) {
      set_error('Enter a valid email address.');
      set_demo_name('');
      return;
    }
    if (!is_valid_phone(phone)) {
      set_error('Use a Nigerian number (080… or +234…) or an international number starting with +.');
      set_demo_name('');
      return;
    }
    if (message.trim().length < 8) {
      set_error('Write a short message.');
      set_demo_name('');
      return;
    }
    set_error('');
    set_demo_name(name.trim());
  }

  return (
    <>
      <Seo
        title={page_title('Contact')}
        description={`Contact the ${store.store_name} studio in ${store.address.city}.`}
        path="/contact"
      />
      <section className="vx_shell vx_page_block vx_contact">
        <header className="vx_page_header">
          <p className="vx_kicker">Contact</p>
          <h1>Write to the studio</h1>
          <p className="vx_lede">{format_store_address()}. {store.hours}</p>
        </header>
        <div className="vx_contact_grid">
          <form onSubmit={handle_submit} noValidate>
            <div className="vx_field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" className="form-control vx_input" value={name} autoComplete="name" onChange={(event) => set_name(event.target.value)} />
            </div>
            <div className="vx_field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" className="form-control vx_input" type="email" autoComplete="email" value={email} onChange={(event) => set_email(event.target.value)} />
            </div>
            <div className="vx_field">
              <label htmlFor="contact-phone">Phone</label>
              <input id="contact-phone" className="form-control vx_input" type="tel" autoComplete="tel" value={phone} onChange={(event) => set_phone(event.target.value)} />
            </div>
            <div className="vx_field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" className="form-control vx_input" rows={5} value={message} onChange={(event) => set_message(event.target.value)} />
            </div>
            {error ? <p className="vx_error" role="alert">{error}</p> : null}
            {demo_name ? (
              <p className="vx_demo_note" role="status">
                Demo message saved for {demo_name}. Nothing was emailed to {store.contact.email}.
              </p>
            ) : null}
            <button className="vx_btn" type="submit">Send demo message</button>
          </form>
          <aside>
            <p><a href={`mailto:${store.contact.email}`}>{store.contact.email}</a></p>
            <p><a href={`tel:${store.contact.phone_tel}`}>{store.contact.phone_display}</a></p>
            <WhatsAppButton label="WhatsApp the studio" />
          </aside>
        </div>
      </section>
    </>
  );
}
