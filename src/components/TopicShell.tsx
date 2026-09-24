"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TocItem = { id: string; label: string };

export default function TopicShell({
  children,
  toc,
}: {
  children: React.ReactNode;
  toc: TocItem[];
}) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="mx-auto flex max-w-6xl gap-16 px-6 py-16">
      <article className="min-w-0 max-w-2xl flex-1">{children}</article>

      {toc.length > 0 && (
        <nav className="sticky top-16 hidden h-fit w-48 shrink-0 xl:block">
          <p className="mb-3 text-xs font-medium text-muted">En esta página</p>
          <ul className="flex flex-col gap-2 border-l border-border">
            {toc.map((item) => {
              const activo = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`-ml-px block border-l-2 py-0.5 pl-4 text-sm transition-colors ${
                      activo
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}