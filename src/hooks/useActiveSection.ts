import { useEffect, useMemo, useState } from "react";

export type SectionId =
  | "hero"
  | "about"
  | "projects"
  | "research"
  | "skills"
  | "experience"
  | "contact";

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeId, setActiveId] = useState<SectionId>(sectionIds[0] ?? "hero");

  const ids = useMemo(() => sectionIds, [sectionIds]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id as SectionId);
      },
      {
        root: null,
        // "active" when roughly centered in viewport
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
