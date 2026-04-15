import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Sprout, Users, TrendingUp, Leaf, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Agriculture = () => {
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
      title: 'Formation aux techniques modernes',
      description: 'Apprentissage des pratiques agricoles durables et respectueuses de l\'environnement.',
      duration: '3 mois',
      location: 'Champs-écoles',
    },
    {
      title: 'Accès aux intrants',
      description: 'Distribution de semences améliorées, d\'engrais bio et d\'outils agricoles.',
      duration: 'Saison culturale',
      location: 'Coopératives partenaires',
    },
    {
      title: 'Gestion durable des sols',
      description: 'Techniques de conservation des sols et de lutte contre l\'érosion.',
      duration: 'Continu',
      location: 'Toutes les zones',
    },
    {
      title: 'Commercialisation',
      description: 'Appui à la vente des produits et accès aux marchés locaux et internationaux.',
      duration: 'Post-récolte',
      location: 'Marchés et coopératives',
    },
  ];

  const impacts = [
    { value: '1,200+', label: 'Agriculteurs formés', icon: Users },
    { value: '50%', label: 'Augmentation des rendements', icon: TrendingUp },
    { value: '30+', label: 'Coopératives accompagnées', icon: Sprout },
    { value: '2,000+', label: 'Hectares aménagés', icon: Leaf },
  ];

  const testimonials = [
    {
      quote: 'Les formations en agriculture durable de MAC.CI ont doublé ma production de cacao. Les techniques modernes qu\'ils nous ont enseignées respectent l\'environnement et augmentent nos revenus.',
      name: 'Kouadio Jean-Baptiste',
      role: 'Agriculteur, Coopérative de Yamoussoukro',
      image: '/testimonial-2.jpg',
    },
    {
      quote: 'Grâce à l\'accompagnement de MAC.CI, notre coopérative a obtenu la certification bio et accède maintenant aux marchés européens.',
      name: 'Koné Amadou',
      role: 'Président de la Coopérative Katiola',
      image: '/fondateur.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/agriculture.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-900/85 to-emerald-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
              <Sprout className="w-4 h-4" />
              Programme stratégique
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Agriculture <span className="text-emerald-400">Durable</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed mb-8">
              L&apos;agriculture est le pilier de l&apos;économie ivoirienne. Nous accompagnons les 
              agriculteurs vers des pratiques durables qui augmentent les rendements tout en 
              préservant l&apos;environnement pour les générations futures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 rounded-full">
                  Soutenir ce programme
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full">
                  Devenir partenaire agricole
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-emerald-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes agricoles
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un accompagnement complet pour moderniser l&apos;agriculture ivoirienne 
              et améliorer les revenus des paysans.
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
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

      {/* Techniques */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="/agriculture.jpg" alt="Agriculture durable" className="rounded-3xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                Techniques enseignées
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Agriculture intelligente face au climat
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Agroforesterie', desc: 'Association des cultures vivrières avec des arbres pour préserver les sols.' },
                  { title: 'Irrigation efficiente', desc: 'Techniques d\'irrigation goutte-à-goutte et de récupération d\'eau de pluie.' },
                  { title: 'Agriculture biologique', desc: 'Utilisation d\'engrais naturels et lutte biologique contre les ravageurs.' },
                  { title: 'Rotation des cultures', desc: 'Alternance des cultures pour maintenir la fertilité des sols.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-emerald-600" />
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
              Des agriculteurs qui réussissent
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Cultivons l&apos;avenir ensemble
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Votre soutien permet aux agriculteurs ivoiriens d&apos;adopter des pratiques 
            durables et d&apos;améliorer leurs revenus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg">
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

export default Agriculture;
