import { store } from '../config/store.ts';
import type { CurrencyConfig } from '../config/types.ts';

/**
 * Formats a naira amount with `Intl.NumberFormat`.
 * Amounts are whole naira. The locale and currency come from the store config.
 *
 * @param amount - Whole currency amount.
 * @param currency - Locale and ISO currency code. Defaults to the store currency.
 * @returns A formatted currency string such as the local naira representation.
 */
export function format_money(amount: number, currency: CurrencyConfig = store.currency): string {
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(amount);
}
