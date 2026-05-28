import React from 'react';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080c15]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -top-52 -right-24 h-[600px] w-[600px] rounded-full bg-blue-600/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 px-8 pt-24 pb-16 lg:grid-cols-2 lg:items-center">

        {/* Left — copy */}
        <div className="flex flex-col">
          {/* Badge */}
          <span className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-medium tracking-wide text-blue-400/80">
              Open Source Software Studio
            </span>
          </span>

          {/* Headline */}
          <h1 className="text-[clamp(40px,6vw,56px)] font-bold leading-[1.08] tracking-[-1.5px] text-white">
            Construindo<br />
            <span className="text-blue-500">software</span><br />
            moderno.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-sm text-[14px] leading-[1.75] text-white/35">
            Aplicações modernas, APIs robustas e experiências digitais
            com foco em performance, escalabilidade e código limpo.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-[12px] font-medium tracking-wide text-white transition-colors hover:bg-blue-700"
            >
              Ver Projetos
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/10 px-6 py-2.5 text-[12px] font-medium tracking-wide text-white/40 transition-all hover:border-white/20 hover:text-white/65"
            >
              Sobre o NCode
            </a>
          </div>

          {/* Stats */}
          <div className="mt-11 flex items-stretch gap-7">
            {[
              { val: '100%', label: 'Open Source' },
              { val: 'Modern', label: 'Stack' },
              { val: 'Clean', label: 'Architecture' },
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="w-px self-stretch bg-white/[0.07]" />}
                <div>
                  <p className="text-[22px] font-bold leading-none tracking-tight text-white">
                    {stat.val}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.1em] text-white/22">
                    {stat.label}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right — code card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1221]">

            {/* Title bar */}
            <div className="flex items-center gap-1.5 border-b border-white/[0.05] px-4 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-auto text-[11px] tracking-wide text-white/20">ncode.config.ts</span>
            </div>

            {/* Code body */}
            <div className="px-5 pt-5 pb-2 font-mono text-[12px] leading-[2]">
              {[
                { ln: 1, code: <><span className="text-indigo-400">const</span> <span className="text-blue-300">ncode</span> <span className="text-white/35">=</span> {'{'}</> },
                { ln: 2, code: <>&nbsp;&nbsp;<span className="text-blue-300">stack</span>: <span className="text-emerald-400">'TypeScript'</span>,</> },
                { ln: 3, code: <>&nbsp;&nbsp;<span className="text-blue-300">modern</span>: <span className="text-pink-400">true</span>,</> },
                { ln: 4, code: <>&nbsp;&nbsp;<span className="text-blue-300">cleanCode</span>: <span className="text-pink-400">true</span>,</> },
                { ln: 5, code: <>&nbsp;&nbsp;<span className="text-blue-300">openSource</span>: <span className="text-pink-400">true</span>,</> },
                { ln: 6, code: <>&nbsp;&nbsp;<span className="text-blue-300">scalable</span>: <span className="text-pink-400">true</span>,</> },
                { ln: 7, code: <>{'}'}</> },
                { ln: 8, code: <>&nbsp;</> },
                { ln: 9, code: <span className="text-white/20">{'// building the future'}</span> },
              ].map(({ ln, code }) => (
                <div key={ln} className="flex gap-3">
                  <span className="min-w-[14px] select-none text-right text-white/12">{ln}</span>
                  <span>{code}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-1 flex items-center gap-1.5 border-t border-white/[0.04] px-5 py-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/50" />
              <span className="text-[10px] tracking-[0.06em] text-white/18">
                Sistemas Operacionais &nbsp;&middot;&nbsp; TypeScript 5.4
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export { Hero };
