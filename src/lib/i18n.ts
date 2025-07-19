export const locales = ['en', 'zh-cn', 'fr', 'de', 'es', 'it'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'zh-cn': '中文',
  'fr': 'Français',
  'de': 'Deutsch',
  'es': 'Español',
  'it': 'Italiano',
}

export const localeFlags: Record<Locale, string> = {
  'en': '🇺🇸',
  'zh-cn': '🇨🇳',
  'fr': '🇫🇷',
  'de': '🇩🇪',
  'es': '🇪🇸',
  'it': '🇮🇹',
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1]
  
  if (isValidLocale(locale)) {
    return locale
  }
  
  return defaultLocale
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/')
  const locale = segments[1]
  
  if (isValidLocale(locale)) {
    return '/' + segments.slice(2).join('/')
  }
  
  return pathname
} 