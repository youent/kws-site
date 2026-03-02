import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        {(title || description) && (
          <header className="mb-8 space-y-3">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-3xl text-base leading-7 text-slate-700">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}