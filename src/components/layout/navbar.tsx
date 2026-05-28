import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'py-3 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/[0.06]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <img
            src="src/assets/images/logo.png"
            alt="NCode"
            className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-medium text-white/40 hover:text-white/90 transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-medium tracking-[0.6px] uppercase text-white/60 border border-white/10 rounded-full hover:border-white/25 hover:text-white/90 transition-all duration-200"
          >
            Contato
          </a>

          <button
            className="p-1.5 text-white/40 hover:text-white/80 md:hidden transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0B0F19] border-b border-white/[0.06] md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-8 py-6 gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-1 py-3 text-center text-[11px] font-medium tracking-[0.6px] uppercase text-white/60 border border-white/10 rounded-full hover:border-white/25 hover:text-white/90 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Entrar em Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
