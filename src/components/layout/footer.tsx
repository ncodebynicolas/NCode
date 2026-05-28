import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Empresa: [
      { name: 'Home', href: '#home' },
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Carreiras', href: '#' },
    ],
    Servicos: [
      { name: 'Projetos', href: '#projects' },
      { name: 'Consultoria', href: '#' },
      { name: 'Open Source', href: '#' },
    ],
    Suporte: [
      { name: 'Contato', href: '#contact' },
      { name: 'Privacidade', href: '#' },
      { name: 'Termos', href: '#' },
    ],
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0B0F19] border-t border-white/[0.06] pt-16 pb-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <img
                src="/ncode_full_logo_2.png"
                alt="NCode"
                className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-[13px] text-white/30 leading-relaxed max-w-[260px]">
              Transformando ideias complexas em soluções digitais elegantes e escaláveis.
            </p>
            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/20">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-1 text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={11}
                        strokeWidth={1.5}
                        className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20">
            © {currentYear} NCode Software Studio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse" />
            Sistemas Operacionais
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
