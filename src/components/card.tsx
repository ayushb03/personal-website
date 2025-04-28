import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  link?: {
    url: string;
    text: string;
    external?: boolean;
  };
  className?: string;
}

export function Card({
  title,
  subtitle,
  children,
  link,
  className = "",
}: CardProps) {
  return (
    <div
      className={`p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all ${className}`}
    >
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3">
          {subtitle}
        </p>
      )}
      <div className="text-neutral-600 dark:text-neutral-400 mb-3">
        {children}
      </div>
      {link && (
        <Link
          href={link.url}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          target={link.external ? "_blank" : ""}
          rel={link.external ? "noopener noreferrer" : ""}
        >
          {link.text} {link.external && "↗"}
        </Link>
      )}
    </div>
  );
}
