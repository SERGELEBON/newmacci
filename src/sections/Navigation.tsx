import { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    {
      name: 'Nos Actions',
      href: '/services',
      children: [
        { name: 'Les Gens de Métiers', href: '/services/education' },
        { name: 'Veuves & Orphelins', href: '/services/sante' },
        { name: 'Agriculture Durable', href: '/services/agriculture' },
        { name: 'Autonomisation des Femmes', href: '/services/femmes' },
        { name: 'Entrepreneuriat', href: '/services/logement' },
        { name: 'Insertion Professionnelle', href: '/services/emploi' },
      ]
    },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/'
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo_trans.png"
                alt="MACCI Logo"
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${isScrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-white'
                  }`}>
                  MACCI
                </span>
                <span className={`text-[10px] uppercase tracking-wider transition-colors duration-300 ${isScrolled || location.pathname !== '/' ? 'text-slate-500' : 'text-white/80'
                  }`}>

                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.href}
                        className={`text-sm font-medium transition-all duration-300 hover:text-emerald-500 flex items-center gap-1 ${isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-white/90'
                          } ${isActive(link.href) ? 'text-emerald-500' : ''}`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </Link>

                      {/* Dropdown */}
                      <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}>
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 py-2 min-w-[280px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-3 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm font-medium transition-all duration-300 hover:text-emerald-500 relative group ${isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-white/90'
                        } ${isActive(link.href) ? 'text-emerald-500' : ''}`}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/donate">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un don
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 max-h-[80vh] overflow-y-auto ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={`text-slate-700 hover:text-emerald-600 font-medium py-3 px-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 block ${isActive(link.href) ? 'text-emerald-600 bg-emerald-50' : ''
                    }`}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`text-sm text-slate-500 hover:text-emerald-600 py-2 px-4 rounded-lg hover:bg-emerald-50 transition-all block ${isActive(child.href) ? 'text-emerald-600 bg-emerald-50' : ''
                          }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/donate" className="mt-4">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6">
                <Heart className="w-4 h-4 mr-2" />
                Faire un don
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
