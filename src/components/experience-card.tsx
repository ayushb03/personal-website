import { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  children: ReactNode;
}

export function ExperienceCard({
  title,
  company,
  period,
  location,
  children,
}: ExperienceCardProps) {
  return (
    <div className="group mb-6 pb-6 border-b border-neutral-100 dark:border-neutral-900 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">{company}</p>
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 sm:mt-0 sm:text-right">
          <div className="whitespace-nowrap">{period}</div>
          {location && <div>{location}</div>}
        </div>
      </div>
      <div className="text-neutral-600 dark:text-neutral-400 text-sm">
        {children}
      </div>
    </div>
  );
}
