import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const CARD_WIDTH = 320;
  const GAP = 16;
  const STEP = CARD_WIDTH + GAP;

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener('scroll', updateArrows);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -STEP : STEP, behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    el.style.cursor = 'grabbing';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const stopDrag = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  return (
    <section id="projects" className="py-32 overflow-hidden">

      {/* Header */}
      <div className="mx-auto max-w-6xl px-8 mb-12 flex items-end justify-between">
        <div>
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-blue-500/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-blue-500/70">
              Projetos
            </span>
          </div>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold leading-tight tracking-tight text-white">
            Construindo soluções reais
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/30">
            Projetos desenvolvidos com foco em escalabilidade, performance
            e experiência real de produto.
          </p>
        </div>

        {/* Arrow controls */}
        <div className="hidden md:flex items-center gap-2 pb-1">
          <button
            onClick={() => scroll('left')}
            disabled={!canLeft}
            aria-label="Anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all hover:border-white/20 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canRight}
            aria-label="Próximo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all hover:border-white/20 hover:text-white/70 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-8 pb-4 select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
          paddingLeft: 'max(2rem, calc((100vw - 1152px) / 2 + 2rem))',
          paddingRight: 'max(2rem, calc((100vw - 1152px) / 2 + 2rem))',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative flex w-[320px] shrink-0 flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]"
          >
            {/* Logo */}
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] overflow-hidden">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name}
                  className="h-64 w-64 object-contain"
                  draggable={false}
                />
              ) : (
                <span className="text-[13px] font-bold text-white/30">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            {/* Name + status */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-[15px] font-semibold leading-snug text-white/90">
                {project.name}
              </h3>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide ${
                  project.status === 'Ativo' || project.status === 'Em desenvolvimento'
                    ? 'bg-emerald-500/10 text-emerald-400/80'
                    : 'bg-white/5 text-white/30'
                }`}
              >
                {(project.status === 'Ativo' || project.status === 'Em desenvolvimento') && (
                  <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
                )}
                {project.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-[13px] leading-[1.7] text-white/30 flex-1 mb-6">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[11px] text-white/35"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/[0.06] pt-4">
              <a
                href={project.href ?? '#'}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/25 transition-colors hover:text-white/60"
                draggable={false}
              >
                Ver projeto
                <ArrowRight size={11} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export { Projects };
