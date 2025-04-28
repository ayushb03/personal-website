import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Email",
    url: "mailto:ayushbodade1@gmail.com",
    icon: <FaEnvelope className="w-4 h-4" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/ayushb03",
    icon: <FaXTwitter className="w-4 h-4" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ayushb03",
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayushbodade/",
    icon: <FaLinkedin className="w-4 h-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-neutral-100 dark:border-neutral-900">
      <div className="flex flex-col md:flex-row md:justify-between gap-6 md:items-center">
        <div className="space-y-2">
          <div className="font-medium">Ayush Bodade</div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Build the Future and Beyond
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : ""}
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Ayush Bodade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
