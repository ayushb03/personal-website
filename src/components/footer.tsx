import Link from 'next/link'
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:ayushbodade1@gmail.com',
    icon: <FaEnvelope className="w-5 h-5" />
  },
  {
    name: 'Twitter',
    url: 'https://x.com/ayushb03',
    icon: <FaXTwitter className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ayushb03',
    icon: <FaGithub className="w-5 h-5" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayushbodade/',
    icon: <FaLinkedin className="w-5 h-5" />
  },
]

export default function Footer() {
  return (
    <footer className="mt-10 pb-4 pt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <p className="text-md text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Ayush Bodade
          </p>
        </div>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? "_blank" : ""}
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
} 