import React from 'react';

const pillars = [
  {
    label: 'Performance',
    desc: 'Arquiteturas otimizadas para escala, com benchmarks reais e zero overhead desnecessário.',
  },
  {
    label: 'Clean Code',
    desc: 'Código legível, testável e documentado — construído para durar e crescer com o produto.',
  },
  {
    label: 'Open Source',
    desc: 'Tudo que construímos é aberto por padrão. Acreditamos que bom software deve ser compartilhado.',
  },
  {
    label: 'Developer XP',
    desc: 'Ferramentas e APIs desenhadas para quem vai usar. DX é feature, não detalhe.',
  },
];

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-8 py-32">

      {/* Top grid — eyebrow + heading / body copy */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 mb-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-blue-500/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-blue-500/70">
              Sobre o NCode
            </span>
          </div>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-bold leading-[1.15] tracking-tight text-white">
            Engenharia de software com foco em qualidade e escalabilidade.
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <p className="text-[14px] leading-[1.8] text-white/30">
            O NCode é um estúdio de desenvolvimento focado na construção
            de aplicações web, APIs e soluções digitais modernas.
          </p>
          <p className="text-[14px] leading-[1.8] text-white/30">
            Cada projeto é desenvolvido com foco em performance, arquitetura
            limpa, experiência real de produto e visão open source.
          </p>
        </div>
      </div>

      {/* Pillars grid */}
      <div className="grid grid-cols-2 gap-px border border-white/[0.06] rounded-2xl overflow-hidden lg:grid-cols-4">
        {pillars.map((p) => (
          <div
            key={p.label}
            className="flex flex-col gap-3 bg-white/[0.02] px-6 py-7 transition-colors hover:bg-white/[0.04]"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-blue-500/60">
              {p.label}
            </span>
            <p className="text-[12px] leading-[1.7] text-white/28">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export { About };
