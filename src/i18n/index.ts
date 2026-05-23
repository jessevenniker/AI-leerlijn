import nl from './nl.json';
import en from './en.json';
import pap from './pap.json';

export type Lang = 'nl' | 'en' | 'pap';

const translations = { nl, en, pap };

export function t(lang: Lang) {
  return translations[lang] ?? translations['nl'];
}

export const supportedLangs: Lang[] = ['nl', 'en', 'pap'];
export const defaultLang: Lang = 'nl';
