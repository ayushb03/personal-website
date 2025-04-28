import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mb-10 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight mb-6 border-b pb-2 border-neutral-200 dark:border-neutral-800">
        {title}
      </h2>
      <div className="pl-1">{children}</div>
    </section>
  );
}
