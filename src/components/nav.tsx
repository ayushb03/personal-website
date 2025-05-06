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
  {
    path: "https://drive.google.com/file/d/1hP32R7VK1aXcdZTXeOEjP8WyG18Sy4m0/view?usp=sharing",
    name: "CV",
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
          const isExternal = path.startsWith('http');
          
          if (isExternal) {
            return (
              <a
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 text-sm rounded-md transition-all text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900`}
              >
                {name}
              </a>
            );
          }
          
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
