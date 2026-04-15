import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Home, Users, Building2, Droplets, Sun, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Logement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: 'Construction de logements',
      description: 'Bâtiment de maisons durables en matériaux locaux pour les familles sans abri.',
      duration: '3 à 6 mois',
      location: 'Communautés partenaires',
    },
    {
      title: 'Réhabilitation d\'habitations',
      description: 'Rénovation des maisons dégradées pour améliorer les conditions de vie.',
      duration: '1 à 3 mois',
      location: 'Zones ciblées',
    },
    {
      title: 'Accès à l\'eau potable',
      description: 'Construction de puits et forages pour l\'approvisionnement en eau.',
      duration: '2 mois',
      location: 'Villages ruraux',
    },
    {
      title: 'Assainissement',
      description: 'Construction de latrines et gestion des déchets pour des quartiers sains.',
      duration: 'Continu',
      location: 'Toutes les zones',
    },
  ];

  const impacts = [
    { value: '300+', label: 'Logements construits', icon: Home },
    { value: '150+', label: 'Puits réalisés', icon: Droplets },
    { value: '1,500+', label: 'Personnes logées', icon: Users },
    { value: '500+', label: 'Latrines construites', icon: Building2 },
  ];

  const testimonials = [
    {
      quote: 'Grâce à MAC.CI, nous avons enfin une maison digne avec de l\'eau courante. Mes enfants peuvent étudier dans de bonnes conditions.',
      name: 'Yao Kouassi',
      role: 'Bénéficiaire, village de Bouaké',
      image: '/testimonial-2.jpg',
    },
    {
      quote: 'Le puits construit par MAC.CI a changé notre vie. Nous n\'avons plus à marcher des kilomètres pour chercher de l\'eau.',
      name: 'Aminata Koné',
      role: 'Bénéficiaire, région du Worodougou',
      image: '/testimonial-1.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-900/85 to-orange-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-6">
              <Home className="w-4 h-4" />
              Programme essentiel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Logement <span className="text-orange-400">Social</span>
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed mb-8">
              Un toit digne pour chaque famille. Nous construisons et réhabilitons des logements 
              décents tout en améliorant l&apos;accès à l&apos;eau potable et à l&apos;assainissement 
              dans les communautés défavorisées.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 rounded-full">
                  Soutenir ce programme
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full">
                  Devenir bénévole
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-orange-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes de logement
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des interventions complètes pour offrir des conditions de vie décentes 
              aux familles vulnérables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                    <p className="text-slate-600">{program.description}</p>
                  </div>
                </div>
                <div className="flex gap-6 mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    {program.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Method */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="/hero-bg.jpg" alt="Construction" className="rounded-3xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                Notre approche
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Construction durable et participative
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Matériaux locaux', desc: 'Utilisation de terre, de bois et d\'autres matériaux disponibles localement pour réduire les coûts.' },
                  { title: 'Participation communautaire', desc: 'Les bénéficiaires participent activement à la construction de leur maison.' },
                  { title: 'Techniques améliorées', desc: 'Application de techniques de construction modernes pour des maisons durables.' },
                  { title: 'Infrastructure complète', desc: 'Chaque logement est équipé d\'un accès à l\'eau et à des latrines.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Sun className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des familles dans des foyers dignes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Offrez un toit à ceux qui en ont besoin
          </h2>
          <p className="text-xl text-orange-100 mb-10">
            Votre don permet de construire des logements décents et d&apos;améliorer 
            les conditions de vie des familles vulnérables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-full text-lg">
                Faire un don
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logement;
