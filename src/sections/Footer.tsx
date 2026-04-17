import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    actions: [
      { name: 'Éducation & Formation', href: '/services/education' },
      { name: 'Santé Communautaire', href: '/services/sante' },
      { name: 'Agriculture Durable', href: '/services/agriculture' },
      { name: 'Autonomisation des Femmes', href: '/services/femmes' },
      { name: 'Logement Social', href: '/services/logement' },
      { name: 'Insertion Professionnelle', href: '/services/emploi' },
    ],
    organisation: [
      { name: 'À propos', href: '/about' },
      { name: 'Nos Actions', href: '/services' },
      { name: 'Témoignages', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Mentions légales', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'Conditions d\'utilisation', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/logo_trans.png"
                alt="MACCI Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">MACCI</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">

                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mouvement des Artisans de Côte d&apos;Ivoire et à l&apos;International. Autonomisant les gens de métiers, les veuves et les orphelins par l&apos;entrepreneuriat et la formation.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Actions Column */}
          <div>
            <h4 className="font-semibold text-white mb-6">Nos Actions</h4>
            <ul className="space-y-3">
              {footerLinks.actions.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation Column */}
          <div>
            <h4 className="font-semibold text-white mb-6">Organisation</h4>
            <ul className="space-y-3">
              {footerLinks.organisation.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">@</span>
                </div>
                <span className="text-slate-400">Abidjan, Côte d&apos;Ivoire</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">T</span>
                </div>
                <span className="text-slate-400">+225 07 07 64 63 61</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-xs">E</span>
                </div>
                <span className="text-slate-400">contact@mac.ci</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium text-white text-sm mb-3">
                Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <span>&copy; {new Date().getFullYear()} MAC.CI. Tous droits réservés.</span>
              <span className="hidden md:inline">|</span>
              <div className="flex gap-4">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Fait avec Serge GUEHI</span>
              <span>en Côte d'Ivoire</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50 flex items-center justify-center"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
