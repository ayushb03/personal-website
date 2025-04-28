"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  // },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/about",
    name: "About",
  },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <nav className="py-4 mb-10 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900">
      <Link
        href="/"
        className="font-bold text-lg tracking-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
      >
        AB
      </Link>
      <div className="flex gap-1 sm:gap-2">
        {navItems.map(({ path, name }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 text-sm rounded-md transition-all ${
                isActive
                  ? "font-medium bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
