import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Users, TrendingUp, Award, Heart, Briefcase, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Femmes = () => {
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
      title: 'Microcrédits adaptés',
      description: 'Prêts à taux préférentiels pour financer la création ou le développement d\'activités.',
      duration: '12 à 24 mois',
      location: 'Toute la Côte d\'Ivoire',
    },
    {
      title: 'Formation en entrepreneuriat',
      description: 'Apprentissage de la gestion d\'entreprise, du marketing et de la comptabilité.',
      duration: '3 mois',
      location: 'Centres de formation',
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Suivi individuel par des mentors expérimentés pour réussir son projet.',
      duration: 'Continu',
      location: 'En ligne et présentiel',
    },
    {
      title: 'Réseautage et mentorat',
      description: 'Connexion avec d\'autres entrepreneures et accès à un réseau de soutien.',
      duration: 'Événements réguliers',
      location: 'Communautés locales',
    },
  ];

  const impacts = [
    { value: '800+', label: 'Femmes autonomisées', icon: Users },
    { value: '450+', label: 'Entreprises créées', icon: Briefcase },
    { value: '2,500+', label: 'Emplois générés', icon: TrendingUp },
    { value: '95%', label: 'Taux de remboursement', icon: Award },
  ];

  const testimonials = [
    {
      quote: 'Le microcrédit de MAC.CI m\'a permis de lancer mon atelier de couture. Aujourd\'hui, j\'emploie 8 femmes de mon quartier. Nous créons ensemble un cercle vertueux de développement.',
      name: 'Fatou Ouattara',
      role: 'Entrepreneure, Programme Microfinance',
      image: '/testimonial-4.jpg',
    },
    {
      quote: 'La formation en gestion d\'entreprise m\'a donné les outils pour faire prospérer ma petite entreprise agroalimentaire. Je peux maintenant subvenir aux besoins de ma famille.',
      name: 'Awa Koné',
      role: 'Fondatrice de Awa Delices',
      image: '/testimonial-3.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/femmes.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/85 to-purple-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Programme phare
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Autonomisation des <span className="text-purple-400">Femmes</span>
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed mb-8">
              L&apos;autonomisation économique des femmes est au cœur de notre mission. 
              Grâce à nos programmes de microfinance, de formation et d&apos;accompagnement, 
              des centaines de femmes deviennent des entrepreneures à succès.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 rounded-full">
                  Soutenir ce programme
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full">
                  Devenir mentor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-purple-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes pour l&apos;autonomisation
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un accompagnement complet pour transformer les femmes en actrices 
              économiques de leur communauté.
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
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
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

      {/* Success Stories */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-6">
                Secteurs d&apos;activité
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Des femmes actives dans tous les secteurs
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Artisanat et couture', desc: 'Ateliers de couture, confection de pagnes et accessoires traditionnels.' },
                  { title: 'Agroalimentaire', desc: 'Transformation des produits agricoles, production de jus et confitures.' },
                  { title: 'Commerce', desc: 'Boutiques alimentaires, vente de produits cosmétiques naturels.' },
                  { title: 'Services', desc: 'Coiffure, esthétique, restauration et prestations de services.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/femmes.jpg" alt="Femmes entrepreneures" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-purple-600 mb-1">95%</div>
                <div className="text-slate-600 text-sm">Taux de remboursement<br />des microcrédits</div>
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
              Des entrepreneures qui inspirent
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ensemble pour l&apos;égalité
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Votre soutien permet aux femmes ivoiriennes de réaliser leur potentiel 
            et de devenir des leaders économiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-full text-lg">
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

export default Femmes;
