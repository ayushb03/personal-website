"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as Locale;

  return (
    <nav className="py-4 mb-8 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900">
      <Link
        href={`/${currentLocale}`}
        className="font-bold text-lg tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
      >
        AB
      </Link>
      
      <div className="flex items-center gap-2">
        {locales.map((locale) => (
          <Button
            key={locale}
            variant={locale === currentLocale ? "default" : "outline"}
            size="sm"
            asChild
            className="min-w-0 px-2"
          >
            <Link href={`/${locale}`} title={localeNames[locale]}>
              {localeFlags[locale]}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
