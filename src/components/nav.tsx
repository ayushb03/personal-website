'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/about',
    name: 'About',
  },
]

export function Navbar() {
  let pathname = usePathname() || '/'

  return (
    <nav className="flex flex-row items-center justify-between relative mb-8">
      <Link href="/" className="font-bold text-lg">
        Ayush Bodade
      </Link>
      <div className="flex gap-2 font-semibold">
        {navItems.map(({ path, name }) => {
          const isActive = pathname === path
          return (
            <Link
              key={path}
              href={path}
              className={`px-4 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all ${
                isActive ? 'font-bold' : ''
              }`}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 