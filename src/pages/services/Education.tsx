import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, BookOpen, Users, GraduationCap, Award, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Education = () => {
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
      title: 'Alphabétisation pour adultes',
      description: 'Cours de lecture, écriture et calcul pour les adultes non alphabétisés.',
      duration: '6 mois',
      location: '25 centres communautaires',
    },
    {
      title: 'Bourses d\'études',
      description: 'Soutien financier aux jeunes talentueux pour poursuivre leurs études.',
      duration: 'Année scolaire',
      location: 'Toute la Côte d\'Ivoire',
    },
    {
      title: 'Formation professionnelle',
      description: 'Apprentissage des métiers manuels et techniques qualifiants.',
      duration: '3 à 12 mois',
      location: 'Centres de formation partenaires',
    },
    {
      title: 'Éducation financière',
      description: 'Apprentissage de la gestion budgétaire et de l\'épargne.',
      duration: '2 mois',
      location: 'En communauté',
    },
  ];

  const impacts = [
    { value: '500+', label: 'Personnes alphabétisées', icon: Users },
    { value: '200+', label: 'Bourses accordées', icon: GraduationCap },
    { value: '25', label: 'Centres actifs', icon: MapPin },
    { value: '85%', label: 'Taux de réussite', icon: Award },
  ];

  const testimonials = [
    {
      quote: 'Grâce à MAC.CI, j\'ai appris à lire et écrire à 45 ans. Aujourd\'hui, je peux aider mes enfants avec leurs devoirs et gérer mon petit commerce.',
      name: 'Aminata Traoré',
      role: 'Bénéficiaire du programme d\'alphabétisation',
      image: '/testimonial-1.jpg',
    },
    {
      quote: 'La bourse de MAC.CI m\'a permis de terminer mes études secondaires. Je suis maintenant en formation d\'infirmière.',
      name: 'Kouamé Aya',
      role: 'Boursière 2023',
      image: '/testimonial-3.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/education.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              Programme phare
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Éducation & <span className="text-blue-400">Formation</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              L&apos;éducation est la clé de l&apos;autonomisation. Nos programmes d&apos;alphabétisation, 
              de bourses et de formation professionnelle ouvrent des portes vers un avenir meilleur 
              pour des milliers d&apos;Ivoiriens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 rounded-full">
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-blue-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes d&apos;éducation
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des programmes adaptés aux besoins de chaque apprenant, du débutant 
              au futur professionnel.
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
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
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

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Comment ça marche
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Le parcours de nos apprenants
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inscription', description: 'Les candidats s\'inscrivent dans l\'un de nos centres communautaires.' },
              { step: '02', title: 'Évaluation', description: 'Nous évaluons le niveau et les besoins de chaque apprenant.' },
              { step: '03', title: 'Formation', description: 'Cours pratiques et interactifs avec des formateurs qualifiés.' },
              { step: '04', title: 'Certification', description: 'Obtention d\'un certificat reconnu et accompagnement post-formation.' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-blue-100 -z-10" />
                )}
              </div>
            ))}
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
              Ils ont transformé leur vie grâce à l&apos;éducation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
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
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Contribuez à l&apos;éducation en Côte d&apos;Ivoire
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Votre soutien permet à des centaines de personnes d&apos;accéder à l&apos;éducation 
            et de transformer leur vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg">
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

export default Education;
