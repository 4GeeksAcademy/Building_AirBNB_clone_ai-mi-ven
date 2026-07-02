import type { ReactNode } from "react";

interface ContentSectionProps {
  sectionTitle: string;
  hasSubtitle: boolean;
  subtitleText: string;
  children: ReactNode;
}

export const ContentSection = ({
  sectionTitle,
  hasSubtitle,
  subtitleText,
  children,
}: ContentSectionProps) => {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1560px] px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{sectionTitle}</h2>
      {hasSubtitle && <p className="mt-1 text-sm text-zinc-600">{subtitleText}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
};
