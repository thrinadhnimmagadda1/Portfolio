import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger children if present
            const children = el.querySelectorAll<HTMLElement>('[data-stagger]');
            if (children.length > 0) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add('visible');
                }, i * 100);
              });
            }
            el.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const target = ref.current;
    if (target) {
      observer.observe(target);
      // Also observe children with animate-on-scroll
      const children = target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useActiveSection(sectionIds: string[]) {
  const activeSection = useRef<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.current = entry.target.id;
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
