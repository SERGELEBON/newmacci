import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Briefcase, Users, TrendingUp, Award, Wrench, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Emploi = () => {
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
      title: 'Formation professionnelle',
      description: 'Apprentissage des métiers du bâtiment, de la mécanique, de l\'électricité et de la couture.',
      duration: '6 à 12 mois',
      location: 'Centres de formation',
    },
    {
      title: 'Coaching et mentorat',
      description: 'Accompagnement personnalisé pour développer son projet professionnel.',
      duration: 'Continu',
      location: 'En ligne et présentiel',
    },
    {
      title: 'Mise en relation',
      description: 'Connexion avec des employeurs et accès aux offres d\'emploi.',
      duration: 'Permanent',
      location: 'Plateforme digitale',
    },
    {
      title: 'Entrepreneuriat',
      description: 'Soutien à la création d\'entreprise et accès au financement.',
      duration: 'Variable',
      location: 'Incubateurs locaux',
    },
  ];

  const impacts = [
    { value: '600+', label: 'Emplois créés', icon: Briefcase },
    { value: '400+', label: 'Jeunes formés', icon: Users },
    { value: '150+', label: 'Entreprises créées', icon: TrendingUp },
    { value: '75%', label: 'Taux d\'insertion', icon: Award },
  ];

  const sectors = [
    { name: 'Bâtiment & Travaux publics', icon: Wrench },
    { name: 'Mécanique & Automobile', icon: Wrench },
    { name: 'Électricité & Électronique', icon: Wrench },
    { name: 'Couture & Mode', icon: Wrench },
    { name: 'Agroalimentaire', icon: Wrench },
    { name: 'Services & Commerce', icon: Wrench },
  ];

  const testimonials = [
    {
      quote: 'La formation en mécanique de MAC.CI m\'a permis d\'ouvrir mon propre garage. Aujourd\'hui, j\'emploie trois jeunes de mon quartier.',
      name: 'Kouamé Koffi',
      role: 'Mécanicien, Abidjan',
      image: '/testimonial-2.jpg',
    },
    {
      quote: 'Grâce au programme d\'insertion de MAC.CI, j\'ai trouvé un emploi stable dans une entreprise de construction.',
      name: 'Aya Bamba',
      role: 'Ouvrière qualifiée, Yamoussoukro',
      image: '/testimonial-4.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/emploi.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 via-cyan-900/85 to-cyan-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4" />
              Programme stratégique
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insertion <span className="text-cyan-400">Professionnelle</span>
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed mb-8">
              L&apos;emploi est la clé de l&apos;autonomie. Nous formons les jeunes et les adultes 
              aux métiers porteurs, les accompagnons vers l&apos;emploi et soutenons ceux qui 
              souhaitent créer leur entreprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 rounded-full">
                  Soutenir ce programme
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full">
                  Devenir partenaire employeur
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-cyan-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes d&apos;insertion
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un accompagnement complet du diagnostic professionnel à l&apos;emploi 
              ou à la création d&apos;entreprise.
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
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-cyan-600" />
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

      {/* Sectors */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Secteurs de formation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des métiers porteurs pour l&apos;avenir
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <sector.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-800">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Parcours d&apos;insertion
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              De la formation à l&apos;emploi
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Orientation', desc: 'Diagnostic des compétences et définition du projet professionnel.' },
              { step: '02', title: 'Formation', desc: 'Apprentissage pratique dans un métier choisi avec des formateurs experts.' },
              { step: '03', title: 'Stage', desc: 'Immersion en entreprise pour acquérir de l\'expérience professionnelle.' },
              { step: '04', title: 'Emploi', desc: 'Accompagnement dans la recherche d\'emploi ou la création d\'entreprise.' },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des parcours réussis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm">
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Construisons l&apos;avenir professionnel des jeunes
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            Votre soutien permet aux jeunes Ivoiriens d&apos;accéder à une formation 
            qualifiante et de trouver un emploi décent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 rounded-full text-lg">
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

export default Emploi;
