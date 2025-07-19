"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-4 mb-8 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900">
      <Link
        href="/"
        className="font-bold text-lg tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
      >
        AB
      </Link>
    </nav>
  );
}
